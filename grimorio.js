const TOTAL_PAGES = 12;

const grimorio = document.getElementById("grimorio");

let loadedImages = 0;
const pages = [];

/* ===========================
   CREA LE PAGINE
=========================== */

for (let i = 1; i <= TOTAL_PAGES; i++) {

    const page = document.createElement("div");
    page.className = "page";

    const img = document.createElement("img");

    img.src = `assets/grimorio/${String(i).padStart(3, "0")}.jpg`;
    img.alt = `Pagina ${i}`;

    img.loading = "eager";
    img.decoding = "async";

    img.onload = () => {

        loadedImages++;

        if (loadedImages === TOTAL_PAGES) {

            startReader();

        }

    };

    img.onerror = () => {

        loadedImages++;

        if (loadedImages === TOTAL_PAGES) {

            startReader();

        }

    };

    page.appendChild(img);

    page.addEventListener("click", () => {

        page.scrollIntoView({

            behavior: "smooth",
            block: "center"

        });

    });

    grimorio.appendChild(page);
    pages.push(page);

}

/* ===========================
   AVVIO
=========================== */

function startReader() {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            entry.target.classList.toggle(
                "active",
                entry.isIntersecting
            );

        });

    }, {
        threshold: 0.65
    });

    pages.forEach(page => observer.observe(page));

    window.addEventListener("scroll", updatePages, {
        passive: true
    });

    updatePages();

    if (pages.length) {

        pages[0].classList.add("active");
        pages[0].style.opacity = "1";
        pages[0].style.filter = "none";
        pages[0].style.transform = "scale(1)";

    }

    requestAnimationFrame(() => {

        document.body.classList.add("loaded");

    });

}

/* ===========================
   EFFETTO SCROLL
=========================== */

function updatePages() {

    const center = window.innerHeight / 2;

    pages.forEach(page => {

        const rect = page.getBoundingClientRect();

        const distance = Math.abs(
            center - (rect.top + rect.height / 2)
        );

        const factor = Math.min(distance / center, 1);

        page.style.transform = "scale(1)";
        page.style.opacity = 1 - factor * 0.45;
        page.style.filter = `brightness(${1 - factor * 0.25})`;

    });

}