import './System.css';

const steps = [
  { n: '01', title: 'El bastón senses', text: 'El ESP32 mide la distancia y la procesa en el borde, sin internet.' },
  { n: '02', title: 'Enlace Bluetooth', text: 'Los eventos viajan por BLE a la app, sin cables ni módulo GSM.' },
  { n: '03', title: 'La app responde', text: 'Usa el GPS del teléfono y envía la ubicación a los contactos.' },
];

export default function System() {
  return (
    <section className="section section--soft" id="sistema">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Cómo funciona</p>
          <h2 className="section__title">El teléfono hace de radio y GPS</h2>
          <p className="section__lead">
            Al delegar la geolocalización y la comunicación celular al teléfono,
            el bastón pesa menos y dura más sin perder funcionalidad.
          </p>
        </div>

        <ol className="system__steps">
          {steps.map((step) => (
            <li className="system__step" key={step.n}>
              <span className="system__num">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="system__note">
          El ESP32 no lleva módulo GPS (NEO-6M) ni GSM (SIM800L): esa decisión
          es la que prolonga la autonomía de la batería 18650.
        </p>
      </div>
    </section>
  );
}
