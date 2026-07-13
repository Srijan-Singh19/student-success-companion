import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function SettingsCard() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="settings-card">

      <div className="setting-item">
        <h3>🌙 Theme</h3>

        <button onClick={toggleTheme}>
          {theme === "light"
            ? "Switch to Dark"
            : "Switch to Light"}
        </button>
      </div>

      <div className="setting-item">
        <h3>🔔 Notifications</h3>
        <p>Coming Soon</p>
      </div>

      <div className="setting-item">
        <h3>🌍 Language</h3>
        <p>English</p>
      </div>

      <div className="setting-item">
        <h3>ℹ About</h3>
        <p>Student Success Companion v1.0</p>
        <p>Built with React ❤️</p>
      </div>

    </div>
  );
}