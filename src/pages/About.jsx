import { Link } from "react-router-dom";
import { identity } from "../data/portfolio";

const experience = [
  {
    period: "APR 2026 — PRESENT",
    role: "Co-operator, Operations & Digital Product Contributor",
    place: "Sarang · UKM Bangi",
    points: [
      "Co-run an F&B kiosk; manage bites products, restocking, customer service and day-to-day sales and cost decisions.",
      "Train five part-time staff on operating procedures and support customer engagement as a TikTok Live host.",
      "Use first-hand ordering, payment and shift scenarios to define and validate requirements for the Vista POS and management system.",
    ],
  },
  {
    period: "OCT 2025 — MAY 2026",
    role: "Telco Pole & Structural Design Engineer",
    place: "Oversea Deco & Industrial Sdn Bhd",
    points: [
      "Prepared structural analyses and technical drawings using STAAD.Pro/OpenTower and AutoCAD.",
      "Coordinated design follow-up, checked project constraints and documented technical decisions for implementation.",
      "Developed a disciplined approach to requirements, trade-offs and clear handoffs across stakeholders.",
    ],
  },
  {
    period: "APR — OCT 2025",
    role: "Junior Engineer",
    place: "Perunding ZAB Sdn Bhd",
    points: [
      "Supported reinforced-concrete, steel and foundation design work and related technical documentation.",
      "Assisted with authority submissions, issue follow-up and coordination with project stakeholders.",
    ],
  },
];

const capabilities = [
  {
    title: "Systems & business analysis",
    context: "Directly applied in product and F&B work",
    items: [
      "Requirements and workflow mapping",
      "User roles and business rules",
      "Operational trade-offs",
      "Stakeholder communication",
    ],
  },
  {
    title: "Quality & technical support",
    context: "Applied during delivery and review",
    items: [
      "Order/payment-state edge cases",
      "Data reconciliation",
      "Source-content checks",
      "API and deployment troubleshooting",
    ],
  },
  {
    title: "Web product technologies",
    context: "Used in AI-assisted projects",
    items: [
      "React, Next.js, TypeScript",
      "Supabase, PostgreSQL, Prisma",
      "Fastify, REST APIs",
      "Vitest, Playwright, DeepSeek API",
    ],
  },
  {
    title: "Cloud & DevOps practice",
    context: "Hands-on learning and test deployments",
    items: [
      "Docker and Docker Compose",
      "AWS EC2, Ubuntu and SSH",
      "Nginx, HTTPS and Cloudflare DNS",
      "Git/GitHub and environment configuration",
    ],
  },
];

const education = [
  {
    period: "2026 · IN PROGRESS",
    title: "Cloud & DevOps Engineering Programme",
    place: "Lejiend Education",
    detail:
      "Hands-on Dockerfiles, Docker Compose, Linux/Ubuntu, EC2 deployment fundamentals, SSH, Nginx, DNS, HTTPS, container networking and databases. GitHub Actions CI/CD covered in coursework; Kubernetes is an upcoming module.",
  },
  {
    period: "OCT 2020 — FEB 2025",
    title: "Bachelor of Engineering (Hons), Civil Engineering",
    place: "Universiti Kebangsaan Malaysia · CGPA 3.29",
    detail:
      "Thesis: comparison of Finite Element and Limit Equilibrium methods in slope-stability modelling.",
  },
  {
    period: "JUN 2019 — MAY 2020",
    title: "Foundation in Engineering",
    place: "Universiti Teknologi MARA · CGPA 3.45 · MUET Band 5",
    detail:
      "Foundation in technical analysis, quantitative problem-solving and communication.",
  },
  {
    period: "2026",
    title: "Python for Everyone",
    place: "KSWAMY Global Academy · Certificate",
    detail: "Introductory Python coursework.",
  },
];

function About() {
  return (
    <>
      <section className="page-hero wrap cv-hero">
        <p className="eyebrow">PROFESSIONAL PROFILE / HARIZ HELMI</p>
        <h1>
          More than a title.
          <br />
          <em>Here is the work.</em>
        </h1>
        <p>
          A detailed view of my experience, technical practice and the decisions
          I have made across business operations, engineering and AI-assisted
          digital products.
        </p>
      </section>

      <section
        className="section wrap cv-summary"
        aria-labelledby="cv-summary-title"
      >
        <div>
          <p className="eyebrow">01 / PROFESSIONAL SUMMARY</p>
          <h2 id="cv-summary-title">
            A practical bridge between operations and technology.
          </h2>
        </div>
        <div className="cv-summary-copy">
          <p>
            I am a civil engineering graduate and F&B co-operator who turns
            day-to-day operating problems into clear requirements, business
            rules and testable workflows. I use AI-assisted development to help
            deliver web products, then review the result against real use cases
            and follow it through testing, deployment and support.
          </p>
          <p>
            My strongest evidence is in systems thinking, product decisions,
            operational judgment and dependable follow-through. I am also
            studying Cloud & DevOps Engineering, with hands-on practice in
            Docker, Linux, AWS EC2 and web deployment.
          </p>
          <div className="cv-fact-grid">
            <div>
              <span>BASED IN</span>
              <strong>{identity.location}</strong>
            </div>
            <div>
              <span>LANGUAGES</span>
              <strong>Bahasa Malaysia · English</strong>
            </div>
            <div>
              <span>WORK PREFERENCE</span>
              <strong>Full-time or part-time · remote/hybrid preferred</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section" aria-labelledby="experience-title">
        <div className="wrap">
          <div className="section-intro">
            <div>
              <p className="eyebrow">02 / WORK EXPERIENCE</p>
              <h2 id="experience-title">
                The experience
                <br />
                <em>behind the projects.</em>
              </h2>
            </div>
            <p className="section-intro-side">
              Customer-facing operations, formal engineering work and digital
              product delivery inform how I approach a problem.
            </p>
          </div>
          <div className="timeline cv-timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <span className="timeline-period">{item.period}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <ul className="cv-bullets">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="cv-skills-title">
        <div className="section-intro">
          <div>
            <p className="eyebrow">03 / SKILLS & TOOLS</p>
            <h2 id="cv-skills-title">
              What I can
              <br />
              <em>bring to the work.</em>
            </h2>
          </div>
          <p className="section-intro-side">
            Grouped by how I use them, not presented as equal levels of
            independent expertise.
          </p>
        </div>
        <div className="cv-capabilities">
          {capabilities.map((group) => (
            <article className="cv-capability" key={group.title}>
              <p>{group.context}</p>
              <h3>{group.title}</h3>
              <ul className="cv-bullets">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="cv-integrity-note">
          <strong>How I use AI in development</strong>
          <p>
            AI helps with implementation. I take responsibility for defining the
            problem, deciding what the product should do, reviewing the work,
            investigating failures and checking it against users’ needs. I do
            not present every framework used in a project as deep independent
            expertise.
          </p>
        </div>
      </section>

      <section
        className="cv-education-section"
        aria-labelledby="education-title"
      >
        <div className="wrap cv-education-layout">
          <div>
            <p className="eyebrow">04 / EDUCATION & DEVELOPMENT</p>
            <h2 id="education-title">
              Formal training.
              <br />
              <em>Ongoing practice.</em>
            </h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.title}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p className="education-place">{item.place}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap cv-endnote">
        <div>
          <p className="eyebrow">05 / PROJECT EVIDENCE</p>
          <h2>See the decisions in context.</h2>
          <p>
            The project case studies show my part in each build, its technical
            stack, and whether it is live, a preview, in development or on hold.
          </p>
        </div>
        <Link className="button button-dark" to="/projects">
          Read project case studies <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

export default About;
