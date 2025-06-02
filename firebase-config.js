
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4D7nN5_zo8VeMrwl3TE3mHHwA_8ztfNA",
  authDomain: "taoyeuthuong-d727b.firebaseapp.com",
  projectId: "taoyeuthuong-d727b",
  storageBucket: "taoyeuthuong-d727b.appspot.com",
  messagingSenderId: "51260858438",
  appId: "1:51260858438:web:65f409dfe95b57cfbfea47",
  measurementId: "G-SC946JNQCD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, collection, addDoc, getDoc, doc, storage, ref, uploadBytes, getDownloadURL };
