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

/* ===============================
   REGISTER PAGE EVENTS
============================== */

document.addEventListener("change", function(e){

    /* ===============================
       CAMBIO DE IDIOMA
    ============================== */

    if(e.target.id === "language"){

        const lang = e.target.value;

        const translations = {

            es:{
                title:"Registro de Usuario",

                firstName:"Nombre *",
                lastName:"Apellido paterno *",
                motherLastName:"Apellido materno",
                email:"Email *",
                phone:"Teléfono",
                password:"Password *",
                confirmPassword:"Confirmar Password *",
                country:"País *",
                gender:"Género *",
                comments:"Comentarios",

                placeholderFirst:"Ingresa tu nombre",
                placeholderLast:"Apellido paterno",
                placeholderMother:"Apellido materno",
                placeholderEmail:"correo@email.com",
                placeholderPhone:"55 1234 5678",
                placeholderPassword:"Password",
                placeholderConfirm:"Confirmar password",
                placeholderComments:"Comentarios",
                placeholderComments:"Comentarios",
                placeholderGenderDetails:"Especifica género",

                genderMale:"Hombre",
                genderFemale:"Mujer",
                genderOther:"Otro",

                terms:"Acepto términos y condiciones",

                register:"Registrar"
            },

            en:{
                title:"User Registration",

                firstName:"First Name *",
                lastName:"Last Name *",
                motherLastName:"Second Last Name",
                email:"Email *",
                phone:"Phone",
                password:"Password *",
                confirmPassword:"Confirm Password *",
                country:"Country *",
                gender:"Gender *",
                comments:"Comments",

                placeholderFirst:"Enter your name",
                placeholderLast:"Last name",
                placeholderMother:"Second last name",
                placeholderEmail:"email@email.com",
                placeholderPhone:"55 1234 5678",
                placeholderPassword:"Password",
                placeholderConfirm:"Confirm password",
                placeholderComments:"Comments",
                placeholderGenderDetails:"Gender Details",

                genderMale:"Male",
                genderFemale:"Female",
                genderOther:"Other",

                terms:"Accept terms and conditions",

                register:"Register"
            }

        };

        const t = translations[lang];

        /* TITULO */

        const title = document.querySelector(".content-card h2");
        if(title) title.innerText = t.title;

        /* LABELS */

        const first = document.querySelector("label[for='firstName']");
        if(first) first.innerText = t.firstName;

        const last = document.querySelector("label[for='lastName']");
        if(last) last.innerText = t.lastName;

        const mother = document.querySelector("label[for='motherLastName']");
        if(mother) mother.innerText = t.motherLastName;

        const email = document.querySelector("label[for='email']");
        if(email) email.innerText = t.email;

        const phone = document.querySelector("label[for='phone']");
        if(phone) phone.innerText = t.phone;

        const pass = document.querySelector("label[for='password']");
        if(pass) pass.innerText = t.password;

        const confirm = document.querySelector("label[for='confirmPassword']");
        if(confirm) confirm.innerText = t.confirmPassword;

        const country = document.querySelector("label[for='country']");
        if(country) country.innerText = t.country;

        const comments = document.querySelector("label[for='comments']");
        if(comments) comments.innerText = t.comments;

        /* PLACEHOLDERS */

        const pFirst = document.getElementById("firstName");
        if(pFirst) pFirst.placeholder = t.placeholderFirst;

        const pLast = document.getElementById("lastName");
        if(pLast) pLast.placeholder = t.placeholderLast;

        const pMother = document.getElementById("motherLastName");
        if(pMother) pMother.placeholder = t.placeholderMother;

        const pEmail = document.getElementById("email");
        if(pEmail) pEmail.placeholder = t.placeholderEmail;

        const pPhone = document.getElementById("phone");
        if(pPhone) pPhone.placeholder = t.placeholderPhone;

        const pPass = document.getElementById("password");
        if(pPass) pPass.placeholder = t.placeholderPassword;

        const pConfirm = document.getElementById("confirmPassword");
        if(pConfirm) pConfirm.placeholder = t.placeholderConfirm;

        const pComments = document.getElementById("comments");
        if(pComments) pComments.placeholder = t.placeholderComments;

        const pGenderDetail = document.getElementById("genderDetail");
        if(pGenderDetail) pGenderDetail.placeholder = t.placeholderGenderDetails;

        /* GENERO */

        const male = document.querySelector("[data-test='genderMale']");
        if(male) male.parentElement.lastChild.nodeValue = " " + t.genderMale;

        const female = document.querySelector("[data-test='genderFemale']");
        if(female) female.parentElement.lastChild.nodeValue = " " + t.genderFemale;

        const other = document.querySelector("[data-test='genderOther']");
        if(other) other.parentElement.lastChild.nodeValue = " " + t.genderOther;

        /* CHECKBOX */

        const terms = document.querySelector("#terms");
        if(terms && terms.parentElement){
            terms.parentElement.lastChild.nodeValue = " " + t.terms;
        }

        /* BOTON */

        const btn = document.getElementById("btnRegister");
        if(btn) btn.innerText = t.register;

    }


    /* ===============================
       GENERO OTRO
    ============================== */

    if(e.target.name === "gender"){

        const genderDetail = document.getElementById("genderDetail");

        if(!genderDetail) return;

        if(e.target.value === "other"){
            genderDetail.style.display = "block";
        }else{
            genderDetail.style.display = "none";
        }

    }

});
