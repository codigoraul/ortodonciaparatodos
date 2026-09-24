import metalicos from '../assets/img/brackets-metalicos.jpg';
import esteticos from '../assets/img/brackets-esteticos.jpg';
import alineadores from '../assets/img/alineadores-transparentes.jpg';
import infantil from '../assets/img/ortodoncia-infantil.jpg';
import ortodoncista from '../assets/img/ortodoncista-paciente.jpg';
import sliderSillon from '../assets/img/slider-1.jpg';
import boxClinica from '../assets/img/clinica-home.webp';
import sliderPaciente from '../assets/img/slider-2.jpg';
import type { ImageMetadata } from 'astro';

export type Treatment = {
  slug: string;
  name: string;
  short: string;
  category: 'ortodoncia' | 'especialidades';
  seoTitle: string;
  seoDescription: string;
  h1: string;
  lead: string;
  image: ImageMetadata;
  imageAlt: string;
  icon: string;
  intro: string[];
  benefits: { title: string; text: string }[];
  forWho: string[];
  steps: { title: string; text: string }[];
  priceFrom?: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  specialistTag: string;
};

export const TREATMENTS: Treatment[] = [
  {
    slug: 'brackets-metalicos',
    name: 'Brackets metálicos',
    short: 'Eficientes, seguros y accesibles.',
    category: 'ortodoncia',
    seoTitle: 'Brackets metálicos en Temuco desde $279.900',
    seoDescription:
      'Brackets metálicos en Temuco con precios publicados: instalación $279.900 y control mensual $35.000. Arancel único para Fonasa, Isapre y particulares. Agenda tu evaluación.',
    h1: 'Brackets metálicos en Temuco',
    lead: 'La ortodoncia fija más probada y eficiente, con precios transparentes y el mismo arancel para todos.',
    image: metalicos,
    imageAlt: 'Sonrisa con brackets metálicos de ortodoncia fija',
    icon: 'braces',
    intro: [
      'Los brackets metálicos son el sistema de ortodoncia fija más utilizado en el mundo. Pequeñas piezas de acero de grado médico se adhieren a cada diente y, a través de un arco, aplican fuerzas suaves y controladas que llevan los dientes a su posición correcta.',
      'Son la alternativa más costo-eficiente para corregir apiñamiento, dientes separados, mordida cruzada, mordida abierta o profunda y otros problemas de oclusión, tanto en adolescentes como en adultos.',
    ],
    benefits: [
      { title: 'Máxima eficacia', text: 'Permiten corregir desde casos simples hasta maloclusiones complejas con gran precisión.' },
      { title: 'Precio accesible', text: 'Es la opción de ortodoncia más económica, con valores publicados y sin sorpresas.' },
      { title: 'Muy resistentes', text: 'El acero soporta bien la masticación diaria y reduce los imprevistos durante el tratamiento.' },
      { title: 'Controles mensuales', text: 'Tu ortodoncista ajusta el tratamiento cada mes y monitorea tu avance de cerca.' },
    ],
    forWho: [
      'Dientes apiñados o muy separados',
      'Problemas de mordida (cruzada, abierta, profunda)',
      'Adolescentes y adultos con encías sanas',
      'Quienes buscan el mejor resultado al menor costo',
    ],
    steps: [
      { title: 'Diagnóstico', text: 'Estudio clínico, fotos, modelos y cefalometría para planificar tu caso.' },
      { title: 'Instalación', text: 'Colocamos los brackets en una sesión cómoda y te enseñamos a cuidarlos.' },
      { title: 'Controles', text: 'Cada mes ajustamos arcos y revisamos tu avance.' },
      { title: 'Contención', text: 'Retiramos los brackets e instalamos la contención para mantener el resultado.' },
    ],
    priceFrom: [
      { label: 'Diagnóstico y planificación', value: '$45.000' },
      { label: 'Instalación', value: '$279.900' },
      { label: 'Control mensual', value: '$35.000' },
      { label: 'Retiro y contención', value: '$170.000' },
    ],
    faqs: [
      { q: '¿Cuánto cuestan los brackets metálicos en Temuco?', a: 'En Ortodoncia Para Todos la instalación de brackets metálicos cuesta $279.900, el diagnóstico y planificación $45.000 y el control mensual $35.000. Al finalizar, el retiro y contención tiene un valor de $170.000.' },
      { q: '¿Cuánto tiempo tendré los brackets?', a: 'Depende de la complejidad de cada caso; la mayoría de los tratamientos dura entre 12 y 30 meses. En tu diagnóstico te entregamos un plazo estimado.' },
      { q: '¿Qué alimentos debo evitar?', a: 'Evita alimentos muy duros (frutos secos enteros, hielo), pegajosos (caramelos, chicles) y morder directamente alimentos firmes como manzanas o choclo: mejor córtalos en trozos pequeños.' },
    ],
    specialistTag: 'ortodoncia',
  },
  {
    slug: 'brackets-esteticos',
    name: 'Brackets estéticos',
    short: 'Discretos, del color de tus dientes.',
    category: 'ortodoncia',
    seoTitle: 'Brackets estéticos en Temuco desde $379.000',
    seoDescription:
      'Brackets estéticos (cerámicos) en Temuco: instalación $379.000 y control mensual $40.000. Ortodoncia discreta con arancel único. Agenda tu evaluación.',
    h1: 'Brackets estéticos en Temuco',
    lead: 'La misma eficacia de la ortodoncia fija, con brackets del color de tus dientes que casi no se notan.',
    image: esteticos,
    imageAlt: 'Sonrisa de mujer adulta con brackets estéticos',
    icon: 'sparkle',
    intro: [
      'Los brackets estéticos están fabricados en materiales cerámicos o de zafiro que imitan el tono natural del diente. Funcionan igual que los brackets metálicos, pero son mucho más discretos.',
      'Son ideales para adultos y adolescentes que quieren corregir su sonrisa sin que el tratamiento sea protagonista en el trabajo, en la universidad o en fotos.',
    ],
    benefits: [
      { title: 'Casi invisibles', text: 'Se mimetizan con el color del esmalte para una apariencia natural.' },
      { title: 'Misma eficacia', text: 'Corrigen los mismos problemas que la ortodoncia fija convencional.' },
      { title: 'Ideal para adultos', text: 'Una opción discreta para tu vida profesional y social.' },
      { title: 'Precio transparente', text: 'Valores publicados y el mismo arancel para todos los pacientes.' },
    ],
    forWho: [
      'Adultos que priorizan la estética',
      'Adolescentes que prefieren una opción discreta',
      'Apiñamiento, espacios y problemas de mordida',
      'Pacientes comprometidos con su higiene',
    ],
    steps: [
      { title: 'Diagnóstico', text: 'Evaluamos tu caso y confirmamos si los brackets estéticos son la mejor opción.' },
      { title: 'Instalación', text: 'Colocamos los brackets cerámicos en una sesión.' },
      { title: 'Controles', text: 'Ajustes mensuales para avanzar de forma segura.' },
      { title: 'Contención', text: 'Retiro y contención para mantener tu nueva sonrisa.' },
    ],
    priceFrom: [
      { label: 'Diagnóstico y planificación', value: '$45.000' },
      { label: 'Instalación', value: '$379.000' },
      { label: 'Control mensual', value: '$40.000' },
      { label: 'Retiro y contención', value: '$190.000' },
    ],
    faqs: [
      { q: '¿Los brackets estéticos se manchan?', a: 'El bracket cerámico en sí es resistente a las manchas, pero las ligaduras elásticas pueden teñirse con café, té, vino o bebidas oscuras. Se cambian en cada control mensual.' },
      { q: '¿Son más lentos que los metálicos?', a: 'En la mayoría de los casos la duración es similar. Tu ortodoncista te indicará un plazo estimado según tu diagnóstico.' },
      { q: '¿Cuál es la diferencia de precio con los metálicos?', a: 'La instalación de brackets estéticos cuesta $379.000 y el control mensual $40.000, frente a $279.900 y $35.000 de los metálicos.' },
    ],
    specialistTag: 'ortodoncia',
  },
  {
    slug: 'alineadores-transparentes',
    name: 'Alineadores transparentes',
    short: 'Estética y comodidad para tu estilo de vida.',
    category: 'ortodoncia',
    seoTitle: 'Alineadores transparentes en Temuco | Ortodoncia invisible',
    seoDescription:
      'Alineadores transparentes en Temuco: ortodoncia casi invisible y removible. Evaluación con ortodoncistas especialistas en Ortodoncia Para Todos. Agenda hoy.',
    h1: 'Alineadores transparentes en Temuco',
    lead: 'Férulas transparentes y removibles que alinean tus dientes de forma casi invisible.',
    image: alineadores,
    imageAlt: 'Paciente sosteniendo un alineador transparente en la clínica',
    icon: 'aligner',
    intro: [
      'Los alineadores transparentes son una serie de férulas de plástico médico hechas a la medida de tu boca. Cada juego mueve los dientes de forma gradual hasta lograr la posición planificada.',
      'Como se pueden retirar para comer y cepillarse, ofrecen gran comodidad y facilitan la higiene. Requieren disciplina: deben usarse la mayor parte del día para funcionar.',
    ],
    benefits: [
      { title: 'Prácticamente invisibles', text: 'Nadie notará que estás en tratamiento.' },
      { title: 'Removibles', text: 'Te los quitas para comer, cepillarte o en ocasiones especiales.' },
      { title: 'Más cómodos', text: 'Sin piezas metálicas que rocen labios o mejillas.' },
      { title: 'Higiene simple', text: 'Cepillado y uso de hilo dental sin obstáculos.' },
    ],
    forWho: [
      'Adultos y adolescentes con dentición permanente',
      'Apiñamiento o espacios leves a moderados',
      'Recidivas después de una ortodoncia anterior',
      'Personas disciplinadas con el uso diario',
    ],
    steps: [
      { title: 'Evaluación', text: 'Revisamos si tu caso es apto para alineadores.' },
      { title: 'Planificación', text: 'Diseñamos digitalmente el movimiento de tus dientes.' },
      { title: 'Uso diario', text: 'Cambias de alineador según la pauta indicada.' },
      { title: 'Contención', text: 'Mantienes el resultado con retenedores.' },
    ],
    faqs: [
      { q: '¿Cuántas horas al día se usan los alineadores?', a: 'En general se indica usarlos alrededor de 22 horas diarias, retirándolos solo para comer y cepillarse. Tu ortodoncista te dará la pauta exacta.' },
      { q: '¿Sirven para todos los casos?', a: 'No siempre. Algunos casos complejos se resuelven mejor con brackets. Por eso realizamos una evaluación antes de recomendarlos.' },
      { q: '¿Cuánto cuestan?', a: 'El valor depende del número de alineadores que requiere cada caso. Agenda una evaluación para recibir un presupuesto personalizado.' },
    ],
    specialistTag: 'ortodoncia',
  },
  {
    slug: 'ortodoncia-infantil',
    name: 'Ortodoncia infantil',
    short: 'Acompañamos su crecimiento con sonrisas sanas.',
    category: 'ortodoncia',
    seoTitle: 'Ortodoncia infantil en Temuco | Ortodoncia interceptiva',
    seoDescription:
      'Ortodoncia infantil e interceptiva en Temuco: paladar estrecho, respiración bucal, mordida cruzada. Primera evaluación recomendada a los 7 años. Agenda hoy.',
    h1: 'Ortodoncia infantil en Temuco',
    lead: 'Detectar a tiempo es tratar mejor: guiamos el crecimiento de los maxilares para una sonrisa sana de por vida.',
    image: infantil,
    imageAlt: 'Niña sonriendo en el sillón dental durante su control de ortodoncia',
    icon: 'child',
    intro: [
      'La ortodoncia infantil o interceptiva aprovecha la etapa de crecimiento para corregir problemas de los huesos maxilares y de hábitos antes de que se vuelvan más complejos.',
      'Condiciones como el paladar estrecho, la mordida cruzada, la respiración bucal o la succión del dedo pueden tratarse con aparatos simples y cómodos, muchas veces reduciendo la necesidad de tratamientos más largos en el futuro.',
    ],
    benefits: [
      { title: 'Diagnóstico precoz', text: 'Se recomienda una primera evaluación alrededor de los 7 años.' },
      { title: 'Aprovecha el crecimiento', text: 'Guiamos el desarrollo de los maxilares mientras aún crecen.' },
      { title: 'Tratamientos más simples', text: 'Intervenir a tiempo puede evitar tratamientos más largos después.' },
      { title: 'Atención amable', text: 'Un equipo cercano que hace de cada visita una buena experiencia.' },
    ],
    forWho: [
      'Niños que respiran por la boca o roncan',
      'Paladar estrecho o mordida cruzada',
      'Hábitos como succión del dedo o chupete prolongado',
      'Dientes que salen apiñados o fuera de lugar',
    ],
    steps: [
      { title: 'Evaluación', text: 'Revisamos crecimiento, mordida, respiración y hábitos.' },
      { title: 'Plan', text: 'Explicamos a la familia si conviene tratar ahora o controlar.' },
      { title: 'Tratamiento', text: 'Aparatos simples como expansores o placas según el caso.' },
      { title: 'Seguimiento', text: 'Controlamos el desarrollo hasta la dentición definitiva.' },
    ],
    faqs: [
      { q: '¿A qué edad debo llevar a mi hijo al ortodoncista?', a: 'Se recomienda una primera evaluación alrededor de los 7 años, cuando ya es posible detectar problemas de crecimiento y mordida.' },
      { q: '¿Qué es el paladar estrecho?', a: 'Es un maxilar superior más angosto de lo normal. Puede causar mordida cruzada, apiñamiento y relacionarse con respiración bucal. En niños se corrige con expansores.' },
      { q: '¿Por qué es importante que mi hijo respire por la nariz?', a: 'La respiración bucal habitual puede alterar el crecimiento facial y de los maxilares, además de afectar el descanso. Conviene evaluarla junto al ortodoncista y, si corresponde, con otros especialistas.' },
    ],
    specialistTag: 'ortodoncia',
  },
  {
    slug: 'implantes-dentales',
    name: 'Implantes dentales',
    short: 'Recupera piezas perdidas con seguridad.',
    category: 'especialidades',
    seoTitle: 'Implantes dentales en Temuco | Implantología',
    seoDescription:
      'Implantes dentales en Temuco con especialistas en implantología. Reemplaza dientes perdidos con resultados firmes, funcionales y estéticos. Agenda tu evaluación.',
    h1: 'Implantes dentales en Temuco',
    lead: 'Reemplaza dientes perdidos con una solución fija, estable y de aspecto natural.',
    image: sliderPaciente,
    imageAlt: 'Paciente sonriente junto a su dentista después de un tratamiento',
    icon: 'implant',
    intro: [
      'Un implante dental es una pequeña pieza de titanio que se instala en el hueso y reemplaza la raíz de un diente perdido. Sobre él se coloca una corona que devuelve la función y la estética.',
      'Gracias a la osteointegración, el implante se une firmemente al hueso, permitiendo masticar y sonreír con confianza.',
    ],
    benefits: [
      { title: 'Fijo y estable', text: 'No se mueve ni se retira, como un diente natural.' },
      { title: 'Protege el hueso', text: 'Ayuda a conservar el hueso donde falta la pieza.' },
      { title: 'No desgasta vecinos', text: 'No requiere tallar los dientes adyacentes.' },
      { title: 'Larga duración', text: 'Con buena higiene y controles puede durar muchos años.' },
    ],
    forWho: [
      'Pérdida de uno o varios dientes',
      'Personas con prótesis removibles incómodas',
      'Adultos con buen estado general de salud',
      'Pacientes que buscan una solución fija',
    ],
    steps: [
      { title: 'Evaluación', text: 'Examen clínico y estudio radiográfico del hueso.' },
      { title: 'Instalación', text: 'Colocación del implante con anestesia local.' },
      { title: 'Osteointegración', text: 'Periodo en que el implante se une al hueso.' },
      { title: 'Corona', text: 'Instalamos la corona definitiva sobre el implante.' },
    ],
    faqs: [
      { q: '¿Cuánto duran los implantes dentales?', a: 'Con buena higiene, controles periódicos y sin hábitos de riesgo como el tabaquismo, los implantes pueden durar muchos años. Mira nuestro video sobre este tema en la sección Videos.' },
      { q: '¿Qué es la periimplantitis?', a: 'Es una inflamación de los tejidos que rodean al implante, causada principalmente por acumulación de placa bacteriana. Se previene con buena higiene y controles.' },
      { q: '¿Duele ponerse un implante?', a: 'El procedimiento se realiza con anestesia local. Después puede haber molestias leves que se controlan con las indicaciones del especialista.' },
    ],
    specialistTag: 'implantes',
  },
  {
    slug: 'endodoncia',
    name: 'Endodoncia',
    short: 'Tratamiento de conducto para salvar tu diente.',
    category: 'especialidades',
    seoTitle: 'Endodoncia en Temuco | Tratamiento de conducto',
    seoDescription:
      'Endodoncia (tratamiento de conducto) en Temuco con especialista. Elimina el dolor y conserva tu diente natural. Agenda en Ortodoncia Para Todos.',
    h1: 'Endodoncia en Temuco',
    lead: 'Elimina el dolor y conserva tu diente natural con un tratamiento de conducto realizado por especialista.',
    image: boxClinica,
    imageAlt: 'Box de atención y sala de espera de Ortodoncia Para Todos en Temuco',
    icon: 'tooth',
    intro: [
      'La endodoncia, o tratamiento de conducto, se realiza cuando la pulpa del diente (su parte interna, con nervios y vasos) se inflama o se infecta, generalmente por caries profundas, fracturas o golpes.',
      'El especialista limpia, desinfecta y sella los conductos para eliminar la infección y conservar el diente, evitando su extracción.',
    ],
    benefits: [
      { title: 'Alivia el dolor', text: 'Elimina la causa del dolor dental intenso.' },
      { title: 'Conserva tu diente', text: 'Evita la extracción y mantiene tu pieza natural.' },
      { title: 'Con especialista', text: 'Realizada por un endodoncista con experiencia.' },
      { title: 'Procedimiento cómodo', text: 'Con anestesia local y técnicas actuales.' },
    ],
    forWho: [
      'Dolor dental intenso o que despierta en la noche',
      'Sensibilidad prolongada al frío o calor',
      'Caries profundas o dientes fracturados',
      'Golpes o traumatismos dentales',
    ],
    steps: [
      { title: 'Diagnóstico', text: 'Examen clínico y radiografía del diente.' },
      { title: 'Limpieza', text: 'Retiro de la pulpa afectada y desinfección de conductos.' },
      { title: 'Sellado', text: 'Relleno y sellado hermético de los conductos.' },
      { title: 'Restauración', text: 'Reconstrucción o corona para proteger el diente.' },
    ],
    faqs: [
      { q: '¿Por qué me duele el diente en la noche?', a: 'El dolor nocturno puede indicar una inflamación de la pulpa. Es importante consultar pronto para evaluar si se requiere endodoncia.' },
      { q: '¿La endodoncia duele?', a: 'Se realiza con anestesia local, por lo que el procedimiento es tolerable. Después puede existir sensibilidad leve por algunos días.' },
    ],
    specialistTag: 'endodoncia',
  },
  {
    slug: 'rehabilitacion-oral',
    name: 'Rehabilitación oral',
    short: 'Carillas, coronas y cerámica estética.',
    category: 'especialidades',
    seoTitle: 'Rehabilitación oral y carillas en Temuco',
    seoDescription:
      'Rehabilitación oral en Temuco: carillas cerámicas, coronas y restauraciones en cerámica de una sesión. Devuelve función y estética a tu sonrisa.',
    h1: 'Rehabilitación oral en Temuco',
    lead: 'Devolvemos función y estética a tu sonrisa con carillas, coronas y restauraciones cerámicas.',
    image: sliderSillon,
    imageAlt: 'Paciente sonriendo en el sillón dental durante su rehabilitación oral',
    icon: 'crown',
    intro: [
      'La rehabilitación oral recupera dientes dañados, desgastados o perdidos para que vuelvas a masticar, hablar y sonreír con normalidad.',
      'Trabajamos con carillas cerámicas, coronas, incrustaciones y restauraciones de cerámica que pueden fabricarse incluso en una sola sesión, planificando la estética con guías como el Plano de Barcelona.',
    ],
    benefits: [
      { title: 'Estética natural', text: 'Cerámicas que imitan color y translucidez del diente.' },
      { title: 'Función recuperada', text: 'Vuelve a masticar con comodidad y seguridad.' },
      { title: 'Planificación estética', text: 'Diseñamos tu sonrisa antes de tratar.' },
      { title: 'Tecnología actual', text: 'Cerámica de una sesión y materiales de alta calidad.' },
    ],
    forWho: [
      'Dientes desgastados, fracturados o manchados',
      'Restauraciones antiguas deterioradas',
      'Quienes desean mejorar forma y color',
      'Pacientes con piezas perdidas',
    ],
    steps: [
      { title: 'Evaluación', text: 'Analizamos función, estética y estado de cada pieza.' },
      { title: 'Diseño', text: 'Planificamos forma y color de tu sonrisa.' },
      { title: 'Preparación', text: 'Preparamos los dientes con técnicas conservadoras.' },
      { title: 'Cementación', text: 'Instalamos carillas o coronas definitivas.' },
    ],
    faqs: [
      { q: '¿Qué son las carillas cerámicas?', a: 'Son láminas delgadas de cerámica que se adhieren a la cara visible del diente para mejorar su forma, color o tamaño.' },
      { q: '¿Qué es la cerámica de una sesión?', a: 'Es una restauración cerámica diseñada y fabricada en la clínica, que permite resolver algunos casos en una sola cita.' },
    ],
    specialistTag: 'rehabilitacion',
  },
  {
    slug: 'odontologia-general',
    name: 'Odontología general',
    short: 'Prevención, limpiezas y tapaduras.',
    category: 'especialidades',
    seoTitle: 'Dentista en Temuco | Odontología general',
    seoDescription:
      'Dentista en el centro de Temuco: odontología general, limpiezas, tapaduras y prevención para toda la familia. Arancel único. Agenda en Ortodoncia Para Todos.',
    h1: 'Odontología general en Temuco',
    lead: 'La base de una sonrisa sana: prevención, diagnóstico y tratamientos para toda la familia.',
    image: ortodoncista,
    imageAlt: 'Dentista junto a paciente adolescente en la clínica',
    icon: 'shield',
    intro: [
      'La odontología general se encarga de prevenir, diagnosticar y tratar las enfermedades más comunes de la boca, como caries y gingivitis.',
      'Antes y durante un tratamiento de ortodoncia es fundamental mantener dientes y encías sanos. Por eso contamos con atención general en la misma clínica.',
    ],
    benefits: [
      { title: 'Prevención', text: 'Controles periódicos que evitan problemas mayores.' },
      { title: 'Limpiezas', text: 'Destartraje y profilaxis para encías sanas.' },
      { title: 'Restauraciones', text: 'Tapaduras estéticas del color del diente.' },
      { title: 'Todo en un lugar', text: 'Coordinación directa con tu ortodoncista.' },
    ],
    forWho: [
      'Controles preventivos para toda la familia',
      'Caries, sensibilidad o sangrado de encías',
      'Pacientes que inician ortodoncia',
      'Urgencias dentales',
    ],
    steps: [
      { title: 'Control', text: 'Examen completo de dientes y encías.' },
      { title: 'Diagnóstico', text: 'Radiografías si son necesarias.' },
      { title: 'Tratamiento', text: 'Limpiezas, restauraciones u otros procedimientos.' },
      { title: 'Prevención', text: 'Indicaciones de higiene y próximo control.' },
    ],
    faqs: [
      { q: '¿Cada cuánto debo ir al dentista?', a: 'Como regla general, se recomienda un control cada 6 meses, o con la frecuencia que indique tu dentista según tu riesgo.' },
      { q: '¿Por qué sangran mis encías?', a: 'La causa más frecuente es la gingivitis por acumulación de placa. Revisa nuestro artículo sobre el sangrado de encías en la sección Educación.' },
    ],
    specialistTag: 'general',
  },
];

export const getTreatment = (slug: string) => TREATMENTS.find((t) => t.slug === slug);
