const TOTAL_PAGES = 27;

let currentPage = 1;
let isChanging = false;

const currentImg = document.getElementById("currentPage");
const counter = document.getElementById("counter");

function getPage(page){

    return `assets/grimorio/${String(page).padStart(3,"0")}.jpg`;

}

function updateCounter(){

    counter.textContent =
        `Pagina ${currentPage} / ${TOTAL_PAGES}`;

}

function showPage(page){

    currentImg.classList.remove("active");

    setTimeout(()=>{

        currentImg.src = getPage(page);

        currentImg.classList.add("active");

    },350);

}

function changePage(direction){

    if(isChanging) return;

    let page = currentPage + direction;

    if(page<1 || page>TOTAL_PAGES) return;

    isChanging = true;

    currentPage = page;

    updateCounter();

    showPage(currentPage);

    setTimeout(()=>{

        isChanging = false;

    },700);

}

currentImg.src = getPage(currentPage);

currentImg.onload = ()=>{

    currentImg.classList.add("active");

};

updateCounter();

const previousButtons = [
    document.getElementById("prevButton"),
    document.getElementById("prevMobile")
];

const nextButtons = [
    document.getElementById("nextButton"),
    document.getElementById("nextMobile")
];

previousButtons.forEach(btn =>
    btn.addEventListener("click", () => changePage(-1))
);

nextButtons.forEach(btn =>
    btn.addEventListener("click", () => changePage(1))
);