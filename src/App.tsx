import React from "react";
import "./index.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Publications from "./components/Publications";
import Profile from "./components/Profile";
import Network from "./components/Network";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Publications />} />
            <Route path="/network" element={<Network />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
