import { Link } from "react-router-dom";

const experience = [
  {
    period: "APR 2026 — PRESENT",
    role: "Co-operator · Operations & Digital Product",
    place: "Sarang, UKM Bangi",
    detail:
      "Run part of a live F&B kiosk: product and supply decisions, customer service and SOP training for five part-time staff. That direct operating experience shapes the requirements for Vista and other F&B software.",
  },
  {
    period: "OCT 2025 — MAY 2026",
    role: "Telco Pole & Structural Design Engineer",
    place: "Oversea Deco & Industrial Sdn Bhd",
    detail:
      "Prepared structural analyses and technical drawings, followed up design questions and balanced requirements with practical project constraints.",
  },
  {
    period: "APR — OCT 2025",
    role: "Junior Engineer",
    place: "Perunding ZAB Sdn Bhd",
    detail:
      "Supported reinforced-concrete, steel and foundation work, authority submissions and coordination with project stakeholders.",
  },
];

function About() {
  return (
    <>
      <section className="page-hero wrap">
        <p className="eyebrow">ABOUT / HARIZ HELMI</p>
        <h1>
          Curiosity with
          <br />
          <em>an operator’s eye.</em>
        </h1>
        <p>
          I’m a civil engineering graduate and F&B co-operator moving into
          technical product and cloud work. My through-line is making
          complicated systems understandable, testable and useful.
        </p>
      </section>
      <section className="about-story section wrap">
        <div>
          <p className="eyebrow">01 / THE BRIDGE</p>
          <h2>Where technical thinking meets daily reality.</h2>
        </div>
        <div className="story-copy">
          <p>
            At Sarang, I see the little exceptions a product brief can miss: a
            cancelled order after payment, a shared expense, a cashier working
            through a busy shift. In engineering, I learned to document
            assumptions, check constraints and coordinate decisions that affect
            other people.
          </p>
          <p>
            Now I bring both perspectives into AI-assisted product delivery. I
            like mapping the workflow, making the business rules explicit,
            checking what the implementation actually does and staying involved
            through deployment.
          </p>
          <div className="story-pill-row">
            <span>Requirements</span>
            <span>Operational judgment</span>
            <span>Quality checks</span>
            <span>Technical follow-through</span>
          </div>
        </div>
      </section>
      <section className="timeline-section">
        <div className="wrap">
          <div className="section-intro">
            <div>
              <p className="eyebrow">02 / EXPERIENCE</p>
              <h2>
                Different settings.
                <br />
                <em>Transferable discipline.</em>
              </h2>
            </div>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <span className="timeline-period">{item.period}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap education-section">
        <div>
          <p className="eyebrow">03 / EDUCATION & PRACTICE</p>
          <h2>Learning in layers.</h2>
        </div>
        <div className="education-list">
          <article>
            <span>2026 · IN PROGRESS</span>
            <h3>Cloud & DevOps Engineering</h3>
            <p>
              Lejiend Education · Docker, Compose, Linux, EC2, networking and
              deployment practice; CI/CD coursework. Kubernetes is scheduled as
              an upcoming module.
            </p>
          </article>
          <article>
            <span>2020 — 2025</span>
            <h3>B.Eng. (Hons), Civil Engineering</h3>
            <p>
              Universiti Kebangsaan Malaysia · Structural problem-solving,
              technical documentation and a thesis comparing FEM and LEM
              slope-stability modelling.
            </p>
          </article>
          <article>
            <span>2026</span>
            <h3>Python for Everyone</h3>
            <p>KSWAMY Global Academy · Introductory Python certificate.</p>
          </article>
        </div>
      </section>
      <section className="about-bottom wrap">
        <p>Interested in the work behind the work?</p>
        <Link className="button button-dark" to="/projects">
          See the projects <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

export default About;
