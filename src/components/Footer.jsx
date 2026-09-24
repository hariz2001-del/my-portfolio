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
            Systems thinking for useful digital work.
            <br />
            Kuala Lumpur, Malaysia.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <span>EXPLORE</span>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
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
