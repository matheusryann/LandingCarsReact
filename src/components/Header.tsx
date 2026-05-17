import './Header.css'
import { useState } from 'react';


type NavId = 'inicio' | 'sobre' | 'contato';

function Header() {

  const [activeLink, setActiveLink] = useState<NavId>('inicio');

  const linkClass = (id: NavId) =>
    `site-header__link${activeLink === id ? ' site-header__link--active' : ''}`;

  function handleNavClick(id: NavId, e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setActiveLink(id);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="/" className="site-header__brand">
          Landing Cars
        </a>
        <nav className="site-header__nav" aria-label="Principal">
          <ul>
            <li>
              <a
                href="#"
                className={linkClass('inicio')}
                onClick={(e) => handleNavClick('inicio', e)}
                aria-current={activeLink === 'inicio' ? 'page' : undefined}
        
              >
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className={linkClass('sobre')} onClick={(e) => handleNavClick('sobre', e)} aria-current={activeLink === 'sobre' ? 'page' : undefined}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className={linkClass('contato')} onClick={(e) => handleNavClick('contato', e)} aria-current={activeLink === 'contato' ? 'page' : undefined}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <a href="#" className="site-header__cta">
          Build your A6
        </a>
      </div>
    </header>
  )
}

export default Header
