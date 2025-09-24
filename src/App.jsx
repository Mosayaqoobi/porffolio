import ContactSection from "./Components/ContactSection.jsx";
import Hero from "./Components/HeroSection.jsx";
import ProjectSection from "./Components/ProjectSection.jsx";
import "./index.css";

function App() {
  return (
    <div>
      <header className="site-nav">
        <a href="#home" className="brand">
          Name
        </a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#Contact">Contact</a>
        </nav>
      </header>
      <main>
        <Hero />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
}
export default App;
