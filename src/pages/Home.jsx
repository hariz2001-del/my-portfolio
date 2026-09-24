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
            I turn real-world complexity into <em>usable systems.</em>
          </h1>
          <p className="hero-description">
            Product-minded systems analysis, AI-assisted web delivery and
            growing cloud/DevOps practice—grounded in hands-on business
            operations and an engineering background.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/projects">
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" to="/about">
              How I work <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="hero-footnote">
            <span className="pulse-dot" /> Open to product, implementation and
            junior cloud opportunities
          </p>
        </div>
        <div
          className="hero-art"
          role="img"
          aria-label="A diagram showing how field observations become verified product workflows"
        >
          <div className="art-topline">
            <span>FIELD NOTES / 001</span>
            <span>PRODUCT THINKING</span>
          </div>
          <div className="art-heading">
            From the floor
            <br />
            to the flow.
          </div>
          <div className="flow-stack">
            <div className="flow-row">
              <span className="flow-number">01</span>
              <div>
                <strong>Observe the work</strong>
                <small>What actually happens at the counter?</small>
              </div>
              <span className="flow-glyph">↘</span>
            </div>
            <div className="flow-row">
              <span className="flow-number">02</span>
              <div>
                <strong>Define the rules</strong>
                <small>Orders, roles, exceptions, accountability.</small>
              </div>
              <span className="flow-glyph">↘</span>
            </div>
            <div className="flow-row">
              <span className="flow-number">03</span>
              <div>
                <strong>Shape the product</strong>
                <small>Useful flows before extra features.</small>
              </div>
              <span className="flow-glyph">↘</span>
            </div>
            <div className="flow-row flow-final">
              <span className="flow-number">04</span>
              <div>
                <strong>Verify in context</strong>
                <small>Test the edges, then watch it work.</small>
              </div>
              <span className="flow-glyph">✓</span>
            </div>
          </div>
          <div className="art-stamp">
            SYSTEMS THAT FIT REAL LIFE <span>✳</span>
          </div>
        </div>
      </section>

      <div className="proof-band" aria-label="Selected evidence">
        <div className="wrap proof-grid">
          <div>
            <strong>07</strong>
            <span>Projects across products, web & cloud</span>
          </div>
          <div>
            <strong>05</strong>
            <span>Part-time staff trained on SOPs</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Database services in Docker Compose practice</span>
          </div>
          <div>
            <strong>01</strong>
            <span>Common thread: solving the right problem</span>
          </div>
        </div>
      </div>

      <section className="section wrap" aria-labelledby="work-title">
        <div className="section-intro">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2 id="work-title">
              Work with a reason
              <br />
              <em>behind the build.</em>
            </h2>
          </div>
          <div className="section-intro-side">
            <p>
              Not just a list of frameworks. Each project started with a user,
              an operating constraint, or a messy problem worth clarifying.
            </p>
            <Link className="text-link" to="/projects">
              All projects <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="featured-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      <section className="approach-section" aria-labelledby="approach-title">
        <div className="wrap approach-layout">
          <div className="approach-heading">
            <p className="eyebrow">02 / HOW I ADD VALUE</p>
            <h2 id="approach-title">
              Technical enough to build.
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
            <p className="eyebrow">03 / CAPABILITIES</p>
            <h2 id="skills-title">
              A practical, <em>cross-disciplinary</em> toolkit.
            </h2>
          </div>
          <p className="section-intro-side">
            I use AI-assisted development transparently. The value I own is the
            problem framing, decisions, validation and delivery around the code.
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
      </section>

      <section className="cta-section">
        <div className="wrap cta-layout">
          <div>
            <p className="eyebrow">04 / NEXT CONVERSATION</p>
            <h2>
              Have a problem worth
              <br />
              <em>untangling?</em>
            </h2>
          </div>
          <div>
            <p>
              I’m interested in roles where product judgment, technical
              curiosity and dependable follow-through matter.
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
