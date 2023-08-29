import "./styles/App.css";
import Hero from "./components/Hero";
import ExperienceSection from "./components/Experience";
import ProjectsSection from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
