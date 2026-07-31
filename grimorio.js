const TOTAL_PAGES = 12;

const grimorio = document.getElementById("grimorio");


/* ===========================
   CREA LE PAGINE
=========================== */

for(let i = 1; i <= TOTAL_PAGES; i++){

    const page = document.createElement("div");

    page.className = "page";

    const img = document.createElement("img");

    img.src =
        `assets/grimorio/${String(i).padStart(3,"0")}.jpg`;

    img.alt = `Pagina ${i}`;

    img.loading = "lazy";

    page.appendChild(img);
    page.addEventListener("click",()=>{

    page.scrollIntoView({

        behavior:"smooth",

        block:"center"

    });

});

    grimorio.appendChild(page);

}


/* ===========================
   ANIMAZIONE SCROLL
=========================== */

const pages = document.querySelectorAll(".page");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }else{

            entry.target.classList.remove("active");

        }

    });

},{
    threshold:0.65
});

pages.forEach(page=>observer.observe(page));


/* ===========================
   PARALLASSE LEGGERA
=========================== */

window.addEventListener("scroll",()=>{

    const center = window.innerHeight / 2;

    pages.forEach(page=>{

        const rect = page.getBoundingClientRect();

        const distance = Math.abs(center - (rect.top + rect.height/2));

        const factor = Math.min(distance / center,1);

        const scale = 1 - (factor * 0.10);

        const opacity = 1 - (factor * 0.45);

        page.style.transform = "scale(1)"; // Nessuno zoom


        page.style.opacity =
            opacity;

        page.style.filter =
        `brightness(${1-factor*0.25})`;

    });

},{passive:true});


/* ===========================
   AVVIO
=========================== */

window.dispatchEvent(new Event("scroll"));
// Prima pagina già attiva all'avvio
pages[0].classList.add("active");
pages[0].style.transform = "scale(1)";
pages[0].style.opacity = "1";
pages[0].style.filter = "none";