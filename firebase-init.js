// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

const firebaseConfig = {
  apiKey: "AQUI_TU_API_KEY",
  authDomain: "AQUI_TU_AUTH_DOMAIN",
  projectId: "AQUI_TU_PROJECT_ID",
  storageBucket: "AQUI_TU_STORAGE_BUCKET",
  messagingSenderId: "AQUI_TU_SENDER_ID",
  appId: "AQUI_TU_APP_ID"
};

initializeApp(firebaseConfig);
