import { Link } from "react-router-dom";
import { identity } from "../data/portfolio";

const experience = [
  {
    period: "APR 2026 — PRESENT",
    role: "Co-owner, Operations & Digital Product Contributor",
    place: "Sarang · UKM Bangi",
    points: [
      "Translate real ordering, payment, shift and expense-split scenarios into requirements and test cases for Vista.",
      "Co-own kiosk operations and train five part-time staff; use that experience to keep cashier flows and owner reporting practical.",
    ],
  },
  {
    period: "OCT 2025 — MAY 2026",
    role: "Telco Pole & Structural Design Engineer",
    place: "Oversea Deco & Industrial Sdn Bhd",
    points: [
      "Analysed telco structures using STAAD.Pro, MS Tower and OpenTower; prepared GA and fabrication drawings in AutoCAD.",
      "Supported site and as-built checks, design comments and technical handoffs with project stakeholders.",
    ],
  },
  {
    period: "APR — OCT 2025",
    role: "Junior Engineer",
    place: "Perunding ZAB Sdn Bhd",
    points: [
      "Supported RC, steel, foundation and infrastructure design documentation, including pile-capacity work.",
      "Assisted authority submissions and coordinated design queries with clients, architects and site stakeholders.",
    ],
  },
];

const capabilities = [
  {
    title: "Web product technologies",
    context: "Used in AI-assisted projects",
    items: [
      "HTML/CSS, JavaScript and responsive UI",
      "React, Next.js, TypeScript",
      "Supabase, PostgreSQL, Prisma",
      "Fastify, REST APIs",
      "DeepSeek API and WordPress planning",
    ],
  },
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
    title: "Cloud & DevOps practice",
    context: "Hands-on learning and test deployments",
    items: [
      "Docker and Docker Compose",
      "AWS EC2, Ubuntu and SSH",
      "Nginx, HTTPS and Cloudflare DNS",
      "Git/GitHub and environment configuration",
      "GitHub Actions and Docker Hub workflows",
    ],
  },
  {
    title: "Quality & technical support",
    context: "Applied during delivery and review",
    items: [
      "Vitest, Playwright and build checks",
      "Order/payment-state edge cases",
      "Data reconciliation and source checks",
      "API and deployment troubleshooting",
    ],
  },
  {
    title: "Business & engineering context",
    context: "Direct professional and co-owner work",
    items: [
      "Customer and staff workflows",
      "Client and authority coordination",
      "Structural analysis and technical drawings",
      "Documented decisions and handoffs",
    ],
  },
];

const devopsPillars = [
  {
    label: "01 / CLOUD & EDGE",
    title: "Make the service reachable",
    copy: "In guided deployment work, I provisioned Ubuntu on AWS EC2, configured Security Groups and Elastic IP, connected with SSH, and routed domains with Cloudflare DNS.",
    points: ["EC2, inbound rules and static IPs", "A/CNAME records, nameservers and TTL", "Cloudflare Pages and custom domains"],
  },
  {
    label: "02 / LINUX OPERATIONS",
    title: "Understand the host",
    copy: "I used apt, file ownership and service directories, checked ports and resource usage, and managed a Node process with systemd rather than leaving it attached to a terminal.",
    points: ["SSH keys, scp and permissions", "systemctl and journal logs", "Process, memory, disk and port checks"],
  },
  {
    label: "03 / CONTAINERS",
    title: "Package and run applications",
    copy: "I built a Node 20 Alpine Docker image for an Express API, mapped container ports, and worked through the difference between build-time success and runtime behaviour.",
    points: ["Dockerfiles and image builds", "Container lifecycle and logs", "Host/container networking"],
  },
  {
    label: "04 / DATA SERVICES",
    title: "Persist and connect data",
    copy: "I configured MySQL, PostgreSQL and MongoDB with Docker Compose, environment-based credentials, ports and persistent volumes, then checked access with database clients.",
    points: ["Compose services and named volumes", "DBeaver and MongoDB Compass", "Database connection diagnostics"],
  },
  {
    label: "05 / WEB DELIVERY",
    title: "Route traffic and secure it",
    copy: "I configured Nginx virtual hosts and reverse proxying to a local API, tested configuration, and practised HTTPS setup with Let's Encrypt Certbot.",
    points: ["Nginx and proxy_pass", "DNS-to-origin routing", "TLS certificates and reachability checks"],
  },
  {
    label: "06 / VERSIONING & CI/CD",
    title: "Follow a release through",
    copy: "I use Git branches and pull requests. Coursework covered GitHub Actions build/test gates, artifacts, repository Secrets and Variables, Docker Hub images and SSH-based EC2 deployment.",
    points: ["Git and PR workflow", "Build, test and artifact handoff", "Image publishing and deployment patterns"],
  },
];

