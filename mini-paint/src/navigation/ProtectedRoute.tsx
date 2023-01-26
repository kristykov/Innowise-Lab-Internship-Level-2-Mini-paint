import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { isAuthenticated, getUserId } from "../store/auth/authSlice";

const ProtectedRoute = () => {
  const isAuth = useSelector(isAuthenticated);
  const hasUserId = useSelector(getUserId);

  if (!isAuth && !hasUserId) {
    return (
      <div style={{ margin: "200px" }}>
        <h2>Unauthorized :(</h2>{" "}
        <span>
          <NavLink style={{ color: "#fff" }} to="/login">
            Login
          </NavLink>{" "}
          to gain access
        </span>
      </div>
    );
  }
  return <Outlet />;
};

export default ProtectedRoute;
