const navHeader = document.getElementById("nav_header");
const navSticky = document.getElementById("nav_sticky");
window.addEventListener("scroll", () => {
    const headerBottom = navHeader.getBoundingClientRect().bottom;
    if (headerBottom <= 0) {
        navSticky.classList.add("show");
    }
    else {
        navSticky.classList.remove("show");
    }
})