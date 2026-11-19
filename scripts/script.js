
const navbar = document.querySelector(".mainNav__menu");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const hamburgerMenu = document.querySelector(".mainNav__toggle");

hamburgerMenu.addEventListener("click", () => {
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
    navbar.classList.toggle("active");
})

// ! Close menu when a navbar link is clicked
document.querySelectorAll(".mainNav__menu a").forEach(link => {
    link.addEventListener("click", () => {       
        navbar.classList.remove("active");       // close menu
        bars.classList.toggle("active");
        xmark.classList.remove("active");
    });
});