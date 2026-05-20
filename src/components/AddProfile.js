import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProfile({ profiles, setProfiles }) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    github: "",
    linkedin: "",
    role: "",
    skills: "",
    followers: "",
    projects: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const validateForm = () => {

    const nameRegex = /^[A-Za-z ]+$/;

    const usernameRegex = /^[A-Za-z0-9_]+$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      formData.name === "" ||
      formData.username === "" ||
      formData.email === ""
    ) {

      setError("Required fields are missing");

      return false;
    }

    if (!nameRegex.test(formData.name)) {

      setError("Name should contain only alphabets");

      return false;
    }

    if (!usernameRegex.test(formData.username)) {

      setError("Username should not contain special characters");

      return false;
    }

    if (!emailRegex.test(formData.email)) {

      setError("Invalid email format");

      return false;
    }

    setError("");

    return true;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validateForm()) return;

    const newProfile = {
      id: profiles.length + 1,
      ...formData
    };

    setProfiles([...profiles, newProfile]);

    navigate("/");
  };

  return (

    <div className="form-wrapper">

      <div className="form-container">

        <h2>Add Developer</h2>

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
          />

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="role"
            placeholder="Developer Role"
            onChange={handleChange}
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills (React,NodeJS)"
            onChange={handleChange}
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub Link"
            onChange={handleChange}
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn Link"
            onChange={handleChange}
          />

          <input
            type="number"
            name="followers"
            placeholder="Followers"
            onChange={handleChange}
          />

          <input
            type="number"
            name="projects"
            placeholder="Projects"
            onChange={handleChange}
          />

          <button type="submit">
            Add Profile
          </button>

        </form>

      </div>

    </div>

  );
}

export default AddProfile;