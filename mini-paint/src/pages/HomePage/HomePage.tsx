import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import { useAppDispatch } from "../../hooks/hooks";
import { uploadFile, getFiles } from "../../store/files/filesThunk";
import { logOut } from "../../store/auth/authSlice";
import { searchByName, isLoading } from "../../store/files/filesSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const loading = useSelector(isLoading);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getFiles());
  }, []);

  const fileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] instanceof File) {
      const selectedFile = e.target.files[0];
      if (
        selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg"
      ) {
        setError("");
        try {
          await dispatch(uploadFile(selectedFile)).unwrap();
        } catch (err) {
          console.log(err.message);
        }
      } else {
        setError("Invalid file type, only png and jpeg are allowed");
      }
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("userId");
    dispatch(logOut());
    navigate("/login");
  };

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = (e.currentTarget as HTMLInputElement).value;
    dispatch(searchByName(input));
  };

  const createNewCanvas = () => {
    navigate("/editor");
  };

  const openCanvas = (id: string) => {
    navigate(`/editor/${id}`);
  };

  return (
    <>
      <Header logoutHandler={logoutHandler} searchHandler={searchHandler} />
      {loading && (
        <ClipLoader
          color="#fff"
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      <div className="container">
        <Sidebar
          changeHandler={fileHandler}
          error={error}
          createNewCanvas={createNewCanvas}
        />
        <Gallery openCanvas={openCanvas} />
      </div>
    </>
  );
};

export default HomePage;
