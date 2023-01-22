import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import {
  collection,
  getFirestore,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore/lite";
import { CreationFileValues, IRootState, IFile } from "../../interfaces";

export const getFiles = createAsyncThunk(
  "getFiles",
  async (_, { getState }) => {
    const state = getState();
    const { userId } = (state as IRootState).auth;

    const db = getFirestore();
    const usersCol = collection(db, `users/${userId}/pictures`);
    const usersSnapshot = await getDocs(usersCol);
    const filesList = usersSnapshot.docs.map((d) => {
      return d.data() as IFile;
    });
    return filesList;
  },
);

export const createNewFile = createAsyncThunk(
  "createFile",
  async (data: CreationFileValues) => {
    const db = getFirestore();
    const { storageUrl, userId, fileName } = data;
    const fileRef = doc(collection(db, `users/${userId}/pictures`));
    const file = {
      fileId: fileRef.id,
      name: fileName,
      imgUrl: storageUrl,
      date: new Date().toDateString(),
    };

    await setDoc(fileRef, file);
    return file;
  },
);

export const uploadFile = createAsyncThunk(
  "createUser",
  async (selectedFile: File, { dispatch, getState }) => {
    const state = getState();
    const { userId } = (state as IRootState).auth;

    const fileName = selectedFile.name;

    const firestorage = getStorage();
    const storageRef = ref(firestorage, `users/${userId}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    await uploadTask;

    const storageUrl = await getDownloadURL(uploadTask.snapshot.ref);
    dispatch(createNewFile({ storageUrl, userId, fileName }));
  },
);
