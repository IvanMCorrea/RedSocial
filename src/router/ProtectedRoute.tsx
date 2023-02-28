import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUserInfo } from "../api/auth";
import routes from "./routes";

const ProtectedRoute = ({ rest }: any) => {
  let location = useLocation();
  let token = localStorage.getItem("token");
  if (!token)
    return <Navigate to={routes.login} state={{ from: location }} replace />;

  return <Outlet {...rest} />;
};

export default ProtectedRoute;
