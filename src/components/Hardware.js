import './Hardware.css';

const specs = [
  { name: 'ESP32', role: 'Captura visual y conectividad', spec: 'Cámara 2MP OV2640, 80–240 MHz' },
  { name: 'HC-SR04', role: 'Detección de distancia', spec: '2 cm – 400 cm, precisión ~3 mm' },
  { name: 'Drivers ERM / LRA', role: 'Vibración háptica', spec: 'PWM controlable, 3 V – 5 V' },
  { name: 'Chasis liviano', role: 'Estructura del bastón', spec: 'PVC o aluminio anodizado' },
  { name: 'Batería 18650', role: 'Energía continua', spec: '3.7 V 2600 mAh, ~6 horas' },
];

const inventory = [
  { name: 'Tubo de PVC rígido', role: 'Estructura' },
  { name: 'Buzzer', role: 'Alerta auditiva' },
  { name: 'Sensor HC-SR04', role: 'Sensado' },
  { name: 'Codo de PVC a 90°', role: 'Empuñadura' },
];

export default function Hardware() {
  return (
    <section className="section" id="hardware">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Hardware</p>
          <h2 className="section__title">Componentes y especificaciones</h2>
          <p className="section__lead">
            Piezas de grado industrial y consumo masivo, elegidas por
            confiabilidad y costo.
          </p>
        </div>

        <div className="table-scroll">
          <table className="hw__table">
            <caption className="sr-only">
              Componente, función principal y especificación
            </caption>
            <thead>
              <tr>
                <th scope="col">Componente</th>
                <th scope="col">Función</th>
                <th scope="col">Especificación</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((row) => (
                <tr key={row.name}>
                  <th scope="row">{row.name}</th>
                  <td>{row.role}</td>
                  <td>{row.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="hw__subtitle">Inventario disponible</h3>
        <ul className="hw__inventory">
          {inventory.map((item) => (
            <li key={item.name}>
              <span className="hw__name">{item.name}</span>
              <span className="hw__tag">{item.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
