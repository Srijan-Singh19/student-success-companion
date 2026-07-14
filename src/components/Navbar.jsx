import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import {FaMoon,FaSun,FaBell,FaUserCircle, FaGraduationCap,} from "react-icons/fa";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaGraduationCap className="navbar-logo" />

        <div className="logo-text">
          <h2>Student Success Companion</h2>
        </div>
      </div>
      <div className="navbar-right">

        <button
          className="nav-btn"
          onClick={toggleTheme}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        <button className="nav-btn">
          <FaBell />
        </button>

        <div className="profile">

          <FaUserCircle className="profile-icon" />

          <span>Srijan</span>

        </div>

      </div>

    </nav>
  );
}