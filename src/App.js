import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddProfile from "./components/AddProfile";

function App() {

  const [profiles, setProfiles] = useState([]);

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              profiles={profiles}
              setProfiles={setProfiles}
            />
          }
        />

        <Route
          path="/add"
          element={
            <AddProfile
              profiles={profiles}
              setProfiles={setProfiles}
            />
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;