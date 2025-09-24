import Card from "./Components/Card";
import { projects } from "./projects.js";
import "./index.css";

function App() {
  return (
    <div>
      <header>
        <h1>My Projects</h1>
      </header>
      <main>
        <section id="home">...</section>
        <div className="grid">
          {projects.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
        <section id="contact">...</section>
      </main>
    </div>
  );
}
export default App;
