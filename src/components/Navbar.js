import React from "react";
import { Link } from "react-router-dom"; //used for the navbar in react so I have imported the link.
import "./Navbar.css";  // Import CSS

const Navbar = () => {
  return (
    <nav>
      <h1>JEGANRAJ P</h1>
      <ul>
        <li><Link to="/">Skills</Link></li>
        
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
