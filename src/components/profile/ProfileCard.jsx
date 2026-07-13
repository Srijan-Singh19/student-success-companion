import SkillBadge from "./SkillBadge";

export default function ProfileCard() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Git",
    "GitHub"
  ];

  return (
    <div className="profile-card">

      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="profile-image"
      />

      <h2>Srijan Singh</h2>

      <p><strong>College:</strong> KIET Group of Institutions</p>

      <p><strong>Branch:</strong> Information Technology</p>

      <p><strong>Year:</strong> 2nd Year</p>

      <p><strong>Email:</strong> srijan@example.com</p>

      <p><strong>GitHub:</strong> github.com/Srijan-Singh19</p>

      <p><strong>LinkedIn:</strong> linkedin.com/in/srijan</p>

      <h3>Skills</h3>

      <div className="skills-container">

        {skills.map((skill) => (
          <SkillBadge
            key={skill}
            skill={skill}
          />
        ))}

      </div>

      <button className="edit-btn">
        Edit Profile
      </button>

    </div>
  );
}