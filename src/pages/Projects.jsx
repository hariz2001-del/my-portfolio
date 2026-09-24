import { projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <>
      <section className="page-hero wrap">
        <p className="eyebrow">PROJECT CASE STUDIES / 2026</p>
        <h1>
          The work, in detail.
          <br />
          <em>My part in it.</em>
        </h1>
        <p>
          A closer look at the problem, what I contributed, the tools used and
          what is live or unfinished. Aztech Calli is on hold, so its live link
          has been removed.
        </p>
      </section>
      <section
        className="section wrap project-page-section"
        aria-label="Project portfolio"
      >
        <div className="all-projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} detailed />
          ))}
        </div>
      </section>
      <section className="wrap case-note">
        <div>
          <span className="case-note-index">A NOTE ON MY ROLE</span>
          <h2>
            I use AI as a development tool, not a substitute for understanding.
          </h2>
        </div>
        <p>
          Across these projects, my direct contribution includes framing the
          problem, defining workflows and business rules, reviewing
          implementations, testing edge cases, troubleshooting and getting
          working products into users’ hands. I distinguish live work, previews,
          course practice and unfinished features throughout this portfolio.
        </p>
      </section>
    </>
  );
}

export default Projects;
