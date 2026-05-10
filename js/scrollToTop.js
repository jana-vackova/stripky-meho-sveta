const scrollToTop = document.getElementById("scrollToTop");

scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});