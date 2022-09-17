import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD0n-dvIBawqb7eUMhfMWcm_HbalrBRpp8",
    authDomain: "realtimechat-123e2.firebaseapp.com",
    databaseURL: "https://realtimechat-123e2-default-rtdb.firebaseio.com",
    projectId: "realtimechat-123e2",
    storageBucket: "realtimechat-123e2.appspot.com",
    messagingSenderId: "765639834041",
    appId: "1:765639834041:web:cdfb72bbb5880fad6a9e68"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)