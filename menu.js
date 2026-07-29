document.addEventListener("DOMContentLoaded", () => {

    document.body.insertAdjacentHTML("beforeend", `

        <img id="menuButton"
             src="assets/iconopen.png"
             alt="Menu">

        <div id="menuOverlay"></div>

        <nav id="sideMenu">

            <a href="index.html">Home</a>

            <a href="index.html?lessons">
                Lezioni
            </a>

            <a href="rituali.html">
                Rituali
            </a>

            <a href="grimorio.html">Grimorio</a>


            <a href="testfinale.html">
                Test Finale
            </a>

        </nav>

    `);

    const menuButton = document.getElementById("menuButton");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");

    function openMenu() {

        sideMenu.classList.add("open");
        overlay.classList.add("show");

        menuButton.src = "assets/iconclose.png";

    }

    function closeMenu() {

        sideMenu.classList.remove("open");
        overlay.classList.remove("show");

        menuButton.src = "assets/iconopen.png";

    }

    menuButton.onclick = () => {

        if (sideMenu.classList.contains("open")) {

            closeMenu();

        } else {

            openMenu();

        }

    };

    overlay.onclick = closeMenu;

});