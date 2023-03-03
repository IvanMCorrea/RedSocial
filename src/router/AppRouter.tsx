import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import routes from "./routes";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Network from "../pages/Network";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path={routes.home} element={<Main />}>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.network} element={<Network />} />
            <Route path={routes.profile} element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
