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
    'nav.maestros': 'Maestros',
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
    'metodologia.p1': 'Para construir este calendario se partió del horario de trabajo semanal del Maestro Recurso en el Uso de la Computadora y de la organización escolar de la escuela, cruzándolos con el Calendario Escolar 2026–2027 del Departamento de Educación para identificar únicamente los días con clases para los estudiantes.',
    'metodologia.p2': 'Se utilizaron exclusivamente los períodos de <strong>Integrado PK-8vo</strong>, ya que son los espacios disponibles para ofrecer estas charlas; los períodos de 7-3 y de Ruta 2 y 3 (6to, 7mo y 8vo) no se incluyeron porque esos grupos ya se atienden a diario en los períodos regulares.',
    'metodologia.p3': 'A cada grado se le asignó un día y un período fijo dentro de los tres bloques semanales de Integrado, de modo que cada grupo reciba su charla en el mismo horario todas las semanas, siguiendo el orden secuencial PK, K, 1ro, 2do, 3ro, 4to, 5to, 6to, 7mo y 8vo.',
    'metodologia.p4': 'El contenido de cada charla sigue el orden de las unidades del temario correspondiente —Introducción a la Alfabetización Digital para PK-2do, y Fundamentos de la Alfabetización Digital para 3ro-8vo— adaptando la profundidad y el vocabulario al nivel de cada grupo, incluyendo los grupos de acomodo razonable y las Rutas de autismo donde aplique. Cuando un grupo termina su temario antes de finalizar el año, las semanas restantes se dedican a repaso y refuerzo de destrezas.',
    'metodologia.p5': 'Se excluyeron del calendario todos los días festivos, los recesos académicos, la semana completa de Acción de Gracias (23 al 27 de noviembre de 2026) y la semana completa de Semana Santa (22 al 26 de marzo de 2027), conforme al Calendario Escolar oficial.',
    'metodologia.p6': 'Para impactar a toda la escuela, se incorporaron también los 13 grupos de Educación Especial y Rutas de Autismo identificados en la Organización Escolar (PK EE Autismo, PK EE No Categorizado, y las Rutas 1, 2 y 3 combinadas por edades). Como solo quedaban 5 períodos de Integrado sin asignar en la semana, cada uno de esos períodos rota entre 2 o 3 de estos grupos, alternando semana a semana, de modo que todos reciban su charla de forma periódica con el temario adaptado a su nivel y necesidades.',
    'metodologia.p7': 'Además, se cruzó cada horario con la Organización Escolar para identificar exactamente qué maestro/a y qué materia quedan reemplazados en cada grado y grupo durante estas charlas (sección "Maestros que se cruzan" más abajo), para que cada docente pueda confirmar su propio horario.',
    'metodologia.li1': 'Solo períodos de <strong>Integrado PK-8vo</strong> — nunca 7-3 ni Ruta 2 y 3.',
    'metodologia.li2': 'Un día y hora fija por grado, toda la semana, todo el año.',
    'metodologia.li3': 'Orden secuencial PK &rarr; 8vo, respetando primaria (1ro-5to) e intermedia (6to-8vo).',
    'metodologia.li4': 'Contenido alineado al temario oficial de cada nivel, en el orden de sus unidades.',
    'metodologia.li5': 'Excluidos: festivos, recesos, la semana de Acción de Gracias y la semana de Semana Santa.',
    'metodologia.li6': 'Primera charla: lunes, 24 de agosto de 2026.',

    'horario.kicker': 'Rotación semanal',
    'horario.h2': 'Horario semanal de charlas',
    'horario.p': 'Cada grado ocupa un período fijo de Integrado PK-8vo durante toda la semana. Los períodos sin grado asignado quedan disponibles para repaso, proyectos especiales o servicios de transportación alterna.',
    'horario.th.hora': 'Hora',

    'maestros.kicker': 'Coordinación docente',
    'maestros.h2': 'Maestros que se cruzan',
    'maestros.p': 'Esta tabla se extrajo de la Organización Escolar 2026–2027: para cada grado y grupo, quién da clase normalmente en <strong>cada uno</strong> de los tres bloques posibles de Integrado (8:30, 12:50 y 1:40), y qué materia queda cubierta esa hora. Los grupos autocontenidos (PK, K, 1.º, 2.º, 3.º, 4-3 y los grupos de EE/Autismo) tienen un solo maestro/a titular todo el día. Los grupos departamentalizados (4.º a 8.º) muestran los tres especialistas, uno por bloque — el que lleva la etiqueta <span class="real-badge">★ horario real</span> es el que realmente pierde su período con esta charla; los otros dos quedan como referencia. Cada maestro/a puede filtrar por su nombre o por grado para confirmar exactamente cuándo se ve afectado.',
    'maestros.filtrar-grado': 'Filtrar por grado',
    'maestros.filtrar-maestro': 'Filtrar por maestro/a',
    'maestros.todos-grados': 'Todos los grados',
    'maestros.todos-maestros': 'Todos los maestros/as',
    'maestros.ee-todos': 'Educación Especial / Autismo (todos)',
    'maestros.limpiar': 'Limpiar filtros',
    'maestros.th.grado': 'Grado / grupo',
    'maestros.th.seccion': 'Sección',
    'maestros.th.dia': 'Día',
    'maestros.th.hora': 'Hora',
    'maestros.th.maestro': 'Maestro/a',
    'maestros.th.materia': 'Materia / actividad reemplazada',
    'maestros.spotlight-close': 'Quitar enfoque ✕',
    'maestros.titular-auto': 'Titular (grupo autocontenido)',
    'maestros.real-badge': '★ horario real',
    'maestros.real-badge-title': 'Coincide con el horario real de la charla',

    'grados.kicker': 'Calendario detallado',
    'grados.h2': 'Charlas por grado y por grupo',
    'grados.p': 'Selecciona un grado o un grupo para ver la fecha, hora y tema de cada charla programada durante el año escolar.',
    'grados.buscador-label': 'Buscador — por salón, grado o maestro/a',
    'grados.buscador-placeholder': 'Ej. 8-1 · 8vo · nombre del maestro...',
    'grados.buscador-btn': 'Buscar',
    'grados.sub-generales': 'Grados generales',
    'grados.sub-generales-tag': 'PK – 8vo',
    'grados.sub-ee': 'Grupos de Educación Especial y Rutas de Autismo',
    'grados.sub-ee-tag': 'Toda la escuela',
    'grados.th.num': '#',
    'grados.th.fecha': 'Fecha',
    'grados.th.hora': 'Hora',
    'grados.th.unidad': 'Unidad',
    'grados.th.tema': 'Tema de la charla',
    'grados.rotation-note': 'Estos 13 grupos autocontenidos comparten los 5 períodos de Integrado que quedaban libres en el horario. Cada período rota entre 2 o 3 grupos semana por semana (ver el horario semanal arriba), por lo que cada grupo recibe una charla aproximadamente cada 2 o 3 semanas, siguiendo el mismo temario adaptado a su nivel.',

    'almanaque.kicker': 'Vista de almanaque',
    'almanaque.h2': 'Almanaque del año escolar',
    'almanaque.p': 'Cada ficha muestra el grado abreviado y el número de charla (por ejemplo, <span class="mono">3·07</span> = 3er grado, charla #7). Despliega el detalle debajo de cada mes para ver el tema completo de cada sesión.',

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
    'nav.maestros': 'Teachers',
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
    'metodologia.p1': 'This calendar was built starting from the Resource Teacher’s weekly work schedule for Computer Use and the school’s master schedule, cross-checked with the Department of Education’s 2026–2027 School Calendar to identify only the days with classes for students.',
    'metodologia.p2': 'Only <strong>PK-8th Integrated</strong> periods were used, since those are the only slots available to offer these sessions; the 7-3 periods and Route 2 & 3 (6th, 7th, and 8th) periods were not included because those groups are already served daily during their regular periods.',
    'metodologia.p3': 'Each grade was assigned a fixed day and period within the three weekly Integrated blocks, so that every group gets its session at the same time every week, following the sequential order Pre-K, K, 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, and 8th.',
    'metodologia.p4': 'The content of each session follows the unit order of the corresponding curriculum —Introduction to Digital Literacy for Pre-K through 2nd, and Digital Literacy Fundamentals for 3rd through 8th— adapting depth and vocabulary to each group’s level, including reasonable-accommodation groups and Autism Routes where applicable. When a group finishes its curriculum before the year ends, the remaining weeks are used for review and skills reinforcement.',
    'metodologia.p5': 'All holidays, academic breaks, the full Thanksgiving week (November 23–27, 2026), and the full Holy Week (March 22–26, 2027) were excluded from the calendar, per the official School Calendar.',
    'metodologia.p6': 'To reach the whole school, the 13 Special Education and Autism Route groups identified in the school’s master schedule were also included (PK SPED Autism, PK SPED Uncategorized, and Routes 1, 2, and 3 combined by age). Since only 5 Integrated periods were left unassigned during the week, each of those periods rotates among 2 or 3 of these groups, alternating week to week, so that all of them receive their session periodically with the curriculum adapted to their level and needs.',
    'metodologia.p7': 'In addition, each schedule was cross-checked with the school’s master schedule to identify exactly which teacher and subject are covered in each grade and group during these sessions (see the "Teachers affected" section below), so every teacher can confirm their own schedule.',
    'metodologia.li1': 'Only <strong>PK-8th Integrated</strong> periods — never 7-3 or Route 2 & 3.',
    'metodologia.li2': 'One fixed day and time per grade, all week, all year.',
    'metodologia.li3': 'Sequential order Pre-K &rarr; 8th, respecting elementary (1st-5th) and intermediate (6th-8th).',
    'metodologia.li4': 'Content aligned to the official curriculum for each level, in unit order.',
    'metodologia.li5': 'Excluded: holidays, breaks, Thanksgiving week, and Holy Week.',
    'metodologia.li6': 'First session: Monday, August 24, 2026.',

    'horario.kicker': 'Weekly rotation',
    'horario.h2': 'Weekly session schedule',
    'horario.p': 'Each grade occupies a fixed PK-8th Integrated period all week. Periods with no grade assigned are available for review, special projects, or alternate transportation services.',
    'horario.th.hora': 'Time',

    'maestros.kicker': 'Teacher coordination',
    'maestros.h2': 'Teachers affected',
    'maestros.p': 'This table was pulled from the 2026–2027 school master schedule: for each grade and section, who normally teaches in <strong>each</strong> of the three possible Integrated blocks (8:30, 12:50, and 1:40), and which subject is covered that hour. Self-contained groups (PK, K, 1st, 2nd, 3rd, 4-3, and the SPED/Autism groups) have a single homeroom teacher all day. Departmentalized groups (4th-8th) show all three specialists, one per block — the one tagged <span class="real-badge">★ actual schedule</span> is the one who actually loses their period to this session; the other two are shown as reference. Each teacher can filter by name or grade to confirm exactly when they’re affected.',
    'maestros.filtrar-grado': 'Filter by grade',
    'maestros.filtrar-maestro': 'Filter by teacher',
    'maestros.todos-grados': 'All grades',
    'maestros.todos-maestros': 'All teachers',
    'maestros.ee-todos': 'Special Education / Autism (all)',
    'maestros.limpiar': 'Clear filters',
    'maestros.th.grado': 'Grade / group',
    'maestros.th.seccion': 'Section',
    'maestros.th.dia': 'Day',
    'maestros.th.hora': 'Time',
    'maestros.th.maestro': 'Teacher',
    'maestros.th.materia': 'Subject / activity covered',
    'maestros.spotlight-close': 'Clear focus ✕',
    'maestros.titular-auto': 'Homeroom teacher (self-contained group)',
    'maestros.real-badge': '★ actual schedule',
    'maestros.real-badge-title': 'Matches the session’s actual schedule',

    'grados.kicker': 'Detailed calendar',
    'grados.h2': 'Sessions by grade and group',
    'grados.p': 'Pick a grade or group to see the date, time, and topic of every session scheduled during the school year.',
    'grados.buscador-label': 'Search — by classroom, grade, or teacher',
    'grados.buscador-placeholder': 'E.g. 8-1 · 8th · teacher name...',
    'grados.buscador-btn': 'Search',
    'grados.sub-generales': 'General grades',
    'grados.sub-generales-tag': 'PK – 8th',
    'grados.sub-ee': 'Special Education and Autism Route groups',
    'grados.sub-ee-tag': 'School-wide',
    'grados.th.num': '#',
    'grados.th.fecha': 'Date',
    'grados.th.hora': 'Time',
    'grados.th.unidad': 'Unit',
    'grados.th.tema': 'Session topic',
    'grados.rotation-note': 'These 13 self-contained groups share the 5 Integrated periods left unassigned in the schedule. Each period rotates among 2 or 3 groups week by week (see the weekly schedule above), so each group gets a session roughly every 2 or 3 weeks, following the same curriculum adapted to their level.',

    'almanaque.kicker': 'Calendar view',
    'almanaque.h2': 'School year calendar',
    'almanaque.p': 'Each tile shows the abbreviated grade and session number (for example, <span class="mono">3·07</span> = 3rd grade, session #7). Expand the detail below each month to see the full topic of each session.',

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
  ['EE Ruta 2 y 3 (1ro, 2do y 3ro — Autismo)', 'SPED Route 2 & 3 (1st, 2nd & 3rd — Autism)'],
  ['EE Ruta 2 y 3 (6to, 7mo y 8vo — Autismo)', 'SPED Route 2 & 3 (6th, 7th & 8th — Autism)'],
  ['EE Ruta 2 y 3 (1ro y 2do — Autismo)', 'SPED Route 2 & 3 (1st & 2nd — Autism)'],
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
  ['Kindergarten', 'Kindergarten'],
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
  ['Período compartido en rotación:', 'Shared rotating period:'],
  ['temas del currículo + repaso continuo', 'curriculum topics + ongoing review'],
  ['charlas durante el año', 'sessions during the school year'],
  ['Reunión semanal fija:', 'Fixed weekly session:'],
  ['grupos junto a', 'groups alongside'],
  ['Rotación EE/Autismo', 'SPED/Autism rotation'],
  ['rotación de', 'rotation of'],
  ['Todo el día', 'All day'],
  ['Período A', 'Period A'],
  ['Período B', 'Period B'],
  ['Período C', 'Period C'],
  ['charla #', 'session #'],
  ['★ horario real', '★ actual schedule'],
  ['Introducción a la Alfabetización Digital (TEED 111-0001)', 'Introduction to Digital Literacy (TEED 111-0001)'],
  ['Introducción a la Alfabetización Digital (adaptado)', 'Introduction to Digital Literacy (adapted)'],
  ['Fundamentos de la Alfabetización Digital (TEED 151-1025)', 'Digital Literacy Fundamentals (TEED 151-1025)'],
  ['Fundamentos de la Alfabetización Digital (adaptado)', 'Digital Literacy Fundamentals (adapted)'],
  ['Unidad', 'Unit'],
  ['Ver detalle de charlas de', 'See session details for'],
  ['comparte este período con', 'shares this period with'],
  ['Rotación de', 'Rotation of'],
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
  '.month-title', '.month-nav-link', '#tabla-maestros tbody', '.hero-meta .value',
  '.tabs-nav', '.legend', '#mf-grado',
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

  document.querySelectorAll('.real-badge[title]').forEach((el) => {
    el.title = I18N_UI[lang]['maestros.real-badge-title'];
  });

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
