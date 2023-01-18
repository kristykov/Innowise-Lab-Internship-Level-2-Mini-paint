import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Gallery from "../components/Gallery";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <Gallery />
      </div>
    </>
  );
};

export default HomePage;
