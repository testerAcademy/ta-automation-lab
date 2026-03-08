async function loadComponent(id, url) {

const response = await fetch(url);
const html = await response.text();

document.getElementById(id).innerHTML = html;

}

document.addEventListener("DOMContentLoaded", function() {

loadComponent("header", "/components/header.html");
loadComponent("footer", "/components/footer.html");

});