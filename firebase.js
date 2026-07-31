import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyA91bei9WWLCdhHAmjjugnbZZzmucUD_vk",

    authDomain: "stregoneria-corso.firebaseapp.com",

    projectId: "stregoneria-corso",

    storageBucket: "stregoneria-corso.firebasestorage.app",

    messagingSenderId: "932386258134",

    appId: "1:932386258134:web:cd134f3660a3636da05d77"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };