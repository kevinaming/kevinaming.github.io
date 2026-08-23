window.I18N_RERENDER_HOOKS = [];

/* ---------- 00a · Año del copyright ---------- */
(function(){
  const el = document.getElementById('copyright-year');
  if(el) el.textContent = new Date().getFullYear();
})();

/* ---------- 00 · Modo claro / oscuro ---------- */
(function(){
  const btn = document.getElementById('theme-toggle');
  if(!btn) return;
  const root = document.documentElement;

  function syncButton(theme){
    const isDark = theme === 'dark';
    btn.setAttribute('aria-pressed', String(isDark));
    const label = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  }

  syncButton(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  btn.addEventListener('click', ()=>{
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch(e) {}
    syncButton(next);
  });

  if(window.matchMedia){
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = (e)=>{
      let stored = null;
      try { stored = localStorage.getItem('theme'); } catch(err) {}
      if(stored === 'light' || stored === 'dark') return;
      const theme = e.matches ? 'dark' : 'light';
      root.setAttribute('data-theme', theme);
      syncButton(theme);
    };
    if(mq.addEventListener) mq.addEventListener('change', onSystemChange);
    else if(mq.addListener) mq.addListener(onSystemChange);
  }
})();

/* ---------- Utilidades compartidas de fecha/hora (ES/EN) ---------- */
const MESES_ES = {enero:0,febrero:1,marzo:2,abril:3,mayo:4,junio:5,julio:6,agosto:7,septiembre:8,octubre:9,noviembre:10,diciembre:11};
const MESES_EN = {january:0,february:1,march:2,april:3,may:4,june:5,july:6,august:7,september:8,october:9,november:10,december:11};
const MESES_ES_ARR = Object.keys(MESES_ES);
const MESES_EN_ARR = Object.keys(MESES_EN).map(m => m[0].toUpperCase() + m.slice(1));
const DIAS_ES = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
const DIAS_EN = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function parseFecha(text){
  if(!text) return null;
  let m = text.match(/(\d{1,2}) de (\p{L}+) de (\d{4})/iu);
  if(m){
    const month = MESES_ES[m[2].toLowerCase()];
    if(month !== undefined) return {day:+m[1], month, year:+m[3]};
  }
  m = text.match(/(\p{L}+) (\d{1,2}),\s*(\d{4})/iu);
  if(m){
    const month = MESES_EN[m[1].toLowerCase()];
    if(month !== undefined) return {day:+m[2], month, year:+m[3]};
  }
  return null;
}

function parseHoraRango(text){
  if(!text) return null;
  const parts = text.split(/[–-]/).map(s=>s.trim());
  if(parts.length < 2) return null;
  function parseUna(s){
    const m = s.match(/(\d{1,2}):(\d{2})\s*(a\.m\.|p\.m\.|am|pm)/i);
    if(!m) return null;
    let h = parseInt(m[1],10);
    const min = parseInt(m[2],10);
    const ampm = m[3].toLowerCase().replace(/\./g,'');
    if(ampm === 'pm' && h !== 12) h += 12;
    if(ampm === 'am' && h === 12) h = 0;
    return {h, min};
  }
  const ini = parseUna(parts[0]);
  const fin = parseUna(parts[1]);
  if(!ini || !fin) return null;
  return [ini, fin];
}

function pad2(n){ return String(n).padStart(2,'0'); }

function fmtHora12(h, min, lang){
  const ampmEs = h >= 12 ? 'p.m.' : 'a.m.';
  const ampmEn = h >= 12 ? 'PM' : 'AM';
  let h12 = h % 12; if(h12 === 0) h12 = 12;
  return `${h12}:${pad2(min)} ${lang === 'en' ? ampmEn : ampmEs}`;
}

function fmtFechaLarga(year, month, day, lang){
  const dow = new Date(year, month, day).getDay();
  if(lang === 'en') return `${DIAS_EN[dow]}, ${MESES_EN_ARR[month]} ${day}`;
  return `${DIAS_ES[dow]}, ${day} de ${MESES_ES_ARR[month]}`;
}

/* ---------- 00c · Exportar charlas a .ics (Google Calendar / Outlook / Apple) ---------- */
(function(){
  const ICS_LABEL = { es: 'Agregar al calendario (.ics)', en: 'Add to calendar (.ics)' };
  const ICS_PREFIX = { es: 'Charla de Alfabetización Digital', en: 'Digital Literacy Session' };

  function fmtICSDateTime(year, month, day, h, min){
    return `${year}${pad2(month+1)}${pad2(day)}T${pad2(h)}${pad2(min)}00`;
  }
  function icsEscape(s){
    return String(s || '').replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\n/g,'\\n');
  }
  function foldLine(line){
    let out = '';
    let i = 0;
    while(line.length - i > 74){
      out += line.slice(i, i+74) + '\r\n ';
      i += 74;
    }
    return out + line.slice(i);
  }
  function slugify(s){
    return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || 'charlas';
  }

  function exportPanelToICS(panel){
    const lang = typeof i18nGetLang === 'function' ? i18nGetLang() : 'es';
    const gradeName = panel.querySelector('.panel-head h3');
    const gradeText = gradeName ? gradeName.textContent.trim() : 'Calendario';
    const now = new Date();
    const dtstamp = fmtICSDateTime(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes());
    const rows = [...panel.querySelectorAll('.grade-table tbody tr')];
    const events = [];

    rows.forEach((row, idx)=>{
      const fechaCell = row.querySelector('.col-fecha');
      const fechaText = fechaCell ? fechaCell.childNodes[0].textContent.trim() : '';
      const horaText = row.querySelector('.col-hora')?.textContent.trim();
      const tituloEl = row.querySelector('.col-tema strong');
      const descEl = row.querySelector('.col-tema .desc');
      const titulo = tituloEl ? tituloEl.textContent.trim() : '';
      const desc = descEl ? descEl.textContent.trim() : '';
      const fecha = parseFecha(fechaText);
      const horas = parseHoraRango(horaText);
      if(!fecha || !horas) return;

      const dtstart = fmtICSDateTime(fecha.year, fecha.month, fecha.day, horas[0].h, horas[0].min);
      const dtend = fmtICSDateTime(fecha.year, fecha.month, fecha.day, horas[1].h, horas[1].min);
      const uid = `${panel.id}-${idx+1}-${fecha.year}${pad2(fecha.month+1)}${pad2(fecha.day)}@calendario-anrl`;
      const summary = `${ICS_PREFIX[lang]} — ${gradeText}: ${titulo}`;

      events.push(
        'BEGIN:VEVENT',
        `UID:${uid}`,
        `DTSTAMP:${dtstamp}`,
        `DTSTART:${dtstart}`,
        `DTEND:${dtend}`,
        foldLine(`SUMMARY:${icsEscape(summary)}`),
        foldLine(`DESCRIPTION:${icsEscape(desc)}`),
        'LOCATION:Escuela Arianys Nicole Rosa Luquis',
        'END:VEVENT'
      );
    });

    if(!events.length) return;

    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//ANRL//Calendario de Charlas de Alfabetizacion Digital//ES',
      'CALSCALE:GREGORIAN',
      ...events,
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([ics], {type:'text/calendar;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `charlas-${slugify(gradeText)}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(()=>URL.revokeObjectURL(url), 1000);
  }

  const buttons = [];
  document.querySelectorAll('.tab-panel').forEach(panel=>{
    const head = panel.querySelector('.panel-head');
    if(!head || !panel.querySelector('.grade-table')) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ics-btn';
    btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3.5" y="5" width="17" height="15" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><span class="ics-btn-label"></span>';
    head.appendChild(btn);
    btn.addEventListener('click', ()=> exportPanelToICS(panel));
    buttons.push(btn);
  });

  function syncLabels(){
    const lang = typeof i18nGetLang === 'function' ? i18nGetLang() : 'es';
    buttons.forEach(b=>{ b.querySelector('.ics-btn-label').textContent = ICS_LABEL[lang]; });
  }
  syncLabels();
  window.I18N_RERENDER_HOOKS.push(syncLabels);
})();

/* ---------- 00d · Hoy / próxima charla + resaltar hoy en el almanaque ---------- */
(function(){
  function getAllSessions(){
    const sessions = [];
    document.querySelectorAll('.tab-panel').forEach(panel=>{
      const gradeEl = panel.querySelector('.panel-head h3');
      const gradeText = gradeEl ? gradeEl.textContent.trim() : '';
      panel.querySelectorAll('.grade-table tbody tr').forEach(row=>{
        const fechaCell = row.querySelector('.col-fecha');
        const fechaText = fechaCell ? fechaCell.childNodes[0].textContent.trim() : '';
        const horaText = row.querySelector('.col-hora')?.textContent.trim();
        const tituloEl = row.querySelector('.col-tema strong');
        const titulo = tituloEl ? tituloEl.textContent.trim() : '';
        const fecha = parseFecha(fechaText);
        const horas = parseHoraRango(horaText);
        if(!fecha || !horas) return;
        sessions.push({
          start: new Date(fecha.year, fecha.month, fecha.day, horas[0].h, horas[0].min),
          grade: gradeText, title: titulo,
        });
      });
    });
    sessions.sort((a,b)=> a.start - b.start);
    return sessions;
  }

  function renderBanner(){
    const el = document.getElementById('today-banner');
    if(!el) return;
    const lang = typeof i18nGetLang === 'function' ? i18nGetLang() : 'es';
    const sessions = getAllSessions();
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    const todaySessions = sessions.filter(s => s.start >= startOfToday && s.start <= endOfToday);
    const upcoming = sessions.filter(s => s.start > now);

    if(todaySessions.length){
      const items = todaySessions
        .map(s => `${s.grade} · ${fmtHora12(s.start.getHours(), s.start.getMinutes(), lang)} — ${s.title}`)
        .join(' &nbsp;·&nbsp; ');
      const label = lang === 'en'
        ? (todaySessions.length === 1 ? 'Today’s session:' : `Today’s sessions (${todaySessions.length}):`)
        : (todaySessions.length === 1 ? 'Charla de hoy:' : `Charlas de hoy (${todaySessions.length}):`);
      el.innerHTML = `<span class="today-banner-dot"></span><strong>${label}</strong> ${items}`;
      el.hidden = false;
      el.classList.add('is-today');
    } else if(upcoming.length){
      const next = upcoming[0];
      const dateStr = fmtFechaLarga(next.start.getFullYear(), next.start.getMonth(), next.start.getDate(), lang);
      const timeStr = fmtHora12(next.start.getHours(), next.start.getMinutes(), lang);
      const label = lang === 'en' ? 'Next session:' : 'Próxima charla:';
      el.innerHTML = `<span class="today-banner-dot"></span><strong>${label}</strong> ${dateStr}, ${next.grade} · ${timeStr} — ${next.title}`;
      el.hidden = false;
      el.classList.remove('is-today');
    } else {
      el.hidden = true;
      el.innerHTML = '';
    }
  }

  renderBanner();
  window.I18N_RERENDER_HOOKS.push(renderBanner);

  const now = new Date();
  const monthId = `mes-${now.getFullYear()}-${pad2(now.getMonth()+1)}`;
  const monthBlock = document.getElementById(monthId);
  if(monthBlock){
    const dayNum = String(now.getDate());
    monthBlock.querySelectorAll('td.cal-day:not(.out-month)').forEach(td=>{
      const daynum = td.querySelector('.daynum');
      if(daynum && daynum.textContent.trim() === dayNum){
        td.classList.add('is-today');
        td.setAttribute('aria-label', typeof i18nGetLang === 'function' && i18nGetLang() === 'en' ? 'Today' : 'Hoy');
      }
    });
  }
})();

/* ---------- 00b · Idioma ES / EN ---------- */
(function(){
  const btn = document.getElementById('lang-toggle');
  if(!btn || typeof i18nSetLang !== 'function') return;
  btn.addEventListener('click', ()=>{
    i18nSetLang(i18nGetLang() === 'en' ? 'es' : 'en');
    window.I18N_RERENDER_HOOKS.forEach(fn=>fn());
  });
})();

document.querySelectorAll('.tabs-group').forEach(group=>{
  const groupName = group.dataset.group;
  const panelsContainer = document.querySelector(`[data-panels="${groupName}"]`);
  const buttons = group.querySelectorAll('.grade-tab');
  const panels = panelsContainer.querySelectorAll('.tab-panel');
  buttons.forEach((btn, i)=>{
    btn.addEventListener('click', ()=>{
      buttons.forEach(b=>b.classList.remove('active'));
      panels.forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
      history.replaceState(null, '', '#' + btn.dataset.tab);
    });
  });
  if(buttons.length){ buttons[0].classList.add('active'); }
  if(panels.length){ panels[0].classList.add('active'); }
});

function activarTab(tabId, grupo){
  const group = document.querySelector(`.tabs-group[data-group="${grupo}"]`);
  const panelsContainer = document.querySelector(`[data-panels="${grupo}"]`);
  if(!group || !panelsContainer) return;
  group.querySelectorAll('.grade-tab').forEach(b=>b.classList.toggle('active', b.dataset.tab===tabId));
  panelsContainer.querySelectorAll('.tab-panel').forEach(p=>p.classList.toggle('active', p.id===tabId));
  const target = document.getElementById(tabId);
  if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); }
  history.replaceState(null, '', '#' + tabId);
}

