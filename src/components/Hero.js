import './Hero.css';

const stats = [
  { value: '~6 h', label: 'Autonomía con una batería 18650' },
  { value: '2 cm – 4 m', label: 'Rango del sensor HC-SR04' },
  { value: 'BLE', label: 'Enlace con el bastón, sin cables' },
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__body">
          <p className="eyebrow">Bastón inteligente · App móvil</p>
          <h1 className="hero__title">
            Hodēgeō, <span className="hero__claim">el que guía</span>
          </h1>
          <p className="hero__lead">
            Bastón inteligente que alerta sobre obstáculos, calcula distancias
            y orienta mediante señales hápticas y auditivas.
          </p>

          <div className="hero__actions">
            <a className="btn" href="#proyecto">
              Conocer el proyecto
            </a>
            <a className="btn btn--ghost" href="#app">
              Ver la app móvil
            </a>
          </div>

          <dl className="hero__stats">
            {stats.map((stat) => (
              <div className="hero__stat" key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__media">
          {/* Espacio reservado para la imagen del bastón.
              Cuando la tengas, reemplaza este bloque por:
              <img src="ruta/a/imagen.jpg" alt="Bastón inteligente Hodēgeō" /> */}
          <span className="hero__media-hint">
            Espacio para la imagen del bastón
          </span>
        </div>
      </div>
    </section>
  );
}
