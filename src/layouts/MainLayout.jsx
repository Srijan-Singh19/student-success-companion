import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app-layout ${theme}`}>
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}