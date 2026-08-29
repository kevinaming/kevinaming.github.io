/* ================================================================
   Traducción ES/EN — diccionario de interfaz + traductor de patrones
   para contenido repetitivo (fechas, días, meses, grados, materias,
   títulos de charla). No traduce las descripciones largas de cada
   charla ni los tooltips del almanaque — quedan en español a propósito.
   ================================================================ */

/* ---------- 1. Diccionario de interfaz (data-i18n="key") ---------- */
const I18N_UI = {
  es: {
    'nav.brand': 'Alfabetización Digital · ANRL',
    'nav.portada': 'Portada',
    'nav.metodologia': 'Metodología',
    'nav.horario': 'Horario',
    'nav.grados': 'Buscar charla',
    'nav.almanaque': 'Almanaque',

    'hero.eyebrow': 'Año escolar 2026–2027',
    'hero.h1': 'Calendario de Charlas de<br>Alfabetización Digital',
    'hero.subtitle': 'Simple. Organizado. Para todos.',
    'hero.escuela': 'Escuela',
    'hero.directora': 'Directora',
    'hero.recurso': 'Maestro Recurso — Uso de la Computadora',
    'hero.vigencia': 'Vigencia',

    'metodologia.kicker': 'Metodología',
    'metodologia.h2': 'Cómo se organizó este calendario',
    'metodologia.p1': 'Cada salón se atiende individualmente, respetando siempre el máximo de 24 estudiantes por charla —el salón más numeroso tiene 22—.',
    'metodologia.p2': 'El Maestro Recurso dedica una semana completa a cada bloque —Intermedia (6to-8vo) y 5to, Elemental (PK-4to), y Educación Especial— en ese orden, repitiendo el ciclo cada tres semanas.',
    'metodologia.p3': 'El contenido sigue el temario oficial: Introducción a la Alfabetización Digital para PK–2do, y Fundamentos de la Alfabetización Digital para 3ro–8vo, adaptado al nivel de cada salón. El calendario respeta además los días festivos y recesos oficiales del Departamento de Educación.',
    'metodologia.li1': 'Máximo 24 estudiantes por charla — cada salón se atiende individualmente.',
    'metodologia.li2': 'Un bloque completo por semana: Intermedia+5to, Elemental PK-4to, o Educación Especial.',
    'metodologia.li3': 'El ciclo de 3 semanas se repite durante todo el año escolar.',
    'metodologia.li4': 'Los períodos libres de cada semana quedan como preparación de recursos.',
    'metodologia.li5': 'Contenido alineado al temario oficial de cada nivel, en el orden de sus unidades.',

    'horario.kicker': 'Rotación semanal',
    'horario.h2': 'Horario semanal de charlas',
    'horario.p': 'Cada semana del ciclo dedica los tres períodos diarios a un solo bloque de salones; los períodos sin salón asignado esa semana quedan como preparación de recursos.',
    'horario.th.hora': 'Hora',
    'horario.tab-a': 'Semana A',
    'horario.tab-b': 'Semana B',
    'horario.tab-c': 'Semana C',
    'horario.semana-a': 'Semana A — Intermedia (6to-8vo) y 5to',
    'horario.semana-a-tag': 'Cada 3 semanas',
    'horario.semana-b': 'Semana B — Elemental (PK-4to)',
    'horario.semana-b-tag': 'Cada 3 semanas',
    'horario.semana-c': 'Semana C — Educación Especial y Rutas de Autismo',
    'horario.semana-c-tag': 'Cada 3 semanas',

    'grados.kicker': 'Calendario detallado',
    'grados.h2': '¡Busca tu charla!',
    'grados.p': 'Selecciona un salón para ver la fecha, hora y tema de cada charla programada durante el año escolar.',
    'grados.filtro-grupo': 'Nivel',
    'grados.filtro-maestro': 'Maestro/a',
    'grados.filtro-salon': 'Grado/Salón',
    'grados.limpiar-filtros': 'Limpiar filtros',
    'grados.placeholder': 'Selecciona un salón, maestro/a o grupo para ver su horario.',
    'grados.todos-grupos': 'Todos los niveles',
    'grados.todos-maestros': 'Todos los maestros/as',
    'grados.todos-salones': 'Todos los salones',
    'grados.grupo-elemental': 'Elemental',
    'grados.grupo-intermedia': 'Intermedia',
    'grados.grupo-ee': 'Educación Especial',
    'grados.th.num': '#',
    'grados.th.fecha': 'Fecha',
    'grados.th.hora': 'Hora',
    'grados.th.unidad': 'Unidad',
    'grados.th.tema': 'Tema de la charla',
    'grados.rotation-note': 'El Maestro Recurso dedica una semana completa a cada bloque —Intermedia y 5to, Elemental PK-4to, y Educación Especial— en ese orden, repitiendo el ciclo cada 3 semanas. Cada salón se atiende individualmente, siempre el mismo día y período dentro de su semana.',

    'almanaque.kicker': 'Vista de almanaque',
    'almanaque.h2': 'Almanaque del año escolar',
    'almanaque.p': 'Cada ficha muestra el salón y el número de charla —por ejemplo, <span class="mono">3-1·07</span> = salón 3-1, charla #7. Despliega el detalle debajo de cada mes para ver el tema completo de cada sesión.',

    'footer.p1': 'Calendario preparado por Kevin García, Maestro Recurso en el Uso de la Computadora, para la Escuela Arianys Nicole Rosa Luquis.',
    'footer.sig': 'Educación Bilingüe · Dos idiomas, infinitas posibilidades',
    'footer.copyright': 'Escuela Arianys Nicole Rosa Luquis. Todos los derechos reservados.',

    'lang.toggle.label': 'Switch to English',
  },
  en: {
    'nav.brand': 'Digital Literacy · ANRL',
    'nav.portada': 'Home',
    'nav.metodologia': 'Methodology',
    'nav.horario': 'Schedule',
    'nav.grados': 'Find a session',
    'nav.almanaque': 'Calendar',

    'hero.eyebrow': 'School year 2026–2027',
    'hero.h1': 'Digital Literacy<br>Session Calendar',
    'hero.subtitle': 'Simple. Organized. For everyone.',
    'hero.escuela': 'School',
    'hero.directora': 'Principal',
    'hero.recurso': 'Resource Teacher — Computer Use',
    'hero.vigencia': 'Runs',

    'metodologia.kicker': 'Methodology',
    'metodologia.h2': 'How this calendar was built',
    'metodologia.p1': 'Each classroom is served individually, always respecting the maximum of 24 students per session —the largest classroom has 22—.',
    'metodologia.p2': 'The Resource Teacher dedicates a full week to each block —Intermediate (6th-8th) and 5th, Elementary (PK-4th), and Special Education— in that order, repeating the cycle every three weeks.',
    'metodologia.p3': 'Content follows the official curriculum: Introduction to Digital Literacy for PK–2nd grade, and Digital Literacy Fundamentals for 3rd–8th grade, adapted to each classroom’s level. The calendar also respects official holidays and breaks from the Department of Education.',
    'metodologia.li1': 'Maximum 24 students per session — each classroom is served individually.',
    'metodologia.li2': 'One full block per week: Intermediate+5th, Elementary PK-4th, or Special Education.',
    'metodologia.li3': 'The 3-week cycle repeats throughout the whole school year.',
    'metodologia.li4': 'Free periods each week are used for resource preparation.',
    'metodologia.li5': 'Content aligned to the official curriculum for each level, in unit order.',

    'horario.kicker': 'Weekly rotation',
    'horario.h2': 'Weekly session schedule',
    'horario.p': 'Each week of the cycle dedicates all three daily periods to a single block of classrooms; periods with no classroom assigned that week are used for resource preparation.',
    'horario.th.hora': 'Time',
    'horario.tab-a': 'Week A',
    'horario.tab-b': 'Week B',
    'horario.tab-c': 'Week C',
    'horario.semana-a': 'Week A — Intermediate (6th-8th) and 5th',
    'horario.semana-a-tag': 'Every 3 weeks',
    'horario.semana-b': 'Week B — Elementary (PK-4th)',
    'horario.semana-b-tag': 'Every 3 weeks',
    'horario.semana-c': 'Week C — Special Education and Autism Routes',
    'horario.semana-c-tag': 'Every 3 weeks',

    'grados.kicker': 'Detailed calendar',
    'grados.h2': 'Find your session!',
    'grados.p': 'Pick a classroom to see the date, time, and topic of every session scheduled during the school year.',
    'grados.filtro-grupo': 'Level',
    'grados.filtro-maestro': 'Teacher',
    'grados.filtro-salon': 'Grade/Classroom',
    'grados.limpiar-filtros': 'Clear filters',
    'grados.placeholder': 'Pick a classroom, teacher, or group to see its schedule.',
    'grados.todos-grupos': 'All levels',
    'grados.todos-maestros': 'All teachers',
    'grados.todos-salones': 'All classrooms',
    'grados.grupo-elemental': 'Elementary',
    'grados.grupo-intermedia': 'Intermediate',
    'grados.grupo-ee': 'Special Education',
    'grados.th.num': '#',
    'grados.th.fecha': 'Date',
    'grados.th.hora': 'Time',
    'grados.th.unidad': 'Unit',
    'grados.th.tema': 'Session topic',
    'grados.rotation-note': 'The Resource Teacher dedicates a full week to each block —Intermediate and 5th, Elementary PK-4th, and Special Education— in that order, repeating the cycle every 3 weeks. Each classroom is served individually, always on the same day and period within its week.',

    'almanaque.kicker': 'Calendar view',
    'almanaque.h2': 'School year calendar',
    'almanaque.p': 'Each tile shows the classroom and the session number —for example, <span class="mono">3-1·07</span> = classroom 3-1, session #7. Expand the detail below each month to see the full topic of each session.',

    'footer.p1': 'Calendar prepared by Kevin García, Resource Teacher for Computer Use, for Arianys Nicole Rosa Luquis School.',
    'footer.sig': 'Bilingual Education · Two languages, endless possibilities',
    'footer.copyright': 'Arianys Nicole Rosa Luquis School. All rights reserved.',

    'lang.toggle.label': 'Cambiar a español',
  },
};

