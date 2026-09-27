import { useEffect, useState } from 'react';
import Logo from './Logo';
import './Navbar.css';

const links = [
  { href: '#proyecto', label: 'Proyecto' },
  { href: '#sistema', label: 'Sistema' },
  { href: '#app', label: 'App móvil' },
  { href: '#hardware', label: 'Hardware' },
  { href: '#roadmap', label: 'Roadmap' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <header className="nav">
      <div className="container nav__container">
        <a className="nav__brand" href="#inicio" onClick={closeMenu}>
          <span className="nav__mark">
            <Logo size={26} />
          </span>
          Hodēgeō
        </a>

        <button
          className="nav__toggle"
          type="button"
          aria-label="Abrir menú de navegación"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`nav__links ${open ? 'is-open' : ''}`}
          aria-label="Navegación principal"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
