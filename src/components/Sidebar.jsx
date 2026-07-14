import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import {FaHome,FaTasks,FaStickyNote,FaWallet,FaClock,FaUser,FaCog,FaGraduationCap,} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <FaGraduationCap className="logo-icon" />
        <h2>SSC</h2>
        <p>Student Dashboard</p>
      </div>

      <nav className="sidebar-links">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          <FaTasks />
          Tasks
        </NavLink>

        <NavLink
          to="/notes"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          <FaStickyNote />
          Notes
        </NavLink>

        <NavLink
          to="/expenses"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          <FaWallet />
          Expenses
        </NavLink>

        <NavLink
          to="/studycenter"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          <FaClock />
          Study Center
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          <FaUser />
          Profile
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          <FaCog />
          Settings
        </NavLink>

      </nav>

      <div className="sidebar-footer">
        <p>Keep Learning 🚀</p>
        <small>React • MERN • DSA</small>
      </div>

    </aside>
  );
}