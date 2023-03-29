import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./HeroSection";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Hire from "./HireMe";
import Contact from "./Contact";

function App() {
  return (
    <div className="top--container relative">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Hire />
      <Contact />
    </div>
  );
}

export default App;
