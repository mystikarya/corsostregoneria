import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const error = document.getElementById("error");

onAuthStateChanged(auth, (user) => {

    if (user) {

        window.location.replace("index.html");

    }

});

async function login() {

    if (loginButton.disabled) return;

    error.textContent = "";

    loginButton.disabled = true;
    loginButton.classList.add("hide");

    try {

        await signInWithEmailAndPassword(

            auth,

            email.value.trim(),

            password.value

        );

        window.location.replace("index.html");

    }

    catch (e) {

        loginButton.disabled = false;
        loginButton.classList.remove("hide");

        switch (e.code) {

            case "auth/invalid-email":
                error.textContent = "Email non valida.";
                break;

            case "auth/invalid-credential":
                error.textContent = "Email o password errati.";
                break;

            case "auth/user-disabled":
                error.textContent = "Account disabilitato.";
                break;

            case "auth/too-many-requests":
                error.textContent = "Troppi tentativi. Riprova più tardi.";
                break;

            default:
                error.textContent = "Impossibile effettuare il login.";

        }

    }

}

loginButton.addEventListener("click", login);

password.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        login();

    }

});