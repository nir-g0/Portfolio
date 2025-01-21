import React from "react";
import '../App.css'

function Header() {
  return (
    <header className="header">
      <h1>Nir Guberman's Project Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
