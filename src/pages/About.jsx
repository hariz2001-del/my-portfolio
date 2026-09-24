import { Link } from "react-router-dom";
import { identity } from "../data/portfolio";

const experience = [
  {
    period: "APR 2026 — PRESENT",
    role: "Co-owner, Operations & Digital Product Contributor",
    place: "Sarang · UKM Bangi",
    points: [
      "Co-own and operate an F&B kiosk, managing bites products, purchasing and restocking, customer service, and day-to-day sales and cost decisions.",
      "Train five part-time staff on SOPs and support customer engagement as a TikTok Live host.",
      "Translate real ordering, payment, shift and expense-split scenarios into requirements and test cases for Vista.",
      "Balance partner accountability with simple counter routines: focus on useful reporting and avoid unnecessary cashier steps.",
    ],
  },
  {
    period: "OCT 2025 — MAY 2026",
    role: "Telco Pole & Structural Design Engineer",
    place: "Oversea Deco & Industrial Sdn Bhd",
    points: [
      "Analysed telecommunications monopoles and high masts using STAAD.Pro, MS Tower and OpenTower; prepared GA and fabrication drawings in AutoCAD.",
      "Supported site inspections and as-built checks, then followed up design comments, fabrication needs and site constraints with technical stakeholders.",
      "Balanced structural requirements, constructability and practical design trade-offs while keeping technical handoffs clear.",
    ],
  },
  {
    period: "APR — OCT 2025",
    role: "Junior Engineer",
    place: "Perunding ZAB Sdn Bhd",
    points: [
      "Supported reinforced-concrete, steel and foundation design, pile-capacity analysis, and water-reticulation and sewerage documentation.",
      "Assisted authority submissions and coordinated design queries with clients, architects, authorities and site stakeholders.",
      "Tracked technical comments and revisions through formal submission and delivery processes.",
    ],
  },
];

