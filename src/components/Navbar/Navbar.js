import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/codinglogo.jpg";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between align-middle py-5">
        <img src={logo} alt="" width="60" />
        <div>
          <NavLink to="/" className="navitem">
            About Me
          </NavLink>
          <NavLink to="/" className="navitem">
            Projects
          </NavLink>
          <NavLink to="/" className="navitem">
            Skills
          </NavLink>
          <button>Resume</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
