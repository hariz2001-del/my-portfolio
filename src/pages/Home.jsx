import { Link } from "react-router-dom";
import { projects, skillGroups } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <>
      <section className="hero-section wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> HARIZ HELMI · KUALA LUMPUR
          </p>
          <h1 id="hero-title">
            Business. Engineering. <em>Technology.</em>
          </h1>
          <p className="hero-description">
            I bring operating judgment, engineering discipline and technical
            curiosity to useful digital work. I co-own an F&B business, shape
            products around real workflows, and study cloud and DevOps while
            delivering AI-assisted web projects.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/cv">
              Read my CV <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" to="/projects">
              Explore projects <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="hero-footnote">
            <span className="pulse-dot" /> Studying Cloud & DevOps Engineering
            alongside hands-on product work
          </p>
        </div>
        <div
          className="hero-art"
          role="img"
          aria-label="A diagram of Hariz's business, engineering, product and cloud experience"
        >
          <div className="art-topline">
            <span>WORK / 001</span>
            <span>FOUR CONNECTED LENSES</span>
          </div>
          <div className="art-heading">
            Different lenses.
            <br />
            One way of working.
          </div>
          <div className="flow-stack">
            <div className="flow-row">
              <span className="flow-number">01</span>
              <div>
                <strong>Business operations</strong>
                <small>Customers, staff, costs and decisions.</small>
              </div>
              <span className="flow-glyph">↘</span>
            </div>
            <div className="flow-row">
              <span className="flow-number">02</span>
              <div>
                <strong>Engineering discipline</strong>
                <small>Analysis, constraints and documentation.</small>
              </div>
              <span className="flow-glyph">↘</span>
            </div>
            <div className="flow-row">
              <span className="flow-number">03</span>
              <div>
                <strong>Digital products</strong>
                <small>Requirements, delivery and validation.</small>
              </div>
              <span className="flow-glyph">↘</span>
            </div>
            <div className="flow-row flow-final">
              <span className="flow-number">04</span>
              <div>
                <strong>Cloud practice</strong>
                <small>Containers, Linux and deployment paths.</small>
              </div>
              <span className="flow-glyph">✓</span>
            </div>
          </div>
          <div className="art-stamp">
            CONNECTING DISCIPLINES <span>✳</span>
          </div>
        </div>
      </section>

      <div className="proof-band" aria-label="Selected evidence">
        <div className="wrap proof-grid">
          <div>
            <strong>2025</strong>
            <span>B.Eng. (Hons), Civil Engineering</span>
          </div>
          <div>
            <strong>2026</strong>
            <span>Co-owner, Sarang F&B kiosk</span>
          </div>
          <div>
            <strong>09</strong>
            <span>Documented engineering, product & cloud case studies</span>
          </div>
          <div>
            <strong>05</strong>
            <span>Part-time staff trained on SOPs</span>
          </div>
        </div>
      </div>

      <section
        className="section wrap home-cv-section"
        aria-labelledby="career-title"
      >
        <div className="section-intro">
          <div>
            <p className="eyebrow">01 / CAREER AT A GLANCE</p>
            <h2 id="career-title">
              Experience that spans
              <br />
              <em>worksites and workflows.</em>
            </h2>
          </div>
          <div className="section-intro-side">
            <p>
              My CV brings together operating a business, technical engineering
              work and the digital systems built from those experiences.
            </p>
            <Link className="text-link" to="/cv">
              Full professional profile <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="home-cv-grid">
          <article>
            <span>2026 — PRESENT</span>
            <h3>Business operations</h3>
            <p>
              Co-own Sarang’s kiosk, train five staff and turn live F&B
              scenarios into requirements for internal tools.
            </p>
          </article>
          <article>
            <span>2025 — 2026</span>
            <h3>Structural engineering</h3>
            <p>
              Worked on structural analysis and drawings, coordinated technical
              follow-up, and supported client, site and authority-facing work.
            </p>
          </article>
          <article>
            <span>2026 — PRESENT</span>
            <h3>Digital & cloud practice</h3>
            <p>
              Deliver AI-assisted web projects; practise Docker, Compose,
              Linux, EC2, Nginx, DNS and CI/CD through DevOps coursework.
            </p>
          </article>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="work-title">
        <div className="section-intro">
          <div>
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2 id="work-title">
              Work with a reason
              <br />
              <em>behind the decisions.</em>
            </h2>
          </div>
          <div className="section-intro-side">
            <p>
              Not just a list of frameworks. The work starts with a user,
              a technical constraint, or a problem worth clarifying.
            </p>
            <Link className="text-link" to="/projects">
              All projects <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="featured-grid">
          {["Vista", "Telco & structural design work", "Tourism Geography Tutor"]
            .map((name) => projects.find((project) => project.name === name))
            .map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
        </div>
      </section>

      <section className="approach-section" aria-labelledby="approach-title">
        <div className="wrap approach-layout">
          <div className="approach-heading">
            <p className="eyebrow">03 / HOW I ADD VALUE</p>
            <h2 id="approach-title">
              Technical enough to deliver.
              <br />
              <em>Close enough to the work to get it right.</em>
            </h2>
            <p>
              My strongest contribution is connecting people, processes and
              software—then testing whether the result holds up in real use.
            </p>
          </div>
          <div className="approach-list">
            <div>
              <span>01</span>
              <h3>Translate the messy bit</h3>
              <p>
                Turn spoken needs, source documents and day-to-day routines into
                clear workflows and business rules.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Make thoughtful trade-offs</h3>
              <p>
                Question complexity, protect data integrity and keep the product
                aligned with how people actually operate.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Follow it through</h3>
              <p>
                Review AI-assisted implementations, check edge cases,
                troubleshoot integrations and verify deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="skills-title">
        <div className="section-intro">
          <div>
            <p className="eyebrow">04 / CAPABILITIES</p>
            <h2 id="skills-title">
              A practical, <em>cross-disciplinary</em> toolkit.
            </h2>
          </div>
          <p className="section-intro-side">
            From staff operations and stakeholder requirements to product
            review, web delivery and cloud practice—each skill is tied to its
            real context.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-panel" key={group.label}>
              <span className="skill-index">0{index + 1} /</span>
              <h3>{group.label}</h3>
              <p>{group.text}</p>
              <div className="tag-list">
                {group.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="skills-note">
          Kubernetes is an upcoming course module, not claimed as production
          experience.
        </p>
        <Link className="text-link skills-more-link" to="/skills">Explore the full skills inventory <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="cta-section">
        <div className="wrap cta-layout">
          <div>
            <p className="eyebrow">05 / NEXT CONVERSATION</p>
            <h2>
              Have a problem worth
              <br />
              <em>untangling?</em>
            </h2>
          </div>
          <div>
            <p>
              I’m interested in teams that value clear requirements, sound
              technical judgment and dependable follow-through.
            </p>
            <Link className="button button-light" to="/contact">
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
