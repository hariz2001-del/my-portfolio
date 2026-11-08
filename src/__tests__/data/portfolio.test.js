import { describe, it, expect } from "vitest";
import { identity, projects, skillGroups } from "../../data/portfolio";

describe("identity", () => {
  it("has the required contact fields", () => {
    for (const key of ["name", "email", "github", "linkedin"]) {
      expect(identity[key], key).toBeTruthy();
    }
  });

  it("has a valid-looking email address", () => {
    expect(identity.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("uses https for external profile links", () => {
    for (const key of ["github", "linkedin", "whatsapp"]) {
      expect(identity[key], key).toMatch(/^https:\/\//);
    }
  });
});

describe("projects", () => {
  it("is not empty", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("numbers projects sequentially as two-digit strings", () => {
    projects.forEach((project, index) => {
      expect(project.number).toBe(String(index + 1).padStart(2, "0"));
    });
  });

  it("gives every project the fields the card needs", () => {
    for (const project of projects) {
      for (const key of ["name", "type", "status", "theme", "lead"]) {
        expect(project[key], `${project.name}.${key}`).toBeTruthy();
      }
      expect(Array.isArray(project.stack), `${project.name}.stack`).toBe(true);
      expect(project.stack.length, `${project.name}.stack`).toBeGreaterThan(0);
    }
  });

  it("has unique names and themes", () => {
    const names = projects.map((p) => p.name);
    const themes = projects.map((p) => p.theme);
    expect(new Set(names).size).toBe(names.length);
    expect(new Set(themes).size).toBe(themes.length);
  });

  it("uses https URLs with labels for every link", () => {
    for (const project of projects) {
      if (project.link) {
        expect(project.link, project.name).toMatch(/^https:\/\//);
        expect(project.linkLabel, `${project.name}.linkLabel`).toBeTruthy();
      }
      for (const item of project.links ?? []) {
        expect(item.href, project.name).toMatch(/^https:\/\//);
        expect(item.label, project.name).toBeTruthy();
      }
    }
  });
});

describe("skillGroups", () => {
  it("is a non-empty list", () => {
    expect(Array.isArray(skillGroups)).toBe(true);
    expect(skillGroups.length).toBeGreaterThan(0);
  });
});