const education = [
  {
    period: "2026 · IN PROGRESS",
    title: "Cloud & DevOps Engineering Programme",
    place: "Lejiend Education",
    detail:
      "Hands-on Dockerfiles, Docker Compose, Ubuntu, EC2 deployment, SSH, Nginx, DNS, HTTPS, container networking and databases. GitHub Actions CI/CD in coursework; Kubernetes and Terraform are course-pathway topics, not production claims.",
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
          A closer look at the web products, data workflows and cloud practice
          behind my projects, with the professional experience that informs them.
        </p>
      </section>

      <section
        className="section wrap cv-summary"
        aria-labelledby="cv-summary-title"
      >
        <div>
          <p className="eyebrow">01 / PROFESSIONAL SUMMARY</p>
          <h2 id="cv-summary-title">
            Product thinking, technical delivery and real-world context.
          </h2>
        </div>
        <div className="cv-summary-copy">
          <p>
            I shape AI-assisted web applications and API-backed workflows, from
            requirements and data rules to review, testing and deployment. I
            check whether a feature works for the people using it, not just
            whether the build passes.
          </p>
          <p>
            I am studying Cloud & DevOps Engineering, with hands-on practice in
            Docker, Linux, AWS EC2 and web delivery. Earlier civil-engineering
            work and co-owning an F&B business give me practical experience in
            analysis, stakeholder coordination and operational requirements.
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

      <section className="cv-devops-section" aria-labelledby="devops-depth-title">
        <div className="wrap">
          <div className="section-intro">
            <div><p className="eyebrow">02 / CLOUD & DEVOPS PRACTICE</p><h2 id="devops-depth-title">From local build<br /><em>to reachable service.</em></h2></div>
            <p className="section-intro-side">Course-guided practical work and test deployments, with the boundaries of that experience stated clearly.</p>
          </div>
          <div className="cv-depth-grid">
            {devopsPillars.map((pillar) => (
              <article key={pillar.label}>
                <span>{pillar.label}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
                <ul className="cv-depth-list">{pillar.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
          <p className="cv-devops-note">These are guided labs and test deployments, not production SRE ownership. I have also studied architecture topics such as ALB, private RDS, ACM, Secrets Manager, Terraform and Kubernetes; I do not claim to have operated those in production.</p>
        </div>
      </section>

      <section className="timeline-section" aria-labelledby="experience-title">
        <div className="wrap">
          <div className="section-intro">
            <div>
              <p className="eyebrow">03 / WORK EXPERIENCE</p>
              <h2 id="experience-title">
                The experience
                <br />
                <em>behind the projects.</em>
              </h2>
            </div>
            <p className="section-intro-side">
              Professional business and engineering experience adds context to
              the technical projects documented here.
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
                  {item.place.startsWith("Sarang") && <p className="experience-url">Website: <a href={identity.sarang} target="_blank" rel="noopener noreferrer">sarangburunghantu.my</a></p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap cv-depth-section" aria-labelledby="background-title">
        <div className="section-intro">
          <div>
            <p className="eyebrow">04 / PROFESSIONAL CONTEXT</p>
            <h2 id="background-title">Experience that informs<br /><em>the technical work.</em></h2>
          </div>
          <p className="section-intro-side">The focus here is the tech work. These earlier and parallel roles explain where some of my requirements and delivery habits come from.</p>
        </div>
        <div className="engineering-detail-grid">
          <article>
            <span className="engineering-kicker">SARANG · CO-OWNER</span>
            <h3>Real operating context</h3>
            <p>Orders, shifts, staff routines and cost rules give me concrete scenarios for Vista’s POS and owner workflows.</p>
          </article>
          <article>
            <span className="engineering-kicker">CIVIL ENGINEERING · EARLIER ROLES</span>
            <h3>Analysis and coordination</h3>
            <p>Structural design, technical drawings and stakeholder follow-up strengthened my documentation, review and handoff discipline.</p>
          </article>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="cv-skills-title">
        <div className="section-intro">
          <div>
            <p className="eyebrow">05 / SKILLS & TOOLS</p>
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
        <Link className="text-link cv-all-skills-link" to="/skills">View the full skills inventory <span aria-hidden="true">↗</span></Link>
      </section>

      <section
        className="cv-education-section"
        aria-labelledby="education-title"
      >
        <div className="wrap cv-education-layout">
          <div>
            <p className="eyebrow">06 / EDUCATION & DEVELOPMENT</p>
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
          <p className="eyebrow">08 / PROJECT EVIDENCE</p>
          <h2>See the decisions in context.</h2>
          <p>
            The project case studies show my part in each build, its technical
            stack, and whether it is live, an internal pilot, professional work or on hold.
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
