import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectCard from "../../components/ProjectCard";

const baseProject = {
  number: "01",
  name: "Test Project",
  type: "Web app",
  status: "Live",
  theme: "test",
  lead: "A short lead.",
  problem: "The problem.",
  contribution: "What I did.",
  stack: ["React", "Vite", "Node", "Postgres"],
  details: ["Detail one", "Detail two"],
  link: "https://example.com",
  linkLabel: "Visit site",
};

describe("ProjectCard", () => {
  it("renders the name, type and lead", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByRole("heading", { name: "Test Project" })).toBeInTheDocument();
    expect(screen.getByText("A short lead.")).toBeInTheDocument();
  });

  it("shows only the first three stack items in compact mode", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText("Vite")).toBeInTheDocument();
    expect(screen.getByText("Node")).toBeInTheDocument();
    expect(screen.queryByText("Postgres")).not.toBeInTheDocument();
  });

  it("shows the full stack, story and details in detailed mode", () => {
    render(<ProjectCard project={baseProject} detailed />);
    expect(screen.getByText("Postgres")).toBeInTheDocument();
    expect(screen.getByText("What I did.")).toBeInTheDocument();
    expect(screen.getByText("Detail two")).toBeInTheDocument();
  });

  it("renders the external link safely in a new tab", () => {
    render(<ProjectCard project={baseProject} />);
    const link = screen.getByRole("link", { name: /Visit site/ });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders every link from the links list in detailed mode", () => {
    const project = {
      ...baseProject,
      links: [
        { label: "Main site", href: "https://a.example" },
        { label: "Demo", href: "https://b.example" },
      ],
    };
    render(<ProjectCard project={project} detailed />);
    expect(screen.getByRole("link", { name: /Main site/ })).toHaveAttribute("href", "https://a.example");
    expect(screen.getByRole("link", { name: /Demo/ })).toHaveAttribute("href", "https://b.example");
  });

  it("renders no link when hideLink is set", () => {
    render(<ProjectCard project={{ ...baseProject, hideLink: true }} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("shows an on-hold message when there is no link", () => {
    const { link, ...noLink } = baseProject;
    render(<ProjectCard project={{ ...noLink, status: "On hold" }} />);
    expect(screen.getByText("Project on hold · no live link")).toBeInTheDocument();
  });
});
