import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
];

function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="wrap nav-inner">
        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="Hariz Helmi, home"
        >
          <span className="brand-mark">
            H<span>.</span>
          </span>
          <span className="brand-name">
            HARIZ HELMI<small>WEB / SYSTEMS / CLOUD</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <nav
          id="primary-navigation"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a className="nav-cta" href="mailto:harizhelmiwork@gmail.com">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
      <div className="route-rule" key={location.pathname} />
    </header>
  );
}

export default Navigation;
