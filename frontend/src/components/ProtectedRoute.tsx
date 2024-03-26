import React from "react";
import { Navigate } from "react-router-dom";

type PropsType = {
  isLoggedIn: boolean;
  children: React.ReactNode;
};
const ProtectedRoute = ({ isLoggedIn, children }: PropsType) => {
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default ProtectedRoute;
