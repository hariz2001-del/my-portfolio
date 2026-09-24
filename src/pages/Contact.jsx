import { identity } from "../data/portfolio";

function Contact() {
  return (
    <>
      <section className="page-hero wrap contact-hero">
        <p className="eyebrow">CONTACT / START A CONVERSATION</p>
        <h1>
          Let’s make
          <br />
          <em>something useful.</em>
        </h1>
        <p>
          If my experience fits a position on your team, I’d be glad to discuss
          the work, walk through a project or share a concise resume alongside
          this detailed CV.
        </p>
      </section>
      <section className="wrap contact-layout" aria-label="Contact methods">
        <a className="contact-primary" href={`mailto:${identity.email}`}>
          <span>BEST PLACE TO START</span>
          <strong>{identity.email}</strong>
          <span className="contact-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
        <div className="contact-secondary">
          <a href={identity.linkedin} target="_blank" rel="noopener noreferrer">
            <span>PROFESSIONAL PROFILE</span>
            <strong>LinkedIn</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a href={identity.github} target="_blank" rel="noopener noreferrer">
            <span>CODE & PROJECTS</span>
            <strong>GitHub</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a href={identity.whatsapp} target="_blank" rel="noopener noreferrer">
            <span>MESSAGE ME NOW</span>
            <strong>WhatsApp</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a href={identity.phoneHref}>
            <span>CALL DIRECTLY</span>
            <strong>{identity.phone}</strong>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <section className="wrap contact-note">
        <div>
          <span className="eyebrow">A LITTLE CONTEXT</span>
          <h2>Based in {identity.location}.</h2>
        </div>
        <p>
          Open to full-time or part-time work, with a preference for remote or
          hybrid collaboration. English and Bahasa Malaysia.
        </p>
      </section>
    </>
  );
}

export default Contact;
