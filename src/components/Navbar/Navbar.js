import React, { useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../../images/codinglogo.jpg";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="fixed top-0 left-0 w-full z-10 bg-primary">
        <nav className="container mx-auto flex justify-between align-middle py-5 px-6">
          <img src={logo} alt="" width="60" />
          <button
            className=" md:hidden flex -mx-4"
            onClick={() => setNavOpen(true)}
          >
            <AiOutlineMenuFold className="text-white text-3xl" />
          </button>
          <div className="hidden md:flex gap-3 items-center justify-center">
            <NavLink to="/" className="navitem">
              Home
            </NavLink>
            <NavLink to="/contact" className="navitem">
              Contact
            </NavLink>
            <NavLink to="/" className="navitem">
              Projects
            </NavLink>
            <a
              href="https://drive.google.com/file/d/1M-4HgNr6d9TdaTWyLfwZCbT_KSL-fIJp/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="py-2 px-3 bg-white text-gray-800 flex gap-2 items-center font-bold text-base rounded-xl"
            >
              resume
              <AiOutlineCloudDownload className="text-xl" />
            </a>
          </div>
        </nav>
      </div>
      {navOpen && (
        <div className="bg-primary fixed top-0 right-0 w-40 h-full z-50">
          <button
            className="relative left-24 top-5"
            onClick={() => setNavOpen(false)}
          >
            <AiOutlineCloseCircle className="text-white text-3xl" />
          </button>
          <div className="flex flex-col gap-3 items-center justify-center w-full h-full">
            <NavLink to="/" className="navitem">
              About Me
            </NavLink>
            <NavLink to="/" className="navitem">
              Projects
            </NavLink>
            <NavLink to="/" className="navitem">
              Skills
            </NavLink>
            <a
              href="https://drive.google.com/file/d/1M-4HgNr6d9TdaTWyLfwZCbT_KSL-fIJp/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="py-2 px-3 bg-white text-gray-800 flex gap-2 items-center font-bold text-base rounded-xl"
            >
              resume
              <AiOutlineCloudDownload className="text-xl" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
