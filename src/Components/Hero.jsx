function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-inner">
        <h1 className="hero-title">Mosa Yaqoobi</h1>
        <p className="hero-tagline">
          Computer science Student actively looking to gain experience in any
          field of algorithms, AI/ML, and software engineering
        </p>
        <div className="hero-actions">
          <a className="btn" href="#contact">
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
