import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import OurStory from "./pages/OurStory";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Start from "./dashboard/main/Start";
import House from "./dashboard/main/House";
import Explore from "./dashboard/main/Explore";
import Journal from "./dashboard/main/Journal";
import Insights from "./dashboard/main/Insights";
import Community from "./dashboard/main/Community";
import Settings from "./dashboard/main/Settings";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/about" element={<Navbar />} />
          <Route path="/story" element={<Navbar />} />
          <Route path="/works" element={<Navbar />} />
          <Route path="/signup" element={<Navbar />} />
          <Route path="/login" element={<Navbar />} />
          <Route path="/dashboard/*" element={<Start />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/works" element={<HowItWorks />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<House/>} />
          <Route path="/dashboard/explore" element={<Explore/>} />
          <Route path="/dashboard/journal" element={<Journal/>} />
          <Route path="/dashboard/insights" element={<Insights/>} />
          <Route path="/dashboard/community" element={<Community/>} />
          <Route path="/dashboard/settings" element={<Settings/>} />
        </Routes>
      </div>
     
    </Router>
  );
}

export default App;
