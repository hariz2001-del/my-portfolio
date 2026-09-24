import { Link } from "react-router-dom";
import { identity } from "../data/portfolio";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div>
          <Link to="/" className="footer-brand">
            HARIZ<span>·</span>HELMI
          </Link>
          <p>
            Business, engineering and technology in practice.
            <br />
            Kuala Lumpur, Malaysia.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <span>EXPLORE</span>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/cv">Detailed CV</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <span>CONNECT</span>
            <a href={identity.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href={`mailto:${identity.email}`}>Email ↗</a>
            <a href={identity.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
            <a href={identity.phoneHref}>Call ↗</a>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Hariz Helmi</span>
        <span>
          Built with clarity, curiosity and a little healthy skepticism.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
