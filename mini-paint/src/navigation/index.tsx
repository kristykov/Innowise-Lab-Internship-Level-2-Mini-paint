import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CanvasPage from "../pages/CanvasPage/CanvasPage";
import Register from "../pages/Authorisation/Register";
import Login from "../pages/Authorisation/Login";
import ProtectedRoute from "./ProtectedRoute";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/editor" element={<CanvasPage />} />
          <Route path="/editor/:id" element={<CanvasPage />} />
        </Route>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
