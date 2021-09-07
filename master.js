console.log("Fuck off")
let nl = document.getElementById("nlsel")
let en = document.getElementById("ensel")

nl.addEventListener("click", changeLanguage);
en.addEventListener("click", changeLanguage);

function changeLanguage() {
    console.log("Hoi")
    nl.classList.toggle("active")
    en.classList.toggle("active")
}