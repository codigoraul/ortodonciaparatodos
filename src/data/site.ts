// Datos centrales del sitio — editar aquí para actualizar todo el sitio.

export const SITE = {
  name: 'Ortodoncia Para Todos',
  legalName: 'Ortodoncia Para Todos',
  slogan: 'Tu sonrisa, nuestro propósito',
  url: 'https://ortodonciaparatodos.cl',
  city: 'Temuco',
  region: 'La Araucanía',
  address: 'A. Varas 989, piso 20, Edificio Capital',
  addressFull: 'A. Varas 989, piso 20, Edificio Capital, Temuco',
  postalCode: '4780000',
  geo: { lat: -38.7392, lng: -72.5963 },
  mapsUrl: 'https://maps.app.goo.gl/qRhLm2oXssdMhXHz8',
  mapsEmbed:
    'https://maps.google.com/maps?q=Antonio%20Varas%20989%2C%20Temuco%2C%20Chile&t=&z=17&ie=UTF8&iwloc=&output=embed',
  email: 'contacto@ortodonciaparatodos.cl',
  phones: [
    { label: '+56 45 275 6565', href: 'tel:+56452756565' },
    { label: '+56 9 5406 3149', href: 'tel:+56954063149' },
  ],
  whatsapp: {
    number: '56998447356',
    label: '+56 9 9844 7356',
    href: 'https://api.whatsapp.com/send?phone=56998447356&text=Hola,%20vi%20su%20contacto%20desde%20ortodonciaparatodos.cl%20y%20necesito%20agendar%20una%20evaluaci%C3%B3n',
  },
  agendaUrl: 'https://6741b06af294b3ee72021da7f5d254f29122a29f.agenda.softwaredentalink.com/agenda',
  social: {
    instagram: 'https://instagram.com/ortodonciaparatodos',
    facebook: 'https://web.facebook.com/profile.php?id=100063637998188',
  },
  yearsExperience: 18,
  foundingYear: 2008,
  emailjs: {
    publicKey: 'Wnmz_tauG1p-dtmaF',
    serviceId: 'service_raul4q',
    templateId: 'template_rd29wef',
  },
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string; desc?: string }[] };

export const NAV: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros/' },
  {
    label: 'Tratamientos',
    href: '/tratamientos/',
    children: [
      { label: 'Brackets metálicos', href: '/tratamientos/brackets-metalicos/', desc: 'Eficientes y accesibles' },
      { label: 'Brackets estéticos', href: '/tratamientos/brackets-esteticos/', desc: 'Discretos, color diente' },
      { label: 'Alineadores transparentes', href: '/tratamientos/alineadores-transparentes/', desc: 'Casi invisibles' },
      { label: 'Ortodoncia infantil', href: '/tratamientos/ortodoncia-infantil/', desc: 'Guiamos su crecimiento' },
      { label: 'Implantes dentales', href: '/tratamientos/implantes-dentales/', desc: 'Recupera piezas perdidas' },
      { label: 'Endodoncia', href: '/tratamientos/endodoncia/', desc: 'Salva tu diente' },
      { label: 'Rehabilitación oral', href: '/tratamientos/rehabilitacion-oral/', desc: 'Carillas y coronas' },
      { label: 'Odontología general', href: '/tratamientos/odontologia-general/', desc: 'Prevención y control' },
    ],
  },
  { label: 'Aranceles', href: '/aranceles/' },
  { label: 'Especialistas', href: '/especialistas/' },
  {
    label: 'Educación',
    href: '/educacion/',
    children: [
      { label: 'Artículos y guías', href: '/educacion/', desc: 'Salud bucal y ortodoncia' },
      { label: 'Videos', href: '/videos/', desc: '17 videos educativos' },
      { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes/', desc: 'Resolvemos tus dudas' },
    ],
  },
  { label: 'Contacto', href: '/contacto/' },
];

