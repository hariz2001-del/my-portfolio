export const identity = {
  name: "Hariz Helmi",
  email: "harizhelmiwork@gmail.com",
  github: "https://github.com/hariz2001-del",
  linkedin: "https://www.linkedin.com/in/hariz-helmi-9a35372b8",
  location: "Kuala Lumpur, Malaysia",
};

export const projects = [
  {
    number: "01",
    name: "Aztech Calli",
    type: "F&B operations platform",
    status: "On hold",
    theme: "calli",
    lead: "A POS and back-office system shaped by how small food businesses actually run.",
    contribution:
      "Defined cashier and owner workflows, payment states, inventory and costing rules, and shared-expense logic. Reviewed the AI-assisted implementation against real operating scenarios.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Prisma"],
    details: [
      "Mapped owner and cashier journeys across ordering, shifts, inventory, costing and reporting.",
      "Specified payment states, shared-expense rules and operational accountability from real stall scenarios.",
      "The project is currently on hold; this case study describes the work completed, not an active service.",
    ],
  },
  {
    number: "02",
    name: "Vista",
    type: "Internal POS & restaurant management",
    status: "In development",
    theme: "vista",
    lead: "A QR-first ordering system for the kiosk I help operate.",
    contribution:
      "Mapped paid, cancelled and offline checkout states; simplified cashier access; tested the design against day-to-day kiosk work. Expense and settlement features are still being built.",
    stack: ["React", "Fastify", "PostgreSQL", "Prisma"],
    details: [
      "Designed QR-only ordering for a real kiosk and removed unnecessary cashier PIN and cash-drawer steps.",
      "Worked through paid and cancelled states, offline checkout, discount thresholds and data consistency.",
      "Expense, settlement, cashflow and period-closure features remain unfinished.",
    ],
  },
  {
    number: "03",
    name: "Tourism Geography Tutor",
    type: "Course-grounded learning",
    status: "Live preview",
    theme: "tutor",
    lead: "Learning tools that point back to the course material instead of relying on model recall.",
    contribution:
      "Structured source-page citations, learner and lecturer flows, assessments and review controls. Integrated a DeepSeek question flow and checked core paths with automated tests; course questions remain subject to approval.",
    stack: ["Next.js", "Supabase", "DeepSeek API", "Vitest", "Playwright"],
    link: "https://tourism-geography-tutor.vercel.app",
    linkLabel: "Explore preview",
    details: [
      "Linked structured learning content to cited pages in the source material.",
      "Shaped learner and lecturer journeys, assessments, approval controls and a DeepSeek-backed question flow.",
      "Reviewed draft course questions and checked core paths with automated tests and build verification.",
    ],
  },
  {
    number: "04",
    name: "PMNI",
    type: "Institutional website",
    status: "Live preview",
    theme: "pmni",
    lead: "Making a complex institution understandable to prospective students and families.",
    contribution:
      "Translated a 20-page source profile into an eight-page site and checked 264 navigation links. The current site is static; WordPress is a future migration plan.",
    stack: ["HTML", "CSS", "JavaScript", "Content architecture"],
    link: "https://pmni-website-aztechdigital.vercel.app",
    linkLabel: "View website",
    details: [
      "Organised a 20-page institutional source profile into eight clear website pages.",
      "Audited content against the source and checked 264 navigation links.",
      "Prepared the information structure for a future WordPress migration; the current site is static.",
    ],
  },
  {
    number: "05",
    name: "Strapz",
    type: "Commerce storefront",
    status: "Live storefront",
    theme: "strapz",
    lead: "A clear route from choosing a product to placing an order.",
    contribution:
      "Worked on catalogue, variants, cart and DuitNow QR checkout with manual WhatsApp fulfilment. A payment gateway and transaction backend are not part of the current storefront.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://strapz.vercel.app",
    linkLabel: "Visit storefront",
    details: [
      "Worked on catalogue, product variants and cart flows for a responsive storefront.",
      "Supported DuitNow QR checkout and manual WhatsApp fulfilment.",
      "The current storefront does not include an integrated payment gateway or transaction backend.",
    ],
  },
  {
    number: "06",
    name: "Cloud & DevOps practice",
    type: "Containers & test deployment",
    status: "Course project",
    theme: "devops",
    lead: "Learning how software reaches and runs on a server.",
    contribution:
      "Containerised an Express API, configured Compose services for MySQL, PostgreSQL and MongoDB, and practised an Ubuntu EC2 deployment with SSH, Nginx, HTTPS and Cloudflare DNS. This was a learning deployment, not a production service.",
    stack: ["Docker", "Docker Compose", "AWS EC2", "Ubuntu", "Nginx"],
    link: "https://github.com/hariz2001-del/devops-cloud-portfolio",
    linkLabel: "View repository",
    details: [
      "Containerised an Express API with a Node 20 Alpine Dockerfile.",
      "Configured MySQL, PostgreSQL and MongoDB Compose services with env values, port mapping and volumes.",
      "Practised an Ubuntu EC2 test deployment using SSH, Security Groups, Elastic IP, Nginx, HTTPS and Cloudflare DNS.",
    ],
  },
  {
    number: "07",
    name: "Sarang",
    type: "Business website & operations",
    status: "Live website",
    theme: "sarang",
    lead: "A digital front door for the F&B business I help run.",
    contribution:
      "Built and deployed the website with AI-assisted HTML/CSS, configured the custom domain, and brought the same operating knowledge into staff SOPs, inventory and Vista requirements.",
    stack: ["HTML", "CSS", "Vercel", "Cloudflare DNS"],
    link: "https://sarangburunghantu.my",
    linkLabel: "Visit website",
    details: [
      "Built and deployed the business website with AI-assisted HTML/CSS and a custom domain.",
      "Co-run kiosk operations, including bites products, restocking, customer-facing work and staff SOPs.",
      "Use those operating observations to validate Vista’s POS and management requirements.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Systems & product",
    text: "Requirements, workflows, user roles, business rules, stakeholder communication and operational trade-offs.",
    tags: [
      "Process mapping",
      "Data reconciliation",
      "Acceptance criteria",
      "F&B operations",
    ],
  },
  {
    label: "Technical delivery",
    text: "AI-assisted web implementation, code review, API integration, testing, troubleshooting and release checks.",
    tags: [
      "React / Next.js",
      "TypeScript",
      "PostgreSQL / Supabase",
      "Vitest / Playwright",
    ],
  },
  {
    label: "Cloud & DevOps practice",
    text: "Hands-on course and project work across containers, Linux and cloud configuration; studying Cloud & DevOps Engineering.",
    tags: [
      "Docker / Compose",
      "AWS EC2",
      "Ubuntu / SSH",
      "Nginx / DNS / HTTPS",
    ],
  },
];
