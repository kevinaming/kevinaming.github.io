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

/* ---------- 00b · Idioma ES / EN ---------- */
window.I18N_RERENDER_HOOKS = [];
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
}

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
