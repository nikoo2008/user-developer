import React from "react";

function ProfileCard({ user, deleteProfile }) {

  const skillsArray = user.skills
    ? user.skills.split(",")
    : ["React", "NodeJS", "MongoDB"];

  return (

    <div className="profile-card">

      <div className="top-section">

        <img
          src={`https://api.dicebear.com/7.x/bottts/svg?seed=${user.username}`}
          alt="profile"
        />

        <h3>{user.name}</h3>

        <div className="username">
          @{user.username}
        </div>

      </div>

      <div className="info-box">

        <p>📧 {user.email}</p>

        <p>
          💻 {user.role || "Full Stack Developer"}
        </p>

      </div>

      <div className="skills-section">

        {skillsArray.map((skill, index) => (

          <span
            className="skill"
            key={index}
          >
            {skill}
          </span>

        ))}

      </div>

      <div className="stats-box">

        <div>
          <h4>
            {user.projects || 25}
          </h4>

          <p>Projects</p>
        </div>

        <div>
          <h4>
            {user.followers || "1.2k"}
          </h4>

          <p>Followers</p>
        </div>

      </div>

      <div className="socials">

        <a
          href={
            user.github.startsWith("http")
              ? user.github
              : `https://${user.github}`
          }
          target="_blank"
          rel="noreferrer"
        >

          <button className="social-btn github">
            GitHub
          </button>

        </a>

        <a
          href={
            user.linkedin.startsWith("http")
              ? user.linkedin
              : `https://${user.linkedin}`
          }
          target="_blank"
          rel="noreferrer"
        >

          <button className="social-btn linkedin">
            LinkedIn
          </button>

        </a>

      </div>

      <button
        className="delete-btn"
        onClick={() => deleteProfile(user.id)}
      >
        Delete Profile
      </button>

    </div>

  );
}

export default ProfileCard;