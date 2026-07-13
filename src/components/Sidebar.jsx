import { NavLink } from "react-router-dom";
import "./Sidebar.css"

export default function Sidebar(){
    return(
        <aside className="sidebar">
            <NavLink to ="/"  className={({ isActive }) =>
    isActive ? "active-link" : ""
  }>Dashboard</NavLink>
            <NavLink to="/tasks" className={({ isActive }) =>
    isActive ? "active-link" : ""
  }>Tasks</NavLink>
            <NavLink to="/notes" className={({ isActive }) =>
    isActive ? "active-link" : ""
  }>Notes</NavLink>
            <NavLink to="/expenses" className={({ isActive }) =>
    isActive ? "active-link" : ""
  }>Expenses</NavLink>
            <NavLink to="/weather" className={({ isActive }) =>
    isActive ? "active-link" : ""
  }>Weather</NavLink>
            <NavLink to="/profile" className={({ isActive }) =>
    isActive ? "active-link" : ""
  }>Profile</NavLink>
            <NavLink to="/settings" className={({ isActive }) =>
    isActive ? "active-link" : ""
  }>Settings</NavLink>
        </aside>
    );
}