/* ---------- 2. Diccionarios para el traductor de patrones ---------- */
const I18N_MONTHS_FULL = {
  enero: 'January', febrero: 'February', marzo: 'March', abril: 'April',
  mayo: 'May', junio: 'June', julio: 'July', agosto: 'August',
  septiembre: 'September', octubre: 'October', noviembre: 'November', diciembre: 'December',
};
const I18N_MONTHS_ABBR = {
  ago: 'Aug', sep: 'Sep', oct: 'Oct', nov: 'Nov', dic: 'Dec',
  ene: 'Jan', feb: 'Feb', mar: 'Mar', abr: 'Apr', may: 'May',
};
const I18N_WEEKDAYS = {
  Lunes: 'Monday', Martes: 'Tuesday', Miércoles: 'Wednesday',
  Jueves: 'Thursday', Viernes: 'Friday', Sábado: 'Saturday', Domingo: 'Sunday',
};
const I18N_DAY_LETTERS_ES = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
const I18N_DAY_LETTERS_EN = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// Español -> inglés, de más largo a más corto para evitar coincidencias parciales.
const I18N_GROUP_NAMES = [
  ['EE Ruta 2 y 3 (1ro, 2do y 3ro — Autismo)', 'SPED Route 2 & 3 (1st, 2nd & 3rd — Autism)'],
  ['EE Ruta 2 y 3 (3ro, 4to y 5to)', 'SPED Route 2 & 3 (3rd, 4th & 5th)'],
  ['EE Ruta 1 (1ro Reducido)', 'SPED Route 1 (1st, Reduced)'],
  ['EE Ruta 1 (Uno a Uno)', 'SPED Route 1 (One-on-One)'],
  ['EE Ruta 1 (3ro y 4to)', 'SPED Route 1 (3rd & 4th)'],
  ['EE Ruta 1 (5to y 6to)', 'SPED Route 1 (5th & 6th)'],
  ['EE Ruta 1 (7mo y 8vo)', 'SPED Route 1 (7th & 8th)'],
  ['EE Ruta 1 (1ro y 2do)', 'SPED Route 1 (1st & 2nd)'],
  ['PK EE No Categorizado', 'PK SPED Uncategorized'],
  ['EE Ruta 1 (Kínder)', 'SPED Route 1 (Kindergarten)'],
  ['PK EE Autismo', 'PK SPED Autism'],
  ['Pre-Kínder', 'Pre-K'],
  ['1er Grado', '1st Grade'],
  ['2do Grado', '2nd Grade'],
  ['3er Grado', '3rd Grade'],
  ['4to Grado', '4th Grade'],
  ['5to Grado', '5th Grade'],
  ['6to Grado', '6th Grade'],
  ['7mo Grado', '7th Grade'],
  ['8vo Grado', '8th Grade'],
];

