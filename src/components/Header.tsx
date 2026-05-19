import './Header.css'
import { useState, type MouseEvent } from 'react'

type NavId = 'inicio' | 'sobre' | 'contato'

function Header() {
  const [activeLink, setActiveLink] = useState<NavId>('inicio')

  const linkClass = (id: NavId) =>
    `site-header__link${activeLink === id ? ' site-header__link--active' : ''}`

  const handleNavClick = (id: NavId) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setActiveLink(id)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="/" className="site-header__brand">
          Audi Precision
        </a>
        <nav className="site-header__nav" aria-label="Principal">
          <ul>
            <li>
              <a
                href="#inicio"
                className={linkClass('inicio')}
                aria-current={activeLink === 'inicio' ? 'page' : undefined}
                onClick={handleNavClick('inicio')}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className={linkClass('sobre')}
                aria-current={activeLink === 'sobre' ? 'page' : undefined}
                onClick={handleNavClick('sobre')}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className={linkClass('contato')}
                aria-current={activeLink === 'contato' ? 'page' : undefined}
                onClick={handleNavClick('contato')}
              >
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
