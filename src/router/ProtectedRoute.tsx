import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import routes from "./routes";

type Props = {
  rest: any;
};

const ProtectedRoute = ({ rest }: Props) => {
  let location = useLocation();
  const auth = true;

  if (!auth)
    return <Navigate to={routes.login} state={{ from: location }} replace />;

  return <Outlet {...rest} />;
};

export default ProtectedRoute;
