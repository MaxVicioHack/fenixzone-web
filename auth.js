import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Usuario registrado
            const user = userCredential.user;
            document.getElementById("auth-message").textContent = "Registro exitoso.";
        })
        .catch((error) => {
            // Error al registrar
            const errorMessage = error.message;
            document.getElementById("auth-message").textContent = "Error: " + errorMessage;
        });
}

// Asegúrate de que esté disponible globalmente:
window.register = register;
