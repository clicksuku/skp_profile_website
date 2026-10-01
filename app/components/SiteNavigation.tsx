import { Github, Linkedin } from "lucide-react";

export default function SiteNavigation() {
  return (
    <>
      <header className="mobile-header">
        <a className="mobile-mark" href="/#top" aria-label="Sundara Kumar home">SK</a>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="/#about">About</a>
          <a href="/blog">Blog</a>
          <a href="/#experience">Work</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <aside className="side-rail" aria-label="Primary navigation">
        <div className="rail-top">
          <a className="monogram" href="/#top" aria-label="Sundara Kumar home">SK</a>
          <span className="rail-line" />
          <nav>
            <a href="/#about"><span>01</span> About</a>
            <a href="/#experience"><span>02</span> Experiences</a>
            <a href="/#projects"><span>03</span> Projects</a>
            <a href="/#certificates"><span>04</span> Certificates</a>
            <a href="/blog"><span>05</span> Blog</a>
            <a href="/creatives"><span>06</span> Creatives</a>
            <a href="/#contact"><span>07</span> Contact</a>
          </nav>
        </div>
        <div className="rail-bottom">
          <a href="https://github.com/clicksuku/SundarkpCode" target="_blank" rel="noreferrer" aria-label="GitHub repository"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/sundarkp/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
        </div>
      </aside>
    </>
  );
}
