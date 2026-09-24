function ProjectCard({ project, detailed = false }) {
  return (
    <article className={`project-card project-${project.theme}`}>
      <div className="project-art" aria-hidden="true">
        <span className="project-art-index">{project.number} / 07</span>
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
          <p className="project-contribution">{project.contribution}</p>
        )}
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
            Private working project
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
