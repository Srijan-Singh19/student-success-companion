import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>Student Success Companion</h2>

      <div className="user">
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
