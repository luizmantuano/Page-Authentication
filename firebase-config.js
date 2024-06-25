// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyDbX3rXPdEk0ttkwbpTAznDnGq65u4nMw8',
  authDomain: 'authentication-54b8c.firebaseapp.com',
  projectId: 'authentication-54b8c',
  storageBucket: 'authentication-54b8c.appspot.com',
  messagingSenderId: '307125873984',
  appId: '1:307125873984:web:97c453fec2c78935e11ea5',
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };