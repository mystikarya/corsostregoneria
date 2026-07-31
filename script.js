let i = 0;
let ans = new Array(questions.length).fill(null);

const app = document.getElementById("app");


const backgrounds = {
    home: "assets/bg1.png",
    quiz: "assets/bg2.png",
    lessons: "assets/bg4.png",
    result: "assets/bg3.png",
    rituals: "assets/bg5.png"
};



function changeBackground(scene) {

    const fade = document.getElementById("bgFade");

    fade.style.background =
        `radial-gradient(circle at center,
                rgba(255,255,255,.02) 0%,
                rgba(255,255,255,0) 40%),
             linear-gradient(rgba(0,0,0,.55),
                rgba(0,0,0,.80)),
             url("${backgrounds[scene]}")`;

    fade.style.backgroundSize = "cover";
    fade.style.backgroundPosition = "center center";
    fade.style.backgroundRepeat = "no-repeat";

    fade.style.opacity = "1";

    setTimeout(() => {
        document.body.style.setProperty(
            "--bg",
            `url("${backgrounds[scene]}")`
        );
    }, 500);

    setTimeout(() => {
        fade.style.opacity = "0";
    }, 550);

}



function startScreen() {

    document.body.className = "home";
    changeBackground("home");

    app.innerHTML = `
        <div class="start-screen corso-screen">

            <h1 class="corso" style="line-height:0.9!important;">Corso di
            <br>STREGONERIA</h1>

            <br><p>
                Benvenuta/o!
                <br>Oggi inizia il tuo percorso magico.
                <br>Segui le lezioni e affronta il test finale
                <br>per ottenere il Certificato di Stregoneria!
            </p>
            <button id="lessonsButton">
                LEZIONI
            </button>

            <button id="ritualsButton">
                RITUALI
            </button>

            <button id="sigilsButton" onclick="location.href='sigilli.html'">
                SIGILLI
            </button>

            <button id="grimorioButton" onclick="location.href='grimorio.html'">
            GRIMORIO</button>

            <button id="testButton">
                TEST
            </button>

        </div>`;

    document.getElementById("lessonsButton").onclick = () => {

        showLessons();

    };

    document.getElementById("ritualsButton").onclick = () => {

        showRituals();
    };

    document.getElementById("testButton").onclick = () => {

        location.href = "testfinale.html";

    };

}

function showLessons() {

    document.body.className = "home";
    changeBackground("lessons");

    app.innerHTML = `
        <div class="page-container">

            <h1>LEZIONI</h1>

<button class="lesson-button"
        onclick="window.open('https://youtu.be/KF_WKo94QVY', '_blank')">
    1. Introduzione alla Ritualistica
</button>

<button class="lesson-button"
        onclick="window.open('https://youtu.be/ghTIrXwCwwg', '_blank')">
    2. Le principali tradizioni
</button>

<button class="lesson-button"
        onclick="window.open('https://youtu.be/-rYgPhRFruI', '_blank')">
    3. Stregoneria evocativa e non evocativa
</button>

<button class="lesson-button"
        onclick="window.open('https://youtu.be/qSgCu4ton_I', '_blank')">
    4. I falsi miti sulla Stregoneria
</button>

<button class="lesson-button"
        onclick="window.open('https://youtu.be/eFCt_T1A4E4', '_blank')">
    5. Il libero arbitrio
</button>

<button class="lesson-button"
        onclick="window.open('https://youtu.be/VYrjQKvYm-g', '_blank')">
    6. Le fasi di un rituale
</button>

<button class="lesson-button"
        onclick="window.open('https://youtu.be/Im0ipO4QCow', '_blank')">
    7. Quando praticare
</button>

<button class="lesson-button"
        onclick="window.open('https://youtu.be/Z_QFPJAMSug', '_blank')">
    8. Introduzione alla Divinazione
</button>

<button class="lesson-button"
        onclick="window.open('https://youtu.be/Dm8eclBxYkYkY', '_blank')">
    9. Sigilli: cosa sono e come si creano
</button>

<button class="lesson-button"
        onclick="window.open('LINK', '_blank')">
    10. Laboratorio pratico: il tuo Rituale
</button>

<button class="lesson-button"
        onclick="location.href='testfinale.html'">
    Test finale
</button>

            <button onclick="startScreen()">
                ❮ Torna al menu
            </button>

        </div>`;

}

function showRituals() {

    document.body.className = "home";
    changeBackground("rituals");

    app.innerHTML = `
        <div class="page-container">

            <h1>RITUALI</h1>

<button class="lesson-button"
        onclick="window.location.href='https://youtu.be/_hbF3AJRdNE'">
    Protezione & Purificazione
</button>

<button class="lesson-button"
        onclick="window.location.href='LINK2'">
    Amore
</button>

<button class="lesson-button"
        onclick="window.location.href='https://youtu.be/7xJBILu6-A8'">
    Ossessione
</button>

<button class="lesson-button"
        onclick="window.location.href='https://youtu.be/518lBjjvELk'">
    Separazione
</button>

<button class="lesson-button"
        onclick="window.location.href='https://youtube.com/shorts/Nx6zQOUPwMw'">
    Soldi & Fortuna
</button>

<button class="lesson-button"
        onclick="window.location.href='https://'">
    Come ritualizzare le candele
</button>

<button class="lesson-button"
        onclick="window.location.href='https://youtube.com/playlist?list=PL8jyzCiNou5a4oE9P92JQoI8S35CtpOIB&si=iBvtNd-l5LFtrPF4'">
    Subliminali di potenziamento energetico
</button>

<button class="lesson-button"
        onclick="window.location.href='https://www.youtube.com/playlist?list=PL8jyzCiNou5b49wqHlLIlZXRCHJ2bD8-z'">
    Approfondimenti
</button>

<button onclick="startScreen()">
    ❮ Torna al menu
</button>

        </div>
    `;

}

app.style.transition = "opacity .25s ease, transform .25s ease";

document.body.className = "home";
changeBackground("home");

const params = new URLSearchParams(location.search);

if (params.has("lessons")) {

    showLessons();

} else if (params.has("rituals")) {

    showRituals();

} else {

    startScreen();

}