const capabilities = [
  {
    title: "Business ownership & operations",
    context: "Direct Sarang co-owner work",
    items: [
      "Menu, stock and replenishment decisions",
      "Staff SOPs and customer service",
      "Sales, costs and expense allocation",
      "Partner communication and prioritisation",
    ],
  },
  {
    title: "Structural engineering & coordination",
    context: "Professional civil-engineering work",
    items: [
      "Telco, RC, steel and foundation design",
      "GA/fabrication drawings and site checks",
      "Client and site-stakeholder coordination",
      "Authority-submission support",
      "Design queries, revisions and handoffs",
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
      "HTML/CSS, JavaScript and responsive UI",
      "React, Next.js, TypeScript",
      "Supabase, PostgreSQL, Prisma",
      "Fastify, REST APIs",
      "Vitest, Playwright, DeepSeek API",
      "WordPress CMS migration planning",
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
];

const businessPillars = [
  {
    label: "01 / OWNERSHIP",
    title: "Run the business, not just the website",
    copy: "As a Sarang co-owner, I make day-to-day decisions about the bites offering, customer experience, stock and operating priorities with my partner.",
    points: ["Products and menu decisions", "Purchasing, replenishment and supplier follow-up", "Sales and cost visibility"],
  },
  {
    label: "02 / PEOPLE & SERVICE",
    title: "Keep the counter consistent",
    copy: "I train five part-time staff on practical SOPs and help resolve customer-facing issues. TikTok Live gives me another direct channel to understand and engage customers.",
    points: ["Staff training and shift routines", "Customer communication", "Live promotion and feedback"],
  },
  {
    label: "03 / COSTS & PARTNERS",
    title: "Make the money understandable",
    copy: "I distinguish direct product costs from shared expenses and work through partner allocations, reimbursements and what an owner actually needs to see in the books.",
    points: ["Direct versus shared costs", "Expense-split rules", "Traceable sales and corrections"],
  },
  {
    label: "04 / PRODUCT JUDGMENT",
    title: "Turn operations into clear rules",
    copy: "Sarang's real orders, discounts, shifts and exceptions inform my requirements for Vista. I prefer simpler QR-first cashier flows over controls that slow staff without adding value.",
    points: ["Owner and cashier workflows", "Edge cases and acceptance criteria", "Practical scope decisions"],
  },
  {
    label: "05 / DIGITAL PRESENCE",
    title: "Connect offline work to online delivery",
    copy: "I directed and deployed Sarang's AI-assisted website, worked with its domain setup, and use the live business to validate whether digital features solve genuine operating problems.",
    points: ["Website and domain delivery", "Business content decisions", "Real-user feedback into iteration"],
  },
  {
    label: "06 / TRANSFERABLE VALUE",
    title: "Bridge commercial and technical teams",
    copy: "I can explain a workflow from the perspectives of the owner, cashier and customer, then translate those differences into priorities for a product or implementation team.",
    points: ["Stakeholder communication", "Process documentation", "Decision and handoff clarity"],
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
            Business, engineering and technical delivery together.
          </h2>
        </div>
        <div className="cv-summary-copy">
          <p>
            I am a civil engineering graduate and F&B co-owner who turns
            day-to-day operating problems into clear requirements, business
            rules and testable workflows. I use AI-assisted development to help
            deliver web products, then review the result against real use cases
            and follow it through testing, deployment and support.
          </p>
          <p>
            My strongest evidence is in systems thinking, product decisions,
            operational judgment, engineering analysis and coordination. I am also
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
                  {item.place.startsWith("Sarang") && <p className="experience-url">Website: <a href={identity.sarang} target="_blank" rel="noopener noreferrer">sarangburunghantu.my</a></p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap cv-depth-section" aria-labelledby="business-depth-title">
        <div className="section-intro">
          <div>
            <p className="eyebrow">03 / BUSINESS IN PRACTICE</p>
            <h2 id="business-depth-title">Ownership in practice.<br /><em>Judgment in delivery.</em></h2>
          </div>
          <p className="section-intro-side">Sarang is a business I co-own, not just a case study. Its day-to-day work gives my product choices a reality check.</p>
        </div>
        <div className="cv-depth-grid">
          {businessPillars.map((pillar) => (
            <article key={pillar.label}>
              <span>{pillar.label}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
              <ul className="cv-depth-list">{pillar.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cv-engineering-section" aria-labelledby="engineering-depth-title">
        <div className="wrap">
          <div className="section-intro">
            <div><p className="eyebrow">04 / CIVIL ENGINEERING</p><h2 id="engineering-depth-title">Technical work.<br /><em>Transferable discipline.</em></h2></div>
            <p className="section-intro-side">Two engineering roles gave me a foundation in analysis, controlled documentation, client and site coordination, and navigating formal approval processes.</p>
          </div>
          <div className="engineering-detail-grid">
            <article>
              <span className="engineering-kicker">OVERSEA DECO & INDUSTRIAL · 2025–2026</span>
              <h3>Telco pole & structural design</h3>
              <p>Analysed telecommunications monopoles and high masts with STAAD.Pro, MS Tower and OpenTower. Prepared GA and fabrication drawings, supported site/as-built checks and worked through design comments, fabrication requirements and implementation follow-up.</p>
              <ul><li>Structural modelling and load-path thinking</li><li>AutoCAD drawings and revision control</li><li>Site verification and stakeholder clarification</li></ul>
            </article>
            <article>
              <span className="engineering-kicker">PERUNDING ZAB · 2025</span>
              <h3>Building and infrastructure design support</h3>
              <p>Supported reinforced-concrete, steel and foundation design, pile-capacity analysis, and water-reticulation and sewerage documentation. Assisted authority submissions and coordinated design queries among clients, architects, authorities and site teams.</p>
              <ul><li>ProtaStructure, STAAD.Pro and AllPile exposure</li><li>Submission and technical-approval follow-up</li><li>Client-facing and multidisciplinary coordination</li></ul>
            </article>
          </div>
          <div className="engineering-transfer"><strong>What transfers into tech work</strong><p>Decompose complex problems, record assumptions, respond to review comments, align multiple stakeholders, and carry a decision through to a clear handoff.</p></div>
        </div>
      </section>

      <section className="cv-devops-section" aria-labelledby="devops-depth-title">
        <div className="wrap">
          <div className="section-intro">
            <div><p className="eyebrow">05 / CLOUD & DEVOPS PRACTICE</p><h2 id="devops-depth-title">From local build<br /><em>to reachable service.</em></h2></div>
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

      <section className="section wrap" aria-labelledby="cv-skills-title">
        <div className="section-intro">
          <div>
            <p className="eyebrow">06 / SKILLS & TOOLS</p>
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
            <p className="eyebrow">07 / EDUCATION & DEVELOPMENT</p>
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
