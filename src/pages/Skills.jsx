import { Link } from "react-router-dom";
import { identity } from "../data/portfolio";

const groups = [
  {
    title: "Business & F&B operations",
    basis: "Direct operating experience · Sarang",
    intro: "I work with the real constraints of a kiosk, not only a product brief.",
    items: ["Customer service and issue handling", "Bites products, purchasing and restocking", "Sales and cost decisions", "Part-time staff training and SOPs", "TikTok Live customer engagement", "Partner expense allocation and accountability"],
  },
  {
    title: "Systems, product & analysis",
    basis: "Direct project contribution",
    intro: "I turn ambiguous requests into simpler workflows and testable rules.",
    items: ["Stakeholder conversations", "Requirements and process mapping", "Owner and cashier user journeys", "Business rules and edge cases", "Acceptance criteria and scenario testing", "Content architecture and source validation", "Prioritisation and scope trade-offs", "Operational documentation"],
  },
  {
    title: "Web, software & data",
    basis: "Technologies used in AI-assisted projects",
    intro: "I direct, review and troubleshoot these builds; a listed framework does not imply independent expert-level coding.",
    items: ["HTML, CSS, JavaScript and TypeScript", "React, Next.js, Vite and Tailwind CSS", "Node.js, Express, Fastify and REST APIs", "PostgreSQL, MySQL, MongoDB and Supabase", "Prisma and data modelling", "Vitest, Playwright and build checks", "DeepSeek API integration", "Responsive sites and progressive web apps"],
  },
  {
    title: "Cloud & DevOps",
    basis: "Hands-on coursework and test deployments",
    intro: "Practical learning across the route from code to a reachable application.",
    items: ["Git, GitHub, branches and pull requests", "Dockerfiles and Docker Compose", "Container ports, volumes and environment files", "Ubuntu administration, SSH and key pairs", "AWS EC2, Security Groups and Elastic IP", "Nginx reverse proxy and virtual hosts", "Cloudflare DNS, Pages and HTTPS certificates", "GitHub Actions CI/CD and Docker Hub workflows", "Systemd services and deployment troubleshooting", "Linux process, memory, disk and port diagnostics"],
  },
  {
    title: "Engineering & transferable practice",
    basis: "Professional civil-engineering experience",
    intro: "Formal analysis, documentation and coordination shaped how I approach digital work.",
    items: ["Structural analysis and design", "STAAD.Pro, OpenTower and AutoCAD", "Technical drawings and documentation", "Authority submissions and coordination", "Constraint analysis and issue follow-up", "Clear technical handoffs"],
  },
  {
    title: "CMS & architecture exposure",
    basis: "Planning and course concepts",
    intro: "Useful context, distinguished from completed production ownership.",
    items: ["WordPress CMS migration planning for PMNI", "AWS load balancer, RDS and ACM concepts", "Terraform and infrastructure-as-code concepts", "Kubernetes in the course pathway; no production deployment claimed"],
  },
];

function Skills() {
  return (
    <>
      <section className="page-hero wrap">
        <p className="eyebrow">SKILLS / CONTEXT MATTERS</p>
        <h1>Broad skills.<br /><em>Clear evidence.</em></h1>
        <p>My work spans business operations, engineering, product analysis, web delivery and cloud practice. Each group below says how I gained that experience.</p>
      </section>
      <section className="section wrap" aria-label="Skills inventory">
        <div className="skills-directory">
          {groups.map((group, index) => (
            <article className="skills-directory-card" key={group.title}>
              <div className="skills-directory-heading">
                <span className="eyebrow">0{index + 1} / {group.basis}</span>
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
          <p>Sarang is the business context; Vista, Calli and the other case studies show how I translate that context into product decisions and delivery.</p>
        </div>
        <div className="skills-context-actions">
          <a className="button button-dark" href={identity.sarang} target="_blank" rel="noopener noreferrer">Visit Sarang <span aria-hidden="true">↗</span></a>
          <Link className="text-link" to="/projects">Explore case studies <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}

export default Skills;
