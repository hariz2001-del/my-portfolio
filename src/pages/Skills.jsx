import { Link } from "react-router-dom";

const groups = [
  {
    title: "Web interfaces & CMS",
    basis: "AI-assisted projects and content planning",
    intro: "I shape and review the customer-facing experience, while being clear about AI assistance in implementation.",
    items: ["HTML, CSS, JavaScript and TypeScript", "React, Next.js and Vite", "Tailwind CSS and responsive UI", "Progressive web app patterns", "Catalogue, checkout and dashboard flows", "Content architecture and source audits", "Static-site deployment and custom domains", "WordPress CMS migration planning for PMNI", "SEO basics, metadata and sitemaps", "Flutter/Dart prototype exposure"],
  },
  {
    title: "Applications, APIs & AI integrations",
    basis: "Technologies used in AI-assisted builds",
    intro: "These stacks appear in project code I have directed, reviewed and tested; they are not all claims of solo implementation.",
    items: ["Node.js, Express and Fastify", "REST and JSON APIs", "Authentication and role-aware workflows", "API-key header patterns", "Zod validation, JWT and bcrypt in projects", "DeepSeek API-backed question flows", "Gemini-assisted content/OCR workflows", "Python and PyMuPDF content processing", "Vite and Next.js build checks", "Environment-based configuration"],
  },
  {
    title: "Data & operational systems",
    basis: "AI-assisted products plus guided database labs",
    intro: "My focus is on data meaning, traceability and business rules; the tools span both project and course work.",
    items: ["PostgreSQL, MySQL and MongoDB", "Supabase and Prisma", "Data modelling, migrations and seeding", "Row-Level Security patterns in project work", "Inventory, costing and expense workflows", "Sale/shift state and reconciliation rules", "Immutable paid-sale correction concepts", "Persistent Docker database volumes", "DBeaver and MongoDB Compass", "SQL and connection troubleshooting"],
  },
  {
    title: "Cloud, Linux & networking",
    basis: "Hands-on course labs and test deployments",
    intro: "I have worked through the practical route from a local service to a reachable host and domain.",
    items: ["AWS EC2 and Ubuntu administration", "Security Groups and Elastic IP", "SSH/Ed25519 keys and scp", "apt, ownership and file permissions", "Nginx virtual hosts and reverse proxy", "Cloudflare DNS, nameservers and TTL", "Cloudflare Pages and custom domains", "Certbot and HTTPS setup", "systemd service management", "Port, process, memory and disk diagnostics"],
  },
  {
    title: "Containers, Git & CI/CD",
    basis: "Guided deployment work and workflow practice",
    intro: "I distinguish the lab work I performed from more advanced delivery patterns covered in the course.",
    items: ["Docker Engine, Dockerfiles and Node Alpine images", "Docker Compose services and named volumes", "Port mapping and host/container networking", "Container lifecycle, logs and image tags", "Git/GitHub branches, commits and pull requests", "Repository hygiene and .gitignore", "GitHub Actions build/test gates", "Artifacts, Secrets and Variables", "Docker Hub and SSH-to-EC2 deployment patterns", "Cloudflare Pages preview/production flow"],
  },
  {
    title: "Quality, troubleshooting & communication",
    basis: "Project delivery and professional practice",
    intro: "I follow a result through to whether it works for users, not only whether it builds.",
    items: ["User-scenario and edge-case testing", "Vitest, Playwright and build checks", "Source and navigation-link auditing", "API and environment troubleshooting", "Browser and runtime verification", "Data consistency and reconciliation checks", "Technical documentation and handover", "Analytical problem decomposition", "Review comments and revision tracking", "English and Bahasa Malaysia communication"],
  },
  {
    title: "Systems & product analysis",
    basis: "Direct project contribution",
    intro: "I translate ambiguous operating needs into narrower, testable systems rather than feature lists.",
    items: ["Requirements and workflow mapping", "Owner, cashier, learner and lecturer journeys", "Roles, permissions and business rules", "Order, payment and correction edge cases", "Acceptance criteria and scenario testing", "Process simplification and scope trade-offs", "Operational and content documentation", "Source-content validation", "Information architecture", "Stakeholder feedback into iteration"],
  },
  {
    title: "Architecture & course concepts",
    basis: "Course exposure, not production ownership",
    intro: "These topics belong in the picture, with their experience level stated rather than inflated.",
    items: ["Frontend/API/database separation", "AWS load balancers and target groups", "Private RDS and SSH tunnelling concepts", "ACM and Secrets Manager concepts", "Terraform infrastructure-as-code workflow", "Kubernetes pods, deployments and services", "Branch protection and review gates", "Backup and recovery planning concepts"],
  },
  {
    title: "Stakeholder & delivery coordination",
    basis: "Engineering, business and client projects",
    intro: "I keep requirements, revisions and handoffs clear across technical and non-technical teams.",
    items: ["Client and stakeholder communication", "Requirements clarification", "Technical comments and revision tracking", "Written follow-up and documentation", "Multidisciplinary handoffs", "Authority-submission support"],
  },
  {
    title: "Business operations context",
    basis: "Direct work · Sarang co-owner",
    intro: "A live F&B operation gives me practical cases for product requirements and usability checks.",
    items: ["Customer and staff workflows", "Stock, sales and cost rules", "Partner expense allocation", "Training five part-time staff on SOPs", "Feedback into Vista product decisions"],
  },
  {
    title: "Earlier civil-engineering experience",
    basis: "Professional engineering roles",
    intro: "Technical analysis and coordination experience that transfers into software delivery.",
    items: ["Telco, reinforced-concrete, steel and foundation design support", "Structural modelling and technical drawings", "Site and as-built checks", "Client, architect and authority coordination", "STAAD.Pro, MS Tower, OpenTower and AutoCAD"],
  },
];

function Skills() {
  return (
    <>
      <section className="page-hero wrap">
        <p className="eyebrow">SKILLS / CONTEXT MATTERS</p>
        <h1>Broad skills.<br /><em>Clear evidence.</em></h1>
        <p>Web applications, APIs, data, product analysis and cloud delivery are the focus. Business and civil-engineering experience appears as supporting context, with each group clear about its evidence.</p>
      </section>
      <div className="wrap skills-context-strip" aria-label="How to read this skills inventory">
        <span>DIRECT WORK <small>requirements, decisions and review</small></span>
        <span>AI-ASSISTED PROJECTS <small>stacks I direct, review and test</small></span>
        <span>COURSE PRACTICE <small>labs, deployments and architecture concepts</small></span>
      </div>
      <section className="section wrap" aria-label="Skills inventory">
        <div className="skills-directory">
          {groups.map((group, index) => (
            <article className="skills-directory-card" key={group.title}>
              <div className="skills-directory-heading">
                <span className="eyebrow">{String(index + 1).padStart(2, "0")} / {group.basis}</span>
                <h2>{group.title}</h2>
                <p>{group.intro}</p>
              </div>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
      <section className="wrap skills-context">
        <div>
          <p className="eyebrow">SKILLS IN USE</p>
          <h2>See what sits behind the list.</h2>
          <p>Vista, the Tourism Geography Tutor and the cloud project show how I turn requirements into product decisions, testing and delivery. Sarang and earlier engineering work provide context.</p>
        </div>
        <div className="skills-context-actions">
          <Link className="text-link" to="/projects">Explore case studies <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}

export default Skills;
