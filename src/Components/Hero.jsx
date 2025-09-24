function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-inner">
        <h1 className="hero-title">Mosa Yaqoobi</h1>
        <p className="hero-tagline">Computer science</p>

        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            see projects
          </a>
          <a className="btn" href="#contacts">
            Contact Me
          </a>
        </div>
      </div>
      <a
        className="scroll-cue"
        href="#projects"
        aria-label="Scroll to projects"
      >
        ▼
      </a>
    </section>
  );
}
export default Hero;