/* ---------- 02 · Abrir el grado/grupo correcto si la URL trae #tab-XX ---------- */
(function(){
  function activarDesdeHash(smooth){
    const id = location.hash.slice(1);
    if(!id) return;
    const btn = document.querySelector(`.grade-tab[data-tab="${id}"]`);
    if(!btn) return;
    const grupo = btn.closest('.tabs-group')?.dataset.group;
    if(!grupo) return;
    activarTab(id, grupo);
    if(!smooth){
      const target = document.getElementById(id);
      if(target){ target.scrollIntoView({behavior:'auto', block:'start'}); }
    }
  }
  activarDesdeHash(false);
  window.addEventListener('hashchange', ()=> activarDesdeHash(true));
})();

/* ---------- 03 · Filtro Maestros que se cruzan + Spotlight ---------- */
(function(){
  const selGrado = document.getElementById('mf-grado');
  const selMaestro = document.getElementById('mf-maestro');
  const btnClear = document.getElementById('mf-clear');
  const tbody = document.querySelector('#tabla-maestros tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const countEl = document.getElementById('mf-count');
  const teacherIndex = TEACHER_INDEX;
  const spotlight = document.getElementById('spotlight');
  const spotName = document.getElementById('spot-name');
  const spotSub = document.getElementById('spot-sub');
  const spotCards = document.getElementById('spot-cards');
  const spotClose = document.getElementById('spot-close');

  function applyFilter(){
    const g = selGrado.value;
    const m = selMaestro.value;
    let visible = 0;
    rows.forEach(r=>{
      const rg = r.dataset.grado || '';
      const rm = r.dataset.maestro || '';
      const okG = !g || rg === g;
      const okM = !m || rm === m;
      const show = okG && okM;
      r.classList.toggle('row-hidden', !show);
      if(show) visible++;
    });
    const lang = typeof i18nGetLang === 'function' ? i18nGetLang() : 'es';
    if(!g && !m){
      countEl.textContent = lang === 'en' ? `${rows.length} rows in total.` : `${rows.length} filas en total.`;
    } else {
      countEl.textContent = lang === 'en' ? `Showing ${visible} of ${rows.length} rows.` : `Mostrando ${visible} de ${rows.length} filas.`;
    }
    renderSpotlight(m);
  }

  function renderSpotlight(maestro){
    if(!maestro){ spotlight.classList.remove('active'); spotCards.innerHTML=''; return; }
    const lang = typeof i18nGetLang === 'function' ? i18nGetLang() : 'es';
    const crossings = teacherIndex[maestro] || [];
    spotName.textContent = maestro;
    if(crossings.length === 0){
      spotSub.textContent = lang === 'en'
        ? 'This teacher appears in the table as a reference for another block, but none of them match the session’s actual schedule — their period is not affected.'
        : 'Este maestro/a aparece en la tabla como referencia de otro bloque, pero ninguno coincide con el horario real de la charla — su período no se ve afectado.';
      spotCards.innerHTML = '';
      spotlight.classList.add('active');
      return;
    }
    const totalFechas = crossings.reduce((s,c)=>s+c.num_fechas,0);
    spotSub.textContent = lang === 'en'
      ? `This session affects them in ${crossings.length} grade(s)/group(s), a total of ${totalFechas} date(s) during the school year.`
      : `Esta charla lo(a) afecta en ${crossings.length} grado(s)/grupo(s), un total de ${totalFechas} fecha(s) durante el año escolar.`;
    const t = s => lang === 'en' && typeof i18nTranslateText === 'function' ? i18nTranslateText(s) : s;
    spotCards.innerHTML = crossings.map((c,i)=>{
      const fechaChips = c.fechas.map(f=>`<span class="fecha-chip">${t(f)}</span>`).join('');
      const verFechas = lang === 'en' ? `See ${c.num_fechas} date(s)` : `Ver ${c.num_fechas} fecha(s)`;
      const verGrupo = lang === 'en' ? 'See this group’s sessions →' : 'Ver charlas de este grupo →';
      return `<div class="spot-card">
        <div class="sc-title">${t(c.label)}</div>
        <div class="sc-when">${t(c.weekday)} · ${t(c.hora)}</div>
        <div class="sc-materia">${t(c.materia)}<span class="rol">${t(c.rol)}</span></div>
        <details><summary>${verFechas}</summary><div class="fecha-list">${fechaChips}</div></details>
        <button type="button" class="sc-jump" data-tab="${c.tabId}" data-group="${c.tipo==='grado'?'grados':'ee'}">${verGrupo}</button>
      </div>`;
    }).join('');
    spotCards.querySelectorAll('.sc-jump').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        document.getElementById('grados').scrollIntoView({behavior:'smooth', block:'start'});
        setTimeout(()=>activarTab(btn.dataset.tab, btn.dataset.group), 300);
      });
    });
    spotlight.classList.add('active');
  }

  selGrado.addEventListener('change', applyFilter);
  selMaestro.addEventListener('change', applyFilter);
  btnClear.addEventListener('click', ()=>{ selGrado.value=''; selMaestro.value=''; applyFilter(); });
  spotClose.addEventListener('click', ()=>{ selMaestro.value=''; applyFilter(); });
  applyFilter();
  window.I18N_RERENDER_HOOKS.push(applyFilter);
})();

