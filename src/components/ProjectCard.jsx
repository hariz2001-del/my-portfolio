function ProjectCard({ project, detailed = false }) {
  return (
    <article className={`project-card project-${project.theme}`}>
      <div className="project-art" aria-hidden="true">
        <span className="project-art-index">{project.number} / 08</span>
        <span className="project-art-mark">
          {project.name === "Cloud & DevOps practice"
            ? "DEV/OPS"
            : project.name}
        </span>
        <span className="project-art-orbit orbit-one" />
        <span className="project-art-orbit orbit-two" />
        <span className="project-art-bottom">{project.type.toUpperCase()}</span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{project.type}</span>
          <span className="status">
            <span />
            {project.status}
          </span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.lead}</p>
        {detailed && (
          <div className="project-story">
            {project.problem && <p><strong>The need</strong>{project.problem}</p>}
            <p><strong>My contribution</strong>{project.contribution}</p>
          </div>
        )}
        {detailed && project.details && (
          <div className="project-feature-block">
            <strong>Features & delivery</strong>
            <ul className="project-detail-list">
              {project.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </div>
        )}
        {detailed && project.aiNote && <p className="project-ai-note"><strong>Build context</strong>{project.aiNote}</p>}
        {detailed && <span className="project-stack-label">STACK / TOOLS</span>}
        <div className="project-tags">
          {project.stack.slice(0, detailed ? undefined : 3).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.link ? (
          <a
            className="project-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.linkLabel} <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="project-link muted-link">
            {project.status === "On hold"
              ? "Project on hold · no live link"
              : "Internal working project · no public link"}
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
