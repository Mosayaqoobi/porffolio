import ContactSection from "./Components/ContactSection.jsx";
import Hero from "./Components/Hero.jsx";
import ProjectSection from "./Components/ProjectSection.jsx";
import "./index.css";

function App() {
  return (
    <div>
      <header className="site-nav">
        <a href="#home" className="brand"></a>
        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
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
