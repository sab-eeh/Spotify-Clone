import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/LoginPage";
import SignUp from "./components/SignUpPage";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar is always visible. If you want conditional visibility, use Layout.jsx */}
        <Routes>
          <Route path="/home" element={<><Navbar /><Home /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Redirect unknown paths to home */}
          <Route path="*" element={<><Navbar /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
