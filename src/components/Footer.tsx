import "./Footer.css";
import { Language, Share } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">AUDI PRECISION</p>
        <p className="site-footer__copyright">
          © 2026 AUDI AG. ALL RIGHTS RESERVED.
        </p>
      </div>
      <nav className="site-footer__links">
        <a className="site-footer__link" href="/">
          Privacy Policy
        </a>
        <a className="site-footer__link" href="/">
          Terms of Service
        </a>
        <a className="site-footer__link" href="/">
          Cookie Settings
        </a>
        <a className="site-footer__link" href="/">
          Carbon Neutrality
        </a>
      </nav>
      <div className="site-footer__social">
        <button
          type="button"
          className="site-footer__icon-btn"
          aria-label="Idioma"
        >
          <Language className="site-footer__icon" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="site-footer__icon-btn"
          aria-label="Compartilhar"
        >
          <Share className="site-footer__icon" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
