import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

document.addEventListener("click", async (e) => {

    const logoutButton = e.target.closest("#logoutButton");

    if (!logoutButton) return;

    e.preventDefault();

    logoutButton.style.pointerEvents = "none";
    logoutButton.textContent = "Disconnessione...";

    try {

        await signOut(auth);

    } catch (error) {

        console.error("Errore durante il logout:", error);

    } finally {

        window.location.replace("login.html");

    }

});