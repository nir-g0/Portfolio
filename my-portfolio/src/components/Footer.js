import React from "react";
import '../App.css'

function Footer() {
  return (
    <footer className="footer">
      <p>Built by Nir Guberman | © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
