document.addEventListener("DOMContentLoaded", async () => {
    await loadHeader();
    loadFooter();
    await loadSidebar();
    await loadContent("home");
});

async function loadHeader() {
    const response = await fetch("../resources/html/header.html");
    const html = await response.text();
    document.getElementById("header").innerHTML = html;

    const logo = document.querySelector(".logo");
    if (logo) {
        logo.src = "../resources/images/logo.png";
    }

    const homeLogo = document.getElementById("homeLogo");
    if (homeLogo) {
        homeLogo.href = "../index.html";
    }

    const navHome = document.getElementById("navHome");
    if (navHome) {
        navHome.href = "../index.html";
    }

    const navLab = document.getElementById("navLab");
    if (navLab) {
        navLab.href = "index.html";
    }

    const navStore = document.getElementById("navStore");
    if (navStore) {
        navStore.href = "../happy-pet/index.html";
    }
}

function loadFooter() {
    const year = new Date().getFullYear();

    const footerText = document.getElementById("footerText");
    if (footerText) {
        footerText.textContent = `© ${year} Tester Academy — Todos los derechos reservados`;
    }

    const privacy = document.getElementById("privacyLink");
    if (privacy) {
        privacy.href = "../resources/html/privacy.html";
    }

    const terms = document.getElementById("termsLink");
    if (terms) {
        terms.href = "../resources/html/terms.html";
    }

    const social = document.getElementById("socialLinks");
    if (social) {
        social.innerHTML = `
            <a href="../index.html" title="Home">
                <i class="fa-solid fa-house"></i>
            </a>
            <a href="https://facebook.com/testeracademy" target="_blank">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://instagram.com/testeracademy" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://youtube.com/@testeracademy" target="_blank">
                <i class="fa-brands fa-youtube"></i>
            </a>
        `;
    }
}

async function loadSidebar() {
    const response = await fetch("resources/html/sidebar.html");
    const html = await response.text();
    document.getElementById("sidebar").innerHTML = html;
}

async function loadContent(fileName){

    const response = await fetch(`resources/html/${fileName}.html`);
    const html = await response.text();

    document.getElementById("content").innerHTML = html;

    document.querySelectorAll(".lab-link")
        .forEach(link => link.classList.remove("active"));

    const activeLink =
        document.querySelector(`[onclick="loadContent('${fileName}')"]`);

    if(activeLink){
        activeLink.classList.add("active");
    }

}