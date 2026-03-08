document.addEventListener("DOMContentLoaded", function () {

loadHeader();
loadFooter();

});

function getBasePath(){

if(window.location.pathname.includes("/resources/html/")){
return "../../";
}

return "";

}

function loadHeader(){

const base = getBasePath();

fetch(base + "resources/html/header.html")
.then(res => res.text())
.then(data => {

document.getElementById("header").innerHTML = data;

const logo = document.querySelector(".logo");
if(logo){
logo.src = base + "resources/images/logo.png";
}

const homeLogo = document.getElementById("homeLogo");
if(homeLogo){
homeLogo.href = base + "index.html";
}

const navHome = document.getElementById("navHome");
if(navHome){
navHome.href = base + "index.html";
}

const navLab = document.getElementById("navLab");
if(navLab){
navLab.href = base + "lab/index.html";
}

const navStore = document.getElementById("navStore");
if(navStore){
navStore.href = base + "happy-pet-store.html";
}

});

}

function loadFooter(){

const base = getBasePath();

const year = new Date().getFullYear();

const footerText = document.getElementById("footerText");

if(footerText){
footerText.textContent =
`© ${year} Tester Academy — Todos los derechos reservados`;
}

const privacy = document.getElementById("privacyLink");

if(privacy){
privacy.href = base + "resources/html/privacy.html";
}

const terms = document.getElementById("termsLink");

if(terms){
terms.href = base + "resources/html/terms.html";
}

const social = document.getElementById("socialLinks");

if(social){

social.innerHTML = `

<a href="${base}index.html">
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