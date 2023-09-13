import React from "react";
import { Route, Routes } from "react-router-dom";

import Signup from "./Components/Signup";
import Login from "./Components/Login";
import LandingPage from "./Components/LandingPage";
import { FaCouch } from "react-icons/fa";
import CoursesPage from "./Components/CoursesPage";
import CustomVideoPlayer from "./Components/CustomVideoPlayer";



function App() {
  
  return (

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route exact path="/course" element={<CoursesPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/video" element={<CustomVideoPlayer  />} />

      
      
    </Routes>
  );
}

export default App;