/* ---------- 04 · Buscador por salón, grado o maestro/a ---------- */
(function(){
  const data = SEARCH_INDEX;
  const input = document.getElementById('buscador');
  const btn = document.getElementById('buscador-btn');
  const resultDiv = document.getElementById('buscador-resultado');

  function normalize(s){
    return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  }

  function buscar(){
    const lang = typeof i18nGetLang === 'function' ? i18nGetLang() : 'es';
    const q = normalize(input.value.trim());
    if(!q){ resultDiv.innerHTML=''; return; }
    const hits = [];
    const seen = new Set();
    data.forEach(entry=>{
      const found = entry.labels.some(l => normalize(String(l)).includes(q));
      if(found && !seen.has(entry.tabId)){
        seen.add(entry.tabId);
        hits.push(entry);
      }
    });
    if(hits.length === 0){
      resultDiv.innerHTML = lang === 'en'
        ? '<span class="no-hit">I couldn’t find a matching classroom, grade, or teacher. Check the "Teachers affected" section if you were searching by teacher name.</span>'
        : '<span class="no-hit">No encontré ningún salón, grado o maestro/a que coincida. Revisa la sección "Maestros que se cruzan" si buscabas por nombre de maestro.</span>';
      return;
    }
    const t = s => lang === 'en' && typeof i18nTranslateText === 'function' ? i18nTranslateText(s) : s;
    const list = hits.map(h => `<button type="button" class="hit-btn" data-tab="${h.tabId}" data-group="${h.group}">${t(h.title)}</button>`).join('');
    const countLabel = lang === 'en' ? `${hits.length} result(s):` : `${hits.length} resultado(s):`;
    resultDiv.innerHTML = `<span>${countLabel}</span><div class="hit-list">${list}</div>`;
    resultDiv.querySelectorAll('.hit-btn').forEach(b=>{
      b.addEventListener('click', ()=>{
        document.getElementById('grados').scrollIntoView({behavior:'smooth', block:'start'});
        setTimeout(()=>activarTab(b.dataset.tab, b.dataset.group), 300);
      });
    });
  }
  btn.addEventListener('click', buscar);
  input.addEventListener('keydown', e=>{ if(e.key==='Enter'){ buscar(); } });
  window.I18N_RERENDER_HOOKS.push(buscar);
})();

/* ---------- 05 · Abrir detalles del almanaque al imprimir ---------- */
(function(){
  let closedBeforePrint = [];
  window.addEventListener('beforeprint', ()=>{
    closedBeforePrint = [...document.querySelectorAll('.month-detail:not([open])')];
    closedBeforePrint.forEach(d=> d.open = true);
  });
  window.addEventListener('afterprint', ()=>{
    closedBeforePrint.forEach(d=> d.open = false);
    closedBeforePrint = [];
  });
})();
