import './Roadmap.css';

const items = [
  {
    title: 'Código abierto',
    text: 'Libre acceso para que las comunidades técnicas puedan ensamblar y adaptar el bastón.',
    state: 'En curso',
  },
  {
    title: 'Del ultra-sónico a la visión',
    text: 'De la distancia pura a modelos ligeros de visión por computadora.',
    state: 'Próximo',
  },
  {
    title: 'TinyML en el ESP32-CAM',
    text: 'Reconocer pasos peatonales, semáforos y bordes de acera.',
    state: 'Exploración',
  },
];

export default function Roadmap() {
  return (
    <section className="section" id="roadmap">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Hoja de ruta</p>
          <h2 className="section__title">Hacia dónde va Hodēgeō</h2>
        </div>

        <ol className="road__list">
          {items.map((item, index) => (
            <li className="road__item" key={item.title}>
              <div className="road__meta">
                <span className="road__num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="road__state">{item.state}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