const I18N_LESSON_TITLES = [
  ['Historia, evolución y cuidados de la computadora', 'History, evolution, and care of the computer'],
  ['Tipos de computadoras', 'Types of computers'],
  ['Partes de la computadora de escritorio', 'Parts of the desktop computer'],
  ['Hardware y software', 'Hardware and software'],
  ['Dispositivos de almacenamiento', 'Storage devices'],
  ['Sistemas operativos y navegadores', 'Operating systems and browsers'],
  ['Paint y WordPad', 'Paint and WordPad'],
  ['Word, PowerPoint, Excel, Office 365, Outlook y Google', 'Word, PowerPoint, Excel, Office 365, Outlook, and Google'],
  ['Programación con Scratch', 'Programming with Scratch'],
  ['Programación con Minecraft', 'Programming with Minecraft'],
  ['Seguridad en la red', 'Online safety'],
  ['Aspectos éticos', 'Ethical considerations'],
  ['Huella digital', 'Digital footprint'],
  ['Repaso y refuerzo de destrezas', 'Review and skills reinforcement'],
  ['Sistemas operativos e internet', 'Operating systems and the internet'],
  ['Búsquedas confiables y bases de datos', 'Reliable searches and databases'],
  ['Teclas de función y de control', 'Function and control keys'],
  ['Teclado alfanumérico y teclas especiales', 'Alphanumeric keyboard and special keys'],
  ['Word: funciones y creación de documentos', 'Word: functions and document creation'],
  ['Word: formato, guardar e imprimir', 'Word: formatting, saving, and printing'],
  ['PowerPoint: diapositivas y objetos', 'PowerPoint: slides and objects'],
  ['PowerPoint: diseño, animación y publicación', 'PowerPoint: design, animation, and publishing'],
  ['Excel: funciones y documentos', 'Excel: functions and documents'],
  ['Excel: fórmulas, tablas y gráficas', 'Excel: formulas, tables, and charts'],
  ['Outlook y contraseñas seguras', 'Outlook and secure passwords'],
  ['Publisher, Canva y Google', 'Publisher, Canva, and Google'],
  ['Office 365', 'Office 365'],
];