/* ---------------- Equipo ---------------- */
import pedro from '../assets/equipo/pedro-saavedra.webp';
import belen from '../assets/equipo/belen-fernandez.webp';
import daniel from '../assets/equipo/daniel-sanza.webp';
import ricardo from '../assets/equipo/ricardo-alveal.webp';
import carlos from '../assets/equipo/carlos-arriagada.webp';
import fernando from '../assets/equipo/fernando-rivera.webp';
import nicol from '../assets/equipo/nicol-buck.webp';
import josefa from '../assets/equipo/josefa-alarcon.webp';
import daniela from '../assets/equipo/daniela-antilef.webp';
import janet from '../assets/equipo/janet-vilches.webp';
import danae from '../assets/equipo/danae-ortiz.webp';
import gabrielaV from '../assets/equipo/gabriela-velasquez.webp';
import yenifel from '../assets/equipo/yenifel-rodriguez.webp';
import gabriela from '../assets/equipo/gabriela-ruiz.webp';
import andrea from '../assets/equipo/andrea-barria.webp';
import camila from '../assets/equipo/camila-antipan.webp';

export const SPECIALISTS = [
  { name: 'Dr. Pedro Saavedra', role: 'Ortodoncia e implantología', note: 'Director clínica Milenium', photo: pedro, tags: ['ortodoncia', 'implantes'] },
  { name: 'Dra. Belén Fernández', role: 'Ortodoncia', note: 'Especialista en ortodoncia', photo: belen, tags: ['ortodoncia'] },
  { name: 'Dr. Daniel Sanza', role: 'Ortodoncia', note: 'Especialista en ortodoncia y alineadores', photo: daniel, tags: ['ortodoncia'] },
  { name: 'Dr. Ricardo Alveal', role: 'Implantología', note: 'Especialista en implantología', photo: ricardo, tags: ['implantes'] },
  { name: 'Dr. Carlos Arriagada', role: 'Endodoncia', note: 'Especialista en endodoncia', photo: carlos, tags: ['endodoncia'] },
  { name: 'Dr. Fernando Rivera', role: 'Rehabilitación oral', note: 'Especialista en rehabilitación oral', photo: fernando, tags: ['rehabilitacion', 'implantes'] },
  { name: 'Dra. Nicol Buck', role: 'Odontología general', note: 'Prevención y salud bucal', photo: nicol, tags: ['general'] },
  { name: 'Dra. Josefa Alarcón', role: 'Odontología general', note: 'Cirujano dentista', photo: josefa, tags: ['general'] },
];

export const STAFF = [
  { name: 'Daniela Antilef', role: 'Asistente dental', photo: daniela },
  { name: 'Janet Vilches', role: 'Asistente dental', photo: janet },
  { name: 'Danae Ortiz', role: 'Asistente dental', photo: danae },
  { name: 'Gabriela Velásquez', role: 'Asistente dental', photo: gabrielaV },
  { name: 'Yenifel Rodríguez', role: 'Asistente dental', photo: yenifel },
  { name: 'Gabriela Ruiz', role: 'Secretaria', photo: gabriela },
  { name: 'Andrea Barría', role: 'Secretaria', photo: andrea },
  { name: 'Camila Antipan', role: 'Secretaria', photo: camila },
];

/* ---------------- Aranceles ---------------- */
export type PriceItem = { title: string; price: number; unit?: string; detail: string[]; note?: string };
export type PricePlan = { id: string; name: string; subtitle: string; highlight?: boolean; items: PriceItem[] };

