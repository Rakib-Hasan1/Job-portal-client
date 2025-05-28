import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if(loading) {
    return <p className="text-center">Job Apply is loading......</p>;
  }

  if (!user) {
    return <Navigate to="/signIn" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
