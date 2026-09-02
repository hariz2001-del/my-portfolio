import './About.css'

function About() {
  const experience = [
    {
      id: 1,
      period: '2023 - Present',
      position: 'Senior DevOps Engineer',
      company: 'Tech Company Inc.',
      description:
        'Leading DevOps initiatives, managing cloud infrastructure, and mentoring junior engineers.',
    },
    {
      id: 2,
      period: '2021 - 2023',
      position: 'DevOps Engineer',
      company: 'Cloud Solutions Ltd.',
      description:
        'Developed CI/CD pipelines and managed Kubernetes clusters for microservices deployments.',
    },
    {
      id: 3,
      period: '2019 - 2021',
      position: 'Systems Administrator',
      company: 'Infrastructure Ops',
      description:
        'Managed on-premise and cloud infrastructure, implemented automation with Ansible and scripting.',
    },
  ]

  return (
    <div>
      {/* About Header */}
      <section className="hero">
        <div className="container">
          <h2 className="hero-title">About Me</h2>
          <p className="hero-subtitle">DevOps Engineer | Cloud Architect | Automation Specialist</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h3>Background</h3>
              <p>
                I'm a passionate DevOps Engineer with 5+ years of experience in cloud
                infrastructure, containerization, and CI/CD pipeline automation. My journey
                started as a Systems Administrator, gradually evolving into a full-fledged
                DevOps professional.
              </p>

              <h3>What I Do</h3>
              <p>
                I specialize in designing and maintaining scalable systems that enable teams
                to deploy faster and more reliably. My expertise spans across multiple cloud
                platforms, container orchestration, and modern DevOps tools.
              </p>

              <h3>My Focus Areas</h3>
              <ul className="focus-list">
                <li>Infrastructure automation and provisioning</li>
                <li>Containerization and orchestration</li>
                <li>CI/CD pipeline design and implementation</li>
                <li>Cloud infrastructure optimization</li>
                <li>Monitoring, logging, and observability</li>
                <li>Disaster recovery and high availability</li>
              </ul>
            </div>

            <div className="about-sidebar">
              <div className="stats-grid">
                <div className="stat-card">
                  <h4>5+</h4>
                  <p>Years in DevOps</p>
                </div>
                <div className="stat-card">
                  <h4>20+</h4>
                  <p>Projects Delivered</p>
                </div>
                <div className="stat-card">
                  <h4>99.9%</h4>
                  <p>Uptime SLA</p>
                </div>
                <div className="stat-card">
                  <h4>8+</h4>
                  <p>Cloud Platforms</p>
                </div>
              </div>

              <div className="tech-summary">
                <h3>Technology Stack</h3>
                <div className="tech-tags">
                  <span>Kubernetes</span>
                  <span>Docker</span>
                  <span>AWS</span>
                  <span>Terraform</span>
                  <span>Jenkins</span>
                  <span>GitLab CI</span>
                  <span>Prometheus</span>
                  <span>Grafana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">
            {experience.map((item, index) => (
              <div key={item.id} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="experience-date">{item.period}</div>
                <div className="experience-content">
                  <h3>{item.position}</h3>
                  <p className="experience-company">{item.company}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <div className="container">
          <h2 className="section-title">Certifications & Achievements</h2>
          <div className="certifications-grid">
            <div className="cert-card">
              <h3>Kubernetes Administrator (CKA)</h3>
              <p>Linux Foundation | 2023</p>
            </div>
            <div className="cert-card">
              <h3>AWS Solutions Architect</h3>
              <p>Amazon Web Services | 2022</p>
            </div>
            <div className="cert-card">
              <h3>HashiCorp Certified: Terraform Associate</h3>
              <p>HashiCorp | 2022</p>
            </div>
            <div className="cert-card">
              <h3>Docker Certified Associate</h3>
              <p>Docker | 2021</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
