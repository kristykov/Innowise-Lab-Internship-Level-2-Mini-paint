import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Gallery from "../components/Gallery";

const HomePage = () => {
  const [file, setFile] = useState<File | File[]>([]);
  const [error, setError] = useState("");

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] instanceof File) {
      const selectedFile = e.target.files[0];
      if (
        selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg"
      ) {
        setFile(selectedFile);
        setError("");
      } else {
        setFile([]);
        setError("Invalid file type, only png and jpeg are allowed");
      }
    }
  };
  console.log("FILE:", file);
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar changeHandler={fileHandler} error={error} file={file} />
        <Gallery />
      </div>
    </>
  );
};

export default HomePage;