// Solo los códigos de materia inequívocos; los ambiguos (C-TEX, "CP ...",
// el maestro sin identificar) se dejan en español a propósito.
const I18N_SUBJECTS = [
  ['Titular (grupo autocontenido)', 'Homeroom teacher (self-contained group)'],
  ['Tareas Administrativas', 'Administrative duties'],
  ['Integr. Curr.', 'Curriculum Integration'],
  ['Vida Ind.', 'Independent Living'],
  ['INGLÉS', 'English'],
  ['TEATRO', 'Theater'],
  ['ESSO', 'Social Studies'],
  ['ESPA', 'Spanish'],
  ['CIEN', 'Science'],
  ['EDFI', 'PE'],
  ['MATE', 'Math'],
  ['Salud', 'Health'],
  ['BA', 'Fine Arts'],
];

const I18N_ROLES = [
  ['Maestro/a especialista', 'Specialist teacher'],
  ['Maestro/a titular', 'Homeroom teacher'],
];

// Frases fijas (plantillas de panel-meta, almanaque, tabla semanal).
// Se aplican de más larga a más corta.
const I18N_PHRASES = [
  ['temas del currículo + repaso continuo', 'curriculum topics + ongoing review'],
  ['charlas durante el año', 'sessions during the school year'],
  ['Se reúne el', 'Meets on'],
  ['· maestro/a:', '· teacher:'],
  ['· salón ', '· room '],
  ['Todo el día', 'All day'],
  ['Período 1', 'Period 1'],
  ['Período 2', 'Period 2'],
  ['Período 3', 'Period 3'],
  ['charla #', 'session #'],
  ['estudiantes', 'students'],
  ['Introducción a la Alfabetización Digital (TEED 111-0001)', 'Introduction to Digital Literacy (TEED 111-0001)'],
  ['Introducción a la Alfabetización Digital (adaptado)', 'Introduction to Digital Literacy (adapted)'],
  ['Fundamentos de la Alfabetización Digital (TEED 151-1025)', 'Digital Literacy Fundamentals (TEED 151-1025)'],
  ['Fundamentos de la Alfabetización Digital (adaptado)', 'Digital Literacy Fundamentals (adapted)'],
  ['Unidad', 'Unit'],
  ['Ver detalle de charlas de', 'See session details for'],
  ['Preparación — 1er y 2do Grado', 'Preparation — 1st and 2nd Grade'],
  ['Preparación — Kindergarten (K-1 y K-2)', 'Preparation — Kindergarten (K-1 and K-2)'],
  ['Preparación — 3er y 4to Grado', 'Preparation — 3rd and 4th Grade'],
  ['Preparación — Pre-Kínder (PK)', 'Preparation — Pre-K (PK)'],
  ['Preparación (EE) — R1-12, R1-34, R1-56 y R1-78', 'Preparation (SpEd) — R1-12, R1-34, R1-56, and R1-78'],
  ['Preparación (EE) — R1-K, R1-1R, R23-123 y R23-345', 'Preparation (SpEd) — R1-K, R1-1R, R23-123, and R23-345'],
  ['Preparación (EE) — R1-1x1, PK-A y PK-NC', 'Preparation (SpEd) — R1-1x1, PK-A, and PK-NC'],
  ['Preparación — 8vo Grado', 'Preparation — 8th Grade'],
  ['Preparación — 7mo Grado', 'Preparation — 7th Grade'],
  ['Preparación — 6to Grado', 'Preparation — 6th Grade'],
  ['Preparación — 5to Grado', 'Preparation — 5th Grade'],
];

