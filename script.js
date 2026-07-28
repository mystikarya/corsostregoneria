let i = 0;
let ans = new Array(questions.length).fill(null);

const app = document.getElementById("app");


const backgrounds = {
    home: "assets/bg1.png",
    quiz: "assets/bg2.png",
    lessons: "assets/bg4.png",
    result: "assets/bg3.png"
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

            <button id="grimorioButton" onclick="location.href='grimorio.html'">
            GRIMORIO</button>

            <button id="testButton">
                TEST
            </button>

        </div>`;

    document.getElementById("lessonsButton").onclick = () => {

        showLessons();

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

            <h1>Lezioni</h1>

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
        onclick="window.open('LINK', '_blank')">
    9. Laboratorio pratico: il tuo Rituale
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

} else {

    startScreen();

}


