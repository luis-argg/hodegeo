import Logo from './Logo';
import './Footer.css';

const creators = ['Jorge Alvarez', 'Luis Argueta', 'Brayan Campa', 'Cristian Perez'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__brand">
          <span className="footer__mark">
            <Logo size={22} />
          </span>
          <span>
            Hodēgeō
            <small>el que guía</small>
          </span>
        </div>

        <div className="footer__team">
          <h2 className="footer__label">Creadores del proyecto</h2>
          <ul className="footer__names">
            {creators.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>

        <small className="footer__copy">
          © {new Date().getFullYear()} Hodēgeō · Proyecto abierto de tecnología
          asistencial
        </small>
      </div>
    </footer>
  );
}
