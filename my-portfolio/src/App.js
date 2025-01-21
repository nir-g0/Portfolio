import React from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import projects from "./data/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>My Projects</h1>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
