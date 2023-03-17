import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const UserProtected = ({ children }) => {
  const { accessToken } = useSelector((state) => state.auth);
  const location = useLocation();
  if (!accessToken) {
    const redirectUrl = `/?redirectUrl=${location.pathname}`;
    return <Navigate to={redirectUrl} replace />;
  }
  return children;
};

export default UserProtected;