export const PRICE_PLANS: PricePlan[] = [
  {
    id: 'metalicos',
    name: 'Brackets metálicos',
    subtitle: 'Ortodoncia fija convencional',
    items: [
      {
        title: 'Diagnóstico y planificación',
        price: 45000,
        detail: ['Estudio clínico completo', 'Planificación de tratamiento', 'Modelos de estudio', 'Fotos clínicas', 'Cefalometría'],
        note: 'No incluye radiografías.',
      },
      {
        title: 'Instalación brackets metálicos',
        price: 279900,
        detail: ['Brackets de alta calidad', 'Arcos y ligaduras', 'Instalación profesional'],
      },
      {
        title: 'Control mensual',
        price: 35000,
        unit: '/ mes',
        detail: ['Controles y ajustes', 'Cambio de arcos', 'Seguimiento del tratamiento'],
      },
      {
        title: 'Retiro y contención',
        price: 170000,
        detail: ['Retiro de brackets', 'Higiene', 'Instalación de contención'],
        note: 'Control mensual de contención: $20.000',
      },
    ],
  },
  {
    id: 'esteticos',
    name: 'Brackets estéticos',
    subtitle: 'Discretos, del color de tus dientes',
    highlight: true,
    items: [
      {
        title: 'Diagnóstico y planificación',
        price: 45000,
        detail: ['Estudio clínico completo', 'Planificación de tratamiento', 'Modelos de estudio', 'Fotos clínicas', 'Cefalometría'],
        note: 'No incluye radiografías.',
      },
      {
        title: 'Instalación brackets estéticos',
        price: 379000,
        detail: ['Brackets estéticos de alta calidad', 'Arcos y ligaduras', 'Instalación profesional'],
      },
      {
        title: 'Control mensual',
        price: 40000,
        unit: '/ mes',
        detail: ['Controles y ajustes', 'Cambio de arcos', 'Seguimiento del tratamiento'],
      },
      {
        title: 'Retiro y contención',
        price: 190000,
        detail: ['Retiro de brackets', 'Higiene', 'Instalación de contención'],
        note: 'Control mensual de contención: $20.000',
      },
    ],
  },
];

export const clp = (n: number) => '$' + n.toLocaleString('es-CL');

/* ---------------- Videos (se conservan rutas del sitio anterior) ---------------- */
export type Video = { file: string; title: string; desc: string; topic: string; related?: string[]; secs?: number };

export const VIDEOS: Video[] = [
  { file: 'video1', secs: 42, title: 'Ortodoncia de última generación', desc: 'Conoce más sobre los tratamientos de ortodoncia y sus beneficios.', topic: 'Ortodoncia', related: ['brackets-metalicos', 'brackets-esteticos'] },
  { file: 'video2', secs: 79, title: 'Consejos para el cuidado dental', desc: 'Tips importantes para mantener una buena salud dental.', topic: 'Prevención', related: ['odontologia-general'] },
  { file: 'Ortodoncia-implantologia-periodoncia', secs: 43, title: 'Ortodoncia, implantología y periodoncia', desc: 'Descubre la relación entre estos tres campos fundamentales de la odontología.', topic: 'Ortodoncia', related: ['implantes-dentales'] },
  { file: 'video3', secs: 20, title: 'A la vanguardia en ortodoncia', desc: 'Conoce los últimos avances en ortodoncia.', topic: 'Ortodoncia', related: ['brackets-metalicos', 'alineadores-transparentes'] },
  { file: 'video4', secs: 39, title: 'Cerámica de una sesión', desc: 'Fresado, cristalizado y glaseado, arenado y más: así se fabrica una restauración en una sola cita.', topic: 'Rehabilitación', related: ['rehabilitacion-oral'] },
  { file: 'video5', secs: 49, title: 'Tinción en cerámica dental', desc: 'Paso clave para una restauración estética natural y armoniosa.', topic: 'Rehabilitación', related: ['rehabilitacion-oral'] },
  { file: 'video6', secs: 47, title: '¿Cuánto duran los implantes?', desc: 'Lo que determina la vida útil de un implante dental.', topic: 'Implantes', related: ['implantes-dentales'] },
  { file: 'plano-de-barcelona', secs: 59, title: 'Plano de Barcelona', desc: 'Guía estética para planificar el tratamiento.', topic: 'Rehabilitación', related: ['rehabilitacion-oral'] },
  { file: 'dolor-dental-en-la-noche', secs: 32, title: 'Dolor dental en la noche', desc: 'Conoce más sobre el dolor dental y cómo prevenirlo.', topic: 'Prevención', related: ['endodoncia', 'odontologia-general'] },
  { file: 'correccion-dental', secs: 27, title: 'Última tecnología en carillas cerámicas', desc: 'Conoce más sobre la última tecnología en carillas cerámicas.', topic: 'Rehabilitación', related: ['rehabilitacion-oral'] },
  { file: 'video7', secs: 68, title: 'Respiración bucal en niños', desc: 'Por qué es importante que los niños respiren por la nariz y no por la boca al dormir.', topic: 'Niños', related: ['ortodoncia-infantil'] },
  { file: 'la-caries-se-puede-contagiar', secs: 71, title: '¿La caries se puede contagiar?', desc: 'Cómo las bacterias de la caries pueden transmitirse de una persona a otra.', topic: 'Prevención', related: ['odontologia-general', 'ortodoncia-infantil'] },
  { file: 'sindrome-del-respirador-bucal', secs: 120, title: 'Síndrome del respirador bucal', desc: 'Consecuencias de respirar por la boca y cómo tratarlo.', topic: 'Niños', related: ['ortodoncia-infantil'] },
  { file: 'paladar-estrecho', secs: 75, title: 'Paladar estrecho', desc: 'Qué es el paladar estrecho y cómo puede corregirse con ortodoncia.', topic: 'Niños', related: ['ortodoncia-infantil'] },
  { file: 'retenedores-hasta-cuando-ocupar', secs: 90, title: 'Los retenedores, ¿hasta cuándo usarlos?', desc: 'Por cuánto tiempo debes usar tus retenedores después de la ortodoncia.', topic: 'Ortodoncia', related: ['brackets-metalicos', 'brackets-esteticos', 'alineadores-transparentes'] },
  { file: 'la-osteointegracion', secs: 55, title: 'La osteointegración', desc: 'Cómo el implante dental se une al hueso para lograr un resultado firme y duradero.', topic: 'Implantes', related: ['implantes-dentales'] },
  { file: 'la-periimplantitis', secs: 78, title: 'La periimplantitis', desc: 'Conoce esta enfermedad que afecta a los implantes dentales y cómo prevenirla.', topic: 'Implantes', related: ['implantes-dentales'] },
];

