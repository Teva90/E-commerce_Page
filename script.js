const bar = document.getElementById("bar");
const closeBtn = document.getElementById("close")
const nav = document.getElementById("navbar");
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
    })
}
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}