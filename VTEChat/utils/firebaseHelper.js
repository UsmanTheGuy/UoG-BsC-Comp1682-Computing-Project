// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAL8Um62wcokGOa2-9E5KMvoeqV47N5zgI",
    authDomain: "vte-chat-app.firebaseapp.com",
    projectId: "vte-chat-app",
    storageBucket: "vte-chat-app.appspot.com",
    messagingSenderId: "789404314313",
    appId: "1:789404314313:web:ccb2c83da23c5c6d743b18",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};