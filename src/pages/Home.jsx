import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">DevOps Engineer</h2>
            <p className="hero-subtitle">
              Building scalable, reliable infrastructure and automating deployment pipelines
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate DevOps Engineer with expertise in cloud infrastructure,
                containerization, and CI/CD pipeline automation. I specialize in designing
                and maintaining scalable systems that enable teams to deploy faster and more
                reliably.
              </p>
              <p>
                With hands-on experience in Kubernetes, Docker, AWS, and modern DevOps tools,
                I focus on improving deployment processes, reducing downtime, and implementing
                infrastructure as code practices.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="stat">
                <h3>99.9%</h3>
                <p>Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Container & Orchestration</h3>
              <ul>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Docker Compose</li>
                <li>Helm Charts</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Cloud Platforms</h3>
              <ul>
                <li>AWS (EC2, S3, RDS, Lambda)</li>
                <li>Azure (VMs, App Service, AKS)</li>
                <li>Google Cloud Platform</li>
                <li>DigitalOcean</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>CI/CD & Automation</h3>
              <ul>
                <li>Jenkins</li>
                <li>GitLab CI/CD</li>
                <li>GitHub Actions</li>
                <li>GitOps (ArgoCD)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Infrastructure as Code</h3>
              <ul>
                <li>Terraform</li>
                <li>Ansible</li>
                <li>CloudFormation</li>
                <li>Pulumi</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Monitoring & Logging</h3>
              <ul>
                <li>Prometheus</li>
                <li>Grafana</li>
                <li>ELK Stack</li>
                <li>Datadog</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <ul>
                <li>Bash/Shell Scripting</li>
                <li>Python</li>
                <li>Go</li>
                <li>YAML</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Kubernetes Multi-Cluster Setup</h3>
                <span className="project-tag">Kubernetes</span>
              </div>
              <p>
                Designed and implemented a multi-cluster Kubernetes infrastructure with
                auto-scaling, ingress management, and GitOps deployment strategies.
              </p>
              <div className="project-tech">
                <span className="tech-badge">Kubernetes</span>
                <span className="tech-badge">ArgoCD</span>
                <span className="tech-badge">Helm</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>CI/CD Pipeline Automation</h3>
                <span className="project-tag">CI/CD</span>
              </div>
              <p>
                Built comprehensive CI/CD pipelines with automated testing, security
                scanning, and containerized deployments. Reduced deployment time by 70%.
              </p>
              <div className="project-tech">
                <span className="tech-badge">Jenkins</span>
                <span className="tech-badge">Docker</span>
                <span className="tech-badge">Git</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Infrastructure as Code</h3>
                <span className="project-tag">IaC</span>
              </div>
              <p>
                Provisioned AWS infrastructure using Terraform with modular, reusable
                configurations. Managed environments for dev, staging, and production.
              </p>
              <div className="project-tech">
                <span className="tech-badge">Terraform</span>
                <span className="tech-badge">AWS</span>
                <span className="tech-badge">Ansible</span>
              </div>
            </div>
          </div>
          <div className="view-all">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to discuss your DevOps needs?</h2>
          <Link to="/contact" className="btn btn-large btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
