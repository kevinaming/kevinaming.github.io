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
    'nav.grados': 'Charlas por grado',
    'nav.almanaque': 'Almanaque',

    'hero.eyebrow': 'Año escolar 2026–2027',
    'hero.h1': 'Calendario de Charlas de<br>Alfabetización Digital',
    'hero.subtitle': 'Plan de charlas semanales de PK a 8vo grado, organizado a partir de la organización escolar y el calendario oficial del Departamento de Educación.',
    'hero.escuela': 'Escuela',
    'hero.directora': 'Directora',
    'hero.recurso': 'Maestro Recurso — Uso de la Computadora',
    'hero.vigencia': 'Vigencia',

    'metodologia.kicker': 'Metodología',
    'metodologia.h2': 'Cómo se organizó este calendario',
    'metodologia.p1': 'Para construir este calendario se partió del horario de trabajo semanal del Maestro Recurso en el Uso de la Computadora, de la Organización Escolar 2026–2027 y de la capacidad máxima del salón de Computadoras —24 estudiantes—, cruzándolos con el Calendario Escolar 2026–2027 del Departamento de Educación para identificar únicamente los días con clases para los estudiantes.',
    'metodologia.p2': 'Se utilizaron los tres períodos diarios de Integrado PK-8vo disponibles para estas charlas —dos para los grados elementales (PK a 5to) y uno al mediodía para los grados intermedios (6to a 8vo)—; los períodos de 7-3 no se incluyeron porque esos grupos ya se atienden a diario en sus períodos regulares.',
    'metodologia.p3': 'Como ningún salón puede recibir más de 24 estudiantes en una sola charla, las secciones pequeñas de Educación Especial, Rutas de Autismo y 7mo grado se combinaron entre sí —respetando siempre ese máximo— hasta formar <strong>26 grupos de charla (G1 a G26)</strong>, cada uno con su propio día, período y frecuencia fijos durante todo el año escolar.',
    'metodologia.p4': 'Como solo hay tres períodos al día para atender 26 grupos, cada grupo recibe su charla en semanas alternas —una "semana A" y una "semana B" que se turnan—, de modo que cada grupo recibe una charla aproximadamente cada dos semanas, siempre el mismo día y a la misma hora.',
    'metodologia.p5': 'El contenido de cada charla sigue el orden de las unidades del temario correspondiente —Introducción a la Alfabetización Digital para los grupos de PK a 2do, y Fundamentos de la Alfabetización Digital para los grupos de 3ro a 8vo— adaptando la profundidad y el vocabulario al nivel de cada grupo, incluyendo los grupos combinados de Educación Especial y Rutas de Autismo. Cuando un grupo termina su temario antes de finalizar el año, las semanas restantes se dedican a repaso y refuerzo de destrezas.',
    'metodologia.p6': 'Se excluyeron del calendario todos los días festivos, los recesos académicos, el lunes 24 de agosto de 2026 —día en que no fue posible comenzar con el grupo correspondiente—, la semana completa de Acción de Gracias (23 al 27 de noviembre de 2026) y la semana completa de Semana Santa (22 al 26 de marzo de 2027), conforme al Calendario Escolar oficial.',
    'metodologia.li1': 'Máximo 24 estudiantes por charla — las secciones pequeñas se combinaron para respetarlo.',
    'metodologia.li2': 'Solo tres períodos diarios de Integrado PK-8vo — dos para elemental, uno para intermedia.',
    'metodologia.li3': '26 grupos de charla (G1–G26), cada uno con día, período y frecuencia fijos.',
    'metodologia.li4': 'Rotación quincenal: cada grupo recibe su charla cada dos semanas (semana A / semana B).',
    'metodologia.li5': 'Contenido alineado al temario oficial de cada nivel, en el orden de sus unidades.',
    'metodologia.li6': 'Primera charla real: martes, 25 de agosto de 2026.',

    'horario.kicker': 'Rotación semanal',
    'horario.h2': 'Horario semanal de charlas',
    'horario.p': 'Cada período fijo de Integrado PK-8vo rota quincenalmente entre uno o dos grupos (semana A / semana B), salvo los períodos marcados como "solo semana A" o "solo semana B", que atienden a un único grupo cada dos semanas.',
    'horario.th.hora': 'Hora',

    'grados.kicker': 'Calendario detallado',
    'grados.h2': 'Charlas por grado y por grupo',
    'grados.p': 'Selecciona un grupo para ver la fecha, hora y tema de cada charla programada durante el año escolar.',
    'grados.buscador-label': 'Buscador — por salón, grado o maestro/a',
    'grados.buscador-placeholder': 'Ej. 8-1 · 8vo · nombre del maestro...',
    'grados.buscador-btn': 'Buscar',
    'grados.sub-elemental': 'Elemental',
    'grados.sub-elemental-tag': 'PK – 5to',
    'grados.sub-intermedia': 'Intermedia',
    'grados.sub-intermedia-tag': '6to – 8vo',
    'grados.th.num': '#',
    'grados.th.fecha': 'Fecha',
    'grados.th.hora': 'Hora',
    'grados.th.unidad': 'Unidad',
    'grados.th.tema': 'Tema de la charla',
    'grados.rotation-note': 'Cada grupo se reúne quincenalmente, alternando entre "semana A" y "semana B" — revisa la fecha exacta de la próxima charla en la tabla de cada grupo.',
    'grados.combo-title': 'Grupos combinados',
    'grados.combo-intro': '— estos 6 salones pequeños de Educación Especial, Rutas de Autismo y 7mo grado se combinaron entre sí para respetar el máximo de 24 estudiantes por charla. El resto de los salones conserva su propio código (por ejemplo, 8-1).',

    'almanaque.kicker': 'Vista de almanaque',
    'almanaque.h2': 'Almanaque del año escolar',
    'almanaque.p': 'Cada ficha muestra el salón (o el código del grupo, si es combinado) y el número de charla — por ejemplo, <span class="mono">8-1·07</span> = salón 8-1, charla #7, y <span class="mono">G22·07</span> = Grupo G22, charla #7. Despliega el detalle debajo de cada mes para ver el tema completo de cada sesión.',

    'footer.p1': 'Calendario preparado por Kevin García, Maestro Recurso en el Uso de la Computadora, para la Escuela Arianys Nicole Rosa Luquis, dirigido a la Dra. Rebecca López Morell. Elaborado a partir de la Organización Escolar 2026–2027 y el Calendario Escolar 2026–2027 del Departamento de Educación de Puerto Rico.',
    'footer.sig': 'Educación Bilingüe · Dos idiomas, infinitas posibilidades',
    'footer.copyright': 'Escuela Arianys Nicole Rosa Luquis. Todos los derechos reservados.',

    'lang.toggle.label': 'Switch to English',
  },
  en: {
    'nav.brand': 'Digital Literacy · ANRL',
    'nav.portada': 'Home',
    'nav.metodologia': 'Methodology',
    'nav.horario': 'Schedule',
    'nav.grados': 'Sessions by grade',
    'nav.almanaque': 'Calendar',

    'hero.eyebrow': 'School year 2026–2027',
    'hero.h1': 'Digital Literacy<br>Session Calendar',
    'hero.subtitle': 'Weekly session plan from Pre-K through 8th grade, built from the school’s master schedule and the official Department of Education calendar.',
    'hero.escuela': 'School',
    'hero.directora': 'Principal',
    'hero.recurso': 'Resource Teacher — Computer Use',
    'hero.vigencia': 'Runs',

    'metodologia.kicker': 'Methodology',
    'metodologia.h2': 'How this calendar was built',
    'metodologia.p1': 'This calendar was built starting from the Resource Teacher’s weekly work schedule for Computer Use, the school’s master schedule, and the maximum capacity of the Computer classroom —24 students—, cross-checked with the Department of Education’s 2026–2027 School Calendar to identify only the days with classes for students.',
    'metodologia.p2': 'The three daily PK-8th Integrated periods available for these sessions were used —two for the elementary grades (PK through 5th) and one at midday for the intermediate grades (6th through 8th)—; the 7-3 periods were not included because those groups are already served daily during their regular periods.',
    'metodologia.p3': 'Since no classroom can hold more than 24 students in a single session, the small Special Education, Autism Route, and 7th-grade sections were combined with each other —always respecting that maximum— into <strong>26 session groups (G1 through G26)</strong>, each with its own fixed day, period, and frequency for the whole school year.',
    'metodologia.p4': 'Since there are only three periods a day to serve 26 groups, each group receives its session on alternating weeks —a "week A" and a "week B" that take turns—, so each group gets a session roughly every two weeks, always on the same day and at the same time.',
    'metodologia.p5': 'The content of each session follows the unit order of the corresponding curriculum —Introduction to Digital Literacy for the PK through 2nd-grade groups, and Digital Literacy Fundamentals for the 3rd through 8th-grade groups— adapting depth and vocabulary to each group’s level, including the combined Special Education and Autism Route groups. When a group finishes its curriculum before the year ends, the remaining weeks are used for review and skills reinforcement.',
    'metodologia.p6': 'All holidays, academic breaks, Monday, August 24, 2026 —the day it wasn’t possible to start with the corresponding group—, the full Thanksgiving week (November 23–27, 2026), and the full Holy Week (March 22–26, 2027) were excluded from the calendar, per the official School Calendar.',
    'metodologia.li1': 'Maximum 24 students per session — small sections were combined to respect it.',
    'metodologia.li2': 'Only three daily PK-8th Integrated periods — two for elementary, one for intermediate.',
    'metodologia.li3': '26 session groups (G1–G26), each with a fixed day, period, and frequency.',
    'metodologia.li4': 'Biweekly rotation: each group gets its session every two weeks (week A / week B).',
    'metodologia.li5': 'Content aligned to the official curriculum for each level, in unit order.',
    'metodologia.li6': 'First actual session: Tuesday, August 25, 2026.',

    'horario.kicker': 'Weekly rotation',
    'horario.h2': 'Weekly session schedule',
    'horario.p': 'Each fixed PK-8th Integrated period rotates biweekly between one or two groups (week A / week B), except the periods marked "only week A" or "only week B", which serve a single group every other week.',
    'horario.th.hora': 'Time',

    'grados.kicker': 'Detailed calendar',
    'grados.h2': 'Sessions by grade and group',
    'grados.p': 'Pick a group to see the date, time, and topic of every session scheduled during the school year.',
    'grados.buscador-label': 'Search — by classroom, grade, or teacher',
    'grados.buscador-placeholder': 'E.g. 8-1 · 8th · teacher name...',
    'grados.buscador-btn': 'Search',
    'grados.sub-elemental': 'Elementary',
    'grados.sub-elemental-tag': 'PK – 5th',
    'grados.sub-intermedia': 'Intermediate',
    'grados.sub-intermedia-tag': '6th – 8th',
    'grados.th.num': '#',
    'grados.th.fecha': 'Date',
    'grados.th.hora': 'Time',
    'grados.th.unidad': 'Unit',
    'grados.th.tema': 'Session topic',
    'grados.rotation-note': 'Each group meets biweekly, alternating between "week A" and "week B" — check the exact date of the next session in each group’s table.',
    'grados.combo-title': 'Combined groups',
    'grados.combo-intro': '— these 6 small Special Education, Autism Route, and 7th-grade classrooms were combined with each other to respect the maximum of 24 students per session. Every other classroom keeps its own code (e.g., 8-1).',

    'almanaque.kicker': 'Calendar view',
    'almanaque.h2': 'School year calendar',
    'almanaque.p': 'Each tile shows the classroom (or the group code, if it’s a combined group) and the session number — for example, <span class="mono">8-1·07</span> = classroom 8-1, session #7, and <span class="mono">G22·07</span> = Group G22, session #7. Expand the detail below each month to see the full topic of each session.',

    'footer.p1': 'Calendar prepared by Kevin García, Resource Teacher for Computer Use, for Arianys Nicole Rosa Luquis School, addressed to Dr. Rebecca López Morell. Built from the 2026–2027 school master schedule and the Puerto Rico Department of Education’s 2026–2027 School Calendar.',
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
  ['EE Ruta 1 y 2-3 (Combinado — 1ro a 6to)', 'SPED Route 1 & 2-3 (Combined — 1st to 6th)'],
  ['EE Ruta 1 y 2-3 (Combinado — 6to a 8vo)', 'SPED Route 1 & 2-3 (Combined — 6th to 8th)'],
  ['EE Ruta 1 (Combinado — PK a 1ro)', 'SPED Route 1 (Combined — PK to 1st)'],
  ['EE Ruta 1 (Combinado — 1ro a 4to)', 'SPED Route 1 (Combined — 1st to 4th)'],
  ['7mo Grado (7-1 y 7-2)', '7th Grade (7-1 & 7-2)'],
  ['7mo Grado (7-3 y 7-4)', '7th Grade (7-3 & 7-4)'],
  ['Grupo', 'Group'],
  ['Pre-Kínder', 'Pre-K'],
  ['1er Grado', '1st Grade'],
  ['2do Grado', '2nd Grade'],
  ['3er Grado', '3rd Grade'],
  ['4to Grado', '4th Grade'],
  ['5to Grado', '5th Grade'],
  ['6to Grado', '6th Grade'],
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
  ['Reunión quincenal:', 'Biweekly session:'],
  ['Rotación quincenal', 'Biweekly rotation'],
  ['solo semana', 'only week'],
  ['semana A', 'week A'],
  ['semana B', 'week B'],
  ['(Elemental)', '(Elementary)'],
  ['(Intermedia)', '(Intermediate)'],
  ['Todo el día', 'All day'],
  ['Período A', 'Period A'],
  ['Período B', 'Period B'],
  ['Período C', 'Period C'],
  ['charla #', 'session #'],
  ['estudiantes', 'students'],
  ['combina:', 'combines:'],
  ['Introducción a la Alfabetización Digital (TEED 111-0001)', 'Introduction to Digital Literacy (TEED 111-0001)'],
  ['Introducción a la Alfabetización Digital (adaptado)', 'Introduction to Digital Literacy (adapted)'],
  ['Fundamentos de la Alfabetización Digital (TEED 151-1025)', 'Digital Literacy Fundamentals (TEED 151-1025)'],
  ['Fundamentos de la Alfabetización Digital (adaptado)', 'Digital Literacy Fundamentals (adapted)'],
  ['Unidad', 'Unit'],
  ['Ver detalle de charlas de', 'See session details for'],
  ['Preparación de recursos', 'Resource preparation'],
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
  '.tabs-nav', '.legend', '.combo-glossary',
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

  const searchInput = document.getElementById('buscador');
  if (searchInput) searchInput.placeholder = I18N_UI[lang]['grados.buscador-placeholder'];

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
