import ProfileCard from "../components/profile/ProfileCard";
import "../components/profile/Profile.css";

export default function Profile() {
  return (
    <div className="profile-page">
      <h1>👤 My Profile</h1>

      <ProfileCard />
    </div>
  );
}