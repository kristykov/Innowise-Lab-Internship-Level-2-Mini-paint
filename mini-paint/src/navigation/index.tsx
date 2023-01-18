import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CanvasPage from "../pages/CanvasPage";
import Register from "../pages/Register";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/editor" element={<CanvasPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
