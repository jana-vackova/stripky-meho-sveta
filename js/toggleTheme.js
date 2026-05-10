const buttons = document.querySelectorAll(".toggleTheme");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark_mode");
        document.body.classList.toggle("dark_mode");
    })
});