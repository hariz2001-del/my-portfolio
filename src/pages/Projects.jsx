import './Projects.css'

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Kubernetes Multi-Cluster Setup',
      tag: 'Kubernetes',
      description:
        'Designed and implemented a highly available multi-cluster Kubernetes infrastructure spanning multiple cloud regions. Implemented cluster auto-scaling, advanced networking with Calico, and GitOps workflows using ArgoCD.',
      client: 'Fortune 500 Tech Company',
      duration: '6 months',
      outcome: '99.99% uptime, 40% reduction in deployment time',
      technologies: ['Kubernetes', 'ArgoCD', 'Helm', 'Calico', 'AWS'],
    },
    {
      id: 2,
      title: 'CI/CD Pipeline Automation',
      tag: 'CI/CD',
      description:
        'Built comprehensive CI/CD pipelines with automated testing, security scanning, code quality analysis, and containerized deployments. Implemented automated rollback mechanisms and canary deployments for zero-downtime releases.',
      client: 'SaaS Startup',
      duration: '4 months',
      outcome: '70% reduction in deployment time, zero-downtime releases',
      technologies: ['Jenkins', 'Docker', 'GitLab CI', 'SonarQube'],
    },
    {
      id: 3,
      title: 'Infrastructure as Code - AWS',
      tag: 'IaC',
      description:
        'Provisioned scalable AWS infrastructure using Terraform with modular, version-controlled configurations. Implemented multi-environment strategy with automated backups, disaster recovery, and cost optimization.',
      client: 'E-commerce Platform',
      duration: '3 months',
      outcome: '30% cost reduction, fully automated infrastructure',
      technologies: ['Terraform', 'AWS', 'Ansible', 'CloudFormation'],
    },
    {
      id: 4,
      title: 'Monitoring & Alerting Stack',
      tag: 'Monitoring',
      description:
        'Implemented end-to-end monitoring and alerting infrastructure with Prometheus, Grafana, and AlertManager. Created custom dashboards for real-time metrics, achieving 99.9% uptime SLA.',
      client: 'Financial Services Company',
      duration: '2 months',
      outcome: '99.9% uptime SLA, reduced MTTR by 50%',
      technologies: ['Prometheus', 'Grafana', 'AlertManager', 'Node Exporter'],
    },
    {
      id: 5,
      title: 'Containerized Microservices Migration',
      tag: 'Docker',
      description:
        'Migrated monolithic applications to containerized microservices architecture using Docker. Implemented service mesh with Istio for traffic management, circuit breaking, and distributed tracing.',
      client: 'Enterprise Software Company',
      duration: '8 months',
      outcome: '60% faster deployments, improved scalability',
      technologies: ['Docker', 'Istio', 'gRPC', 'Jaeger'],
    },
    {
      id: 6,
      title: 'Log Aggregation & Analysis',
      tag: 'Logging',
      description:
        'Set up centralized logging infrastructure using ELK Stack for analyzing application and infrastructure logs at scale. Implemented log parsing, enrichment, and automated alerting on anomalies.',
      client: 'Media & Broadcasting Company',
      duration: '3 months',
      outcome: 'Centralized logging for 100+ services',
      technologies: ['Elasticsearch', 'Logstash', 'Kibana', 'Filebeat'],
    },
  ]

  return (
    <div>
      {/* Projects Header */}
      <section className="hero">
        <div className="container">
          <h2 className="hero-title">My Projects</h2>
          <p className="hero-subtitle">A showcase of DevOps solutions I've built and deployed</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects">
        <div className="container">
          <div className="projects-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-tag">{project.tag}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-details">
                  <p>
                    <strong>Client:</strong> {project.client}
                  </p>
                  <p>
                    <strong>Duration:</strong> {project.duration}
                  </p>
                  <p>
                    <strong>Outcome:</strong> {project.outcome}
                  </p>
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
