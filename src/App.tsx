import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Publications from "./components/Publications";
import Profile from "./components/Profile";
import Network from "./components/Network";
import { UserModel } from "./types";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Publications />} />
            <Route path="/network" element={<Network />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
