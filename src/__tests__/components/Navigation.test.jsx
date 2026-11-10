import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navigation from "../../components/Navigation";

function renderAt(path = "/") {
  return render(
    <MemoryRouter
      initialEntries={[path]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Navigation />
    </MemoryRouter>
  );
}

describe("Navigation", () => {
  it("renders all primary links", () => {
    renderAt();
    for (const label of ["Home", "Projects", "Skills", "CV", "Contact"]) {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    }
  });

  it("marks the current route as active", () => {
    renderAt("/projects");
    expect(screen.getByRole("link", { name: "Projects" })).toHaveClass("active");
    expect(screen.getByRole("link", { name: "Home" })).not.toHaveClass("active");
  });

  it("toggles the mobile menu", async () => {
    const user = userEvent.setup();
    renderAt();
    const toggle = screen.getByRole("button", { name: /Menu/ });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: "Primary navigation" })).toHaveClass("is-open");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
