import SettingsCard from "../components/settings/SettingsCard";
import "../components/settings/Settings.css";

export default function Settings() {
  return (
    <div className="settings-page">
      <h1>⚙ Settings</h1>

      <SettingsCard />
    </div>
  );
}