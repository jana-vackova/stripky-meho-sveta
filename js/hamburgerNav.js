const navSticky  = document.getElementById("nav_sticky");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navSticky.classList.toggle("open");
});

document.querySelectorAll("#nav_sticky a").forEach(link => {
    link.addEventListener("click", () => {
        navSticky.classList.remove("open");
    });
});