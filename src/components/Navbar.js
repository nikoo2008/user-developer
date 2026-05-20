import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div className="navbar">

      <h2>Developer Profiles</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/add">Add Profile</Link>

      </div>

    </div>

  );
}

export default Navbar;