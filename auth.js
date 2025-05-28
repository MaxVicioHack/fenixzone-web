// auth.js
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const auth = getAuth();

window.register = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("auth-message").textContent = "Registro exitoso.";
    })
    .catch((error) => {
      document.getElementById("auth-message").textContent = error.message;
    });
};

window.login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("auth-section").classList.add("hidden");
      document.getElementById("user-section").classList.remove("hidden");
      document.getElementById("user-email").textContent = userCredential.user.email;
    })
    .catch((error) => {
      document.getElementById("auth-message").textContent = error.message;
    });
};

window.logout = () => {
  signOut(auth).then(() => {
    document.getElementById("auth-section").classList.remove("hidden");
    document.getElementById("user-section").classList.add("hidden");
    document.getElementById("user-email").textContent = "";
  });
};
