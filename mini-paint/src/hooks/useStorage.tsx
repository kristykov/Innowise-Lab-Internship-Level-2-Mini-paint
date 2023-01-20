import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import firebase from "../firebase-config";
import "firebase/compat/storage";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");

  const userId = useSelector((state) => {
    return state.auth.userId;
  });

  const firestorage = firebase.storage();

  useEffect(() => {
    const storageRef = firestorage.ref(`users/${userId}/${file.name}`);
    const task = storageRef.put(file);
    task.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const storagUerl = await storageRef.getDownloadURL();
        setUrl(storagUerl);
      },
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