/* ---------- 3. Motor de traducción de patrones ---------- */
function i18nTranslateText(str) {
  if (!str) return str;
  let out = str;

  out = out.replace(/(\d{1,2}) de (\p{L}+) de (\d{4})/giu, (m, d, mo, y) => {
    const en = I18N_MONTHS_FULL[mo.toLowerCase()];
    return en ? `${en} ${d}, ${y}` : m;
  });
  out = out.replace(/(\d{1,2}) de (\p{L}+)\b/giu, (m, d, mo) => {
    const en = I18N_MONTHS_FULL[mo.toLowerCase()];
    return en ? `${en} ${d}` : m;
  });
  out = out.replace(/\b(ago|sep|oct|nov|dic|ene|feb|mar|abr|may)\b\.?/gi, (m, mo) => {
    const en = I18N_MONTHS_ABBR[mo.toLowerCase()];
    return en || m;
  });
  out = out.replace(/\b(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\b/gi, (m) => {
    return I18N_MONTHS_FULL[m.toLowerCase()] || m;
  });

  for (const [es, en] of Object.entries(I18N_WEEKDAYS)) out = out.split(es).join(en);

  out = out.replace(/a\.m\./gi, 'AM').replace(/p\.m\./gi, 'PM');

  for (const [es, en] of I18N_PHRASES) out = out.split(es).join(en);
  for (const [es, en] of I18N_GROUP_NAMES) out = out.split(es).join(en);
  for (const [es, en] of I18N_LESSON_TITLES) out = out.split(es).join(en);
  for (const [es, en] of I18N_SUBJECTS) out = out.split(es).join(en);
  for (const [es, en] of I18N_ROLES) out = out.split(es).join(en);

  return out;
}

// Recorre los nodos de texto de root y los traduce in-place, guardando el
// original en un WeakMap para poder revertir sin pérdida ni deriva.
const I18N_ORIGINALS = new WeakMap();

function i18nTranslateContainer(root, lang) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const tag = node.parentElement && node.parentElement.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE') return NodeFilter.FILTER_REJECT;
      if (node.parentElement && node.parentElement.closest('.pending')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  let n;
  while ((n = walker.nextNode())) nodes.push(n);

  nodes.forEach((node) => {
    if (!I18N_ORIGINALS.has(node)) I18N_ORIGINALS.set(node, node.nodeValue);
    const original = I18N_ORIGINALS.get(node);
    node.nodeValue = lang === 'en' ? i18nTranslateText(original) : original;
  });
}

function i18nTranslateCalTableHeaders(lang) {
  document.querySelectorAll('.cal-table thead th').forEach((th, i) => {
    const idx = i % 7;
    th.textContent = lang === 'en' ? I18N_DAY_LETTERS_EN[idx] : I18N_DAY_LETTERS_ES[idx];
  });
}

/* ---------- 4. Aplicar idioma a toda la página ---------- */
const I18N_SCOPED_SELECTORS = [
  '.weekly-table', '.panel-head', '.grade-table', '.month-detail',
  '.month-title', '.month-nav-link', '.hero-meta .value',
  '.tabs-nav', '.legend',
];

function i18nApply(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const text = I18N_UI[lang][key];
    if (text !== undefined) el.innerHTML = text;
  });

  I18N_SCOPED_SELECTORS.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => i18nTranslateContainer(el, lang));
  });
  i18nTranslateCalTableHeaders(lang);

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
    langBtn.setAttribute('aria-label', I18N_UI[lang]['lang.toggle.label']);
    langBtn.setAttribute('title', I18N_UI[lang]['lang.toggle.label']);
    langBtn.setAttribute('aria-pressed', String(lang === 'en'));
  }
}

let I18N_CURRENT_LANG = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'es';

function i18nSetLang(lang) {
  I18N_CURRENT_LANG = lang;
  i18nApply(lang);
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

function i18nGetLang() {
  return I18N_CURRENT_LANG;
}

i18nApply(I18N_CURRENT_LANG);
