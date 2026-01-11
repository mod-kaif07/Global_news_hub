import React from "react";
import "./Navbar.css";
import { use } from "react";
import { useEffect } from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">My App</div>
      <div className="nav-links">
        <a
          href="http://localhost:5000/api/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>

        <a
          href="http://localhost:5000/api/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        <a href="#">Help</a>
        <a href="#">Saved</a>
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
      </div>
    </div>
  );
};
