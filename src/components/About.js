import './About.css';

const principles = [
  {
    title: 'No invasión auditiva',
    text: 'Prioriza la vía háptica en el agarre para respetar la audición ambiental, vital para orientarse.',
  },
  {
    title: 'Ergonomía y accesibilidad',
    text: 'Peso balanceado cerca de la mano y compatibilidad con TalkBack en Android y VoiceOver en iOS.',
  },
  {
    title: 'Bajo costo',
    text: 'Piezas estándar e impresión 3D reducen drásticamente el costo frente a alternativas comerciales.',
  },
];

export default function About() {
  return (
    <section className="section" id="proyecto">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">El proyecto</p>
          <h2 className="section__title">¿Qué es Hodēgeō?</h2>
          <p className="section__lead">
            Hodēgeō —del griego, "el que guía"— es un proyecto de tecnología
            asistencial para personas con discapacidad visual. Evolucionado
            desde Kinbaston, integra hardware accesible y procesamiento embebido
            para ofrecer navegación segura y autónoma.
          </p>
        </div>

        <ul className="about__list">
          {principles.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