/* ---------------- FAQ generales ---------------- */
export const FAQS_GENERAL = [
  {
    q: '¿Cuánto cuesta la ortodoncia en Temuco en Ortodoncia Para Todos?',
    a: 'Publicamos nuestros aranceles: el diagnóstico y planificación cuesta $45.000, la instalación de brackets metálicos $279.900 y los controles mensuales $35.000. En brackets estéticos la instalación es de $379.000 y el control mensual $40.000. Revisa el detalle completo en nuestra página de aranceles.',
  },
  {
    q: '¿Atienden Fonasa o Isapre?',
    a: 'Trabajamos con un arancel único y transparente para todos nuestros pacientes, sin importar su previsión de salud. No hacemos diferencias entre Fonasa, Isapre o particular.',
  },
  {
    q: '¿Desde qué edad se puede usar ortodoncia?',
    a: 'No hay una edad límite. En niños se recomienda una primera evaluación alrededor de los 7 años para detectar a tiempo problemas de crecimiento, como paladar estrecho o respiración bucal. Los adultos también pueden tratarse con excelentes resultados siempre que sus encías y huesos estén sanos.',
  },
  {
    q: '¿Cuánto dura un tratamiento con brackets?',
    a: 'Depende de cada caso. Como referencia, la mayoría de los tratamientos dura entre 12 y 30 meses. En la evaluación inicial tu ortodoncista te dará un plazo estimado según tu diagnóstico.',
  },
  {
    q: '¿Duele ponerse brackets?',
    a: 'La instalación no duele. Durante los primeros días es normal sentir presión o sensibilidad, que suele pasar en una semana y se maneja con alimentación blanda y, si es necesario, analgésicos comunes indicados por tu dentista.',
  },
  {
    q: '¿Dónde están ubicados?',
    a: 'Estamos en A. Varas 989, piso 20, Edificio Capital, en pleno centro de Temuco, con fácil acceso en locomoción colectiva y estacionamientos cercanos.',
  },
  {
    q: '¿Cómo agendo una hora?',
    a: 'Puedes agendar en línea las 24 horas desde el botón "Agendar cita", escribirnos por WhatsApp al +56 9 9844 7356 o llamarnos al +56 45 275 6565 / +56 9 5406 3149.',
  },
];

export const isoDuration = (s = 60) => `PT${Math.floor(s / 60)}M${s % 60}S`;
export const fmtDuration = (s = 60) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
