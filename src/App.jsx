import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Dashboard from "./pages/DashBoard";
import Performance from "./pages/Performanace";
import Leaderboard from "./pages/Leaderboard";
import Certificate from "./pages/Certificate";
import Practice from "./pages/PracticePage";
import Jobs from "./pages/Job";

function App() {
  return (
   <>
     <Navbar/>
      <div className="min-h-screen bg-gray-100 pt-6 px-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
