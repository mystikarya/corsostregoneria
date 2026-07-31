document.addEventListener("DOMContentLoaded", () => {

    document.body.insertAdjacentHTML("beforeend", `

        <img id="menuButton"
             src="assets/iconopen.png"
             alt="Menu">

        <div id="menuOverlay"></div>

        <nav id="sideMenu">

            <a href="index.html">
                Home
            </a>

            <a href="index.html?lessons">
                Lezioni
            </a>

            <a href="index.html?rituals">
                Rituali
            </a>

            <a href="sigilli.html">
                Sigilli
            </a>

            <a href="grimorio.html">
                Grimorio
            </a>

            <a href="testfinale.html">
                Test Finale
            </a>

            <a href="https://drive.google.com/drive/folders/1UCIovmoxB9E8OBDpnUDIzTvk_1yHTRtg?usp=drive_link"
               target="_blank"
               rel="noopener noreferrer">
                Tutto il materiale + approfondimenti
            </a>

            <a href="#" id="logoutButton">
                Logout
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

    menuButton.addEventListener("click", () => {

        if (sideMenu.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }

    });

    overlay.addEventListener("click", closeMenu);

    document.querySelectorAll("#sideMenu a").forEach(link => {

        link.addEventListener("click", () => {

            if (link.id !== "logoutButton") {
                closeMenu();
            }

        });

    });

});