const menuBTN = document.getElementById("menu-btn");
const menuUL = document.getElementById("menu-ul");

menuBTN.addEventListener("click", () => {
    menuUL.classList.toggle("hidden");
});