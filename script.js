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

            <br>
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

    const lessons = [
        { title: "1. Introduzione alla Ritualistica",        url: "https://youtu.be/BBVlB_I_s1g" },
        { title: "2. Le principali tradizioni",              url: "https://youtu.be/97ym9PZi88Q" },
        { title: "3. Stregoneria evocativa e non evocativa", url: "https://youtu.be/-rYgPhRFruI" },
        { title: "4. I falsi miti sulla Stregoneria",        url: "https://youtu.be/qSgCu4ton_I" },
        { title: "5. Il libero arbitrio",                    url: "https://youtu.be/eFCt_T1A4E4" },
        { title: "6. Le fasi di un rituale",                 url: "https://youtu.be/VYrjQKvYm-g" },
        { title: "7. Lunazione e giorni: quando praticare",  url: "https://youtu.be/D0hjAlMG7oQ" },
        { title: "8. Introduzione alla Divinazione",         url: "https://youtu.be/Z_QFPJAMSug" },
        { title: "9. Sigilli: cosa sono e come si creano",   url: "https://youtu.be/Dm8eclBxYkYkY" },
        { title: "10. Laboratorio pratico: il tuo Rituale",  url: "https://youtu.be/t6TU4vT6spE" }
    ];

    const cards = lessons.map((lesson, i) => `
        <a class="lesson-card" href="${lesson.url}" style="animation-delay:${i * 0.06}s">
            <img src="assets/lezione${i + 1}.webp" alt="Lezione ${i + 1}" loading="lazy">
            <span class="lesson-card-title">${lesson.title}</span>
        </a>
    `).join("");

    app.innerHTML = `
        <div class="page-container">

            <h1>LEZIONI</h1>

            <div class="lessons-list">
                ${cards}

                <a class="lesson-card" href="testfinale.html"
                   style="animation-delay:${lessons.length * 0.06}s">
                    <img src="assets/testfinalelezione.png" alt="Test finale" loading="lazy">
                    <span class="lesson-card-title">Test finale</span>
                </a>
            </div>

            <button onclick="startScreen()">
                ❮ Torna al menu
            </button>

        </div>`;
}

function showRituals() {

    document.body.className = "home";
    changeBackground("rituals");

    const rituals = [
        { title: "Protezione & Purificazione",              url: "https://youtu.be/_hbF3AJRdNE" },
        { title: "Amore",                                   url: "https://youtu.be/t6TU4vT6spE" },
        { title: "Ossessione",                              url: "https://youtu.be/jqm9aC9I7h0" },
        { title: "Separazione",                             url: "https://youtube.com/shorts/jUV--b6haDk" },
        { title: "Soldi & Fortuna",                         url: "https://youtube.com/shorts/Nx6zQOUPwMw" },
        { title: "Come ritualizzare le candele",            url: "https://youtube.com/shorts/0jOf3j0wGNg" },
        { title: "Subliminali di potenziamento energetico", url: "https://youtube.com/playlist?list=PL8jyzCiNou5a4oE9P92JQoI8S35CtpOIB&si=iBvtNd-l5LFtrPF4" },
        { title: "Approfondimenti",                         url: "https://www.youtube.com/playlist?list=PL8jyzCiNou5b49wqHlLIlZXRCHJ2bD8-z" }
    ];

    const cards = rituals.map((ritual, i) => `
        <a class="lesson-card" href="${ritual.url}" style="animation-delay:${i * 0.06}s">
            <img src="assets/ritual${i + 1}.webp" alt="${ritual.title}" loading="lazy">
            <span class="lesson-card-title">${ritual.title}</span>
        </a>
    `).join("");

    app.innerHTML = `
        <div class="page-container">

            <h1>RITUALI</h1>

           <div class="lessons-list rituals-list">
    ${cards}
</div>

            <button onclick="startScreen()">
                ❮ Torna al menu
            </button>

        </div>`;
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


