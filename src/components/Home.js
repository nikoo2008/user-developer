import React, { useEffect, useState } from "react";
import axios from "axios";

import ProfileCard from "./ProfileCard";

function Home({ profiles, setProfiles }) {

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {

    if (profiles.length === 0) {
      fetchProfiles();
    }

  }, []);

  const fetchProfiles = async () => {

    try {

      setLoading(true);

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const updatedUsers = response.data.map((user) => ({
        ...user,
        github: `https://github.com/${user.username}`,
        linkedin: `https://linkedin.com/in/${user.username}`,
        role: "Full Stack Developer",
        skills: "React,NodeJS,MongoDB",
        followers: "1.2k",
        projects: 25
      }));

      setProfiles(updatedUsers);

      setLoading(false);

    }

    catch (err) {

      setError("Failed to fetch profiles");

      setLoading(false);

    }

  };

  const deleteProfile = (id) => {

    const updatedProfiles = profiles.filter(
      (user) => user.id !== id
    );

    setProfiles(updatedProfiles);
  };

  if (loading) {
    return <h1 className="message">Loading...</h1>;
  }

  if (error) {
    return <h1 className="message">{error}</h1>;
  }

  return (

    <div className="home-container">

      <h1 className="heading">
        Existing Developer Profiles
      </h1>

      <div className="profile-container">

        {profiles.map((user) => (

          <ProfileCard
            key={user.id}
            user={user}
            deleteProfile={deleteProfile}
          />

        ))}

      </div>

    </div>

  );
}

export default Home;