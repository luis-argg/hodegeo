import './AppFeatures.css';

const blocks = [
  {
    title: 'Alerta S.O.S',
    text: 'Con 3 segundos de presión en el botón de pánico, la app envía un SMS con la ubicación y un enlace a Google Maps.',
  },
  {
    title: 'Batería y diagnóstico',
    text: 'Muestra el porcentaje de la 18650 y verifica que el sensor HC-SR04, el buzzer y el motor respondan.',
  },
  {
    title: 'Sensibilidad a medida',
    text: 'Define la distancia de aviso (50 cm en interiores, 1.5 m en exteriores) y elige entre vibración, buzzer o ambos.',
  },
];

const zones = [
  { id: 'verde', range: '> 1.5 m', label: 'Zona Verde', feedback: 'Monitoreo pasivo, sin alerta.' },
  { id: 'amarilla', range: '0.8 – 1.5 m', label: 'Zona Amarilla', feedback: 'Pulsación háptica suave.' },
  { id: 'roja', range: '< 0.8 m', label: 'Zona Roja', feedback: 'Vibración continua e intensificada.' },
];

export default function AppFeatures() {
  return (
    <section className="section" id="app">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">La app móvil</p>
          <h2 className="section__title">Núcleo de conectividad y gestión</h2>
          <p className="section__lead">
            Tres funciones concentran todo el control del bastón desde el
            teléfono.
          </p>
        </div>

        <ul className="appf__list">
          {blocks.map((block) => (
            <li key={block.title}>
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </li>
          ))}
        </ul>

        <h3 className="appf__subtitle">Alerta por niveles de distancia</h3>
        <ul className="appf__zones">
          {zones.map((zone) => (
            <li className={`appf__zone appf__zone--${zone.id}`} key={zone.label}>
              <span className="appf__zone-label">{zone.label}</span>
              <span className="appf__zone-range">{zone.range}</span>
              <p>{zone.feedback}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
