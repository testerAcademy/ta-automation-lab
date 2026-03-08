/*
================================
CONTENT JS
Lógica para páginas del lab
================================
*/

document.addEventListener("click", function(e){

    /* ==========================
       ACORDEON
    ========================== */

    const accordionTitle = e.target.closest(".accordion-title");

    if(accordionTitle){

        const accordion = accordionTitle.parentElement;

        accordion.classList.toggle("open");

        return;
    }


    /* ==========================
       LOGIN
    ========================== */

    if(e.target.id === "loginBtn"){

        const user = document.getElementById("username")?.value.trim();
        const pass = document.getElementById("password")?.value.trim();

        const message = document.getElementById("loginMessage");

        if(!message) return;


        if(user === ""){

            message.className = "message error";
            message.innerText = "El usuario es requerido";
            return;

        }


        if(pass === ""){

            message.className = "message error";
            message.innerText = "La contraseña es requerida";
            return;

        }


        if(user !== "tester" || pass !== "academy"){

            message.className = "message error";
            message.innerText = "Usuario o contraseña inválidos";
            return;

        }


        message.className = "message success";
        message.innerText = "Login exitoso";

    }

});