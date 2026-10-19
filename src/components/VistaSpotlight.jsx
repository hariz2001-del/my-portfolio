import { vista } from "../data/portfolio";

function VistaSpotlight() {
  return (
    <section className="vista-spotlight" aria-labelledby="vista-title">
      <div className="wrap vista-layout">
        <div className="vista-copy">
          <p className="vista-kicker">
            <span className="vista-kicker-line" /> 01 / FLAGSHIP PROJECT
          </p>
          <div className="vista-logo-row">
            <img
              className="vista-logo"
              src="/vista/vista-pos-icon.webp"
              alt=""
              width="64"
              height="64"
            />
            <h2 id="vista-title">{vista.name}</h2>
            <span className="vista-live">
              <span /> Live · in use at Sarang
            </span>
          </div>
          <p className="vista-tagline">{vista.tagline}</p>
          <p className="vista-intro">{vista.intro}</p>

          <div className="vista-actions">
            <a
              className="button vista-button"
              href={vista.site.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {vista.site.label} <span aria-hidden="true">↗</span>
            </a>
            {vista.demos.map((demo) => (
              <a
                key={demo.href}
                className="vista-demo-link"
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>
                  {demo.label} <span aria-hidden="true">↗</span>
                </strong>
                <small>{demo.note}</small>
              </a>
            ))}
          </div>
          <a
            className="vista-video-link"
            href={vista.video.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ {vista.video.label} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="vista-screens">
          {vista.screens.map((screen, index) => (
            <figure
              key={screen.src}
              className={index === 0 ? "vista-screen vista-screen-main" : "vista-screen vista-screen-side"}
            >
              <div className="vista-screen-bar" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <img src={screen.src} alt={screen.alt} />
              <figcaption>{screen.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="wrap vista-apps">
        {vista.apps.map((app) => (
          <a
            key={app.key}
            className="vista-app"
            href={app.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={app.icon} alt="" width="56" height="56" loading="lazy" />
            <div>
              <span className="vista-app-role">{app.role}</span>
              <h3>
                Vista {app.name} <span aria-hidden="true">↗</span>
              </h3>
              <p>{app.text}</p>
              <small>{app.domain}</small>
            </div>
          </a>
        ))}
      </div>

      <div className="wrap vista-facts" aria-label="Vista at a glance">
        {vista.facts.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VistaSpotlight;
