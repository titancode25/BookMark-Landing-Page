let navbar = document.getElementById("nav-js");
let humburger = document.getElementById("humburger");
let closebtn = document.getElementById("clos-btn-nav");
let logo = document.getElementById("nav-logo");
let nav_hm = document.getElementById("hm-nav-js-1");

humburger.onclick = openmenu;

function openmenu() {
    humburger.style.display = "none";
    navbar.style.left = "0%";
    closebtn.style.display = "block";
    nav_hm.style.position = "fixed";
    logo.style.cssText = "filter: brightness(100%) invert(1) contrast(10) grayscale(100%); height: 30px;"
}

closebtn.onclick = closemenu;

function closemenu() {
    closebtn.style.display = "none";
    navbar.style.left = "-100%"
    humburger.style.display = "block";
    nav_hm.style.position = "absolute";
    logo.style.cssText = "filter: none; height: 25px;"
}

// ----------- Features Selection Logics

let tabSelection1 = document.getElementById("tab-selection-1");
let tabSelection2 = document.getElementById("tab-selection-2");
let tabSelection3 = document.getElementById("tab-selection-3");

let classSelect = document.getElementsByClassName("tab");

let tab_1 = document.getElementById("tab-1");
let tab_2 = document.getElementById("tab-2");
let tab_3 = document.getElementById("tab-3");

let active_tab_1 = document.getElementById("active-tab");
let active_tab_2 = document.getElementById("active-tab1");
let active_tab_3 = document.getElementById("active-tab2");

function elementSelected(btn) {
    var eS = btn.id;
    console.log(btn.id)
}

tabSelection2.onclick = opentab2;
tabSelection3.onclick = opentab3;
tabSelection1.onclick = opentab1;

function opentab2() {
    tab_2.style.display = "flex";
    tab_1.style.display = "none";
    tab_3.style.display = "none";
    active_tab_2.style.cssText = "border-bottom: 4px solid hsl(0, 94%, 66%);";
    active_tab_1.style.cssText = "border-bottom: 2px solid rgba(218, 218, 218, 0.603);"
    active_tab_3.style.cssText = "border-bottom: 2px solid rgba(218, 218, 218, 0.603);"
}

function opentab3() {
    tab_3.style.display = "flex";
    tab_1.style.display = "none";
    tab_2.style.display = "none";
    active_tab_3.style.cssText = "border-bottom: 4px solid hsl(0, 94%, 66%);";
    active_tab_2.style.cssText = "border-bottom: 2px solid rgba(218, 218, 218, 0.603);"
    active_tab_1.style.cssText = "border-bottom: 2px solid rgba(218, 218, 218, 0.603);"
}

function opentab1() {
    tab_1.style.display = "flex";
    tab_2.style.display = "none";
    tab_3.style.display = "none";
    active_tab_1.style.cssText = "border-bottom: 4px solid hsl(0, 94%, 66%);";
    active_tab_2.style.cssText = "border-bottom: 2px solid rgba(218, 218, 218, 0.603);"
    active_tab_3.style.cssText = "border-bottom: 2px solid rgba(218, 218, 218, 0.603);"
}



// ---------------------- QNA Logics

let faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("activefaq");
    })
});


// --------- Email Validation Logics------

function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email-id").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "";
    } else {
        form.classList.add("invalid")
        form.classList.remove("valid")
        text.innerHTML = "Whoops, make sure it's an email";
    }

    if (email === "") {
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = "";
    } 
}