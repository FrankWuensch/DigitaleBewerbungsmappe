document.addEventListener("DOMContentLoaded", () => {
    const references = document.querySelectorAll("nav a");
    const indexLinks = document.querySelector(".index");
    const certificateLinks = document.querySelector(".certificates");

    references.forEach(element => {
        // console.log(window.location.href, element.href);
        element.classList.remove("active");
        if (window.location.href === element.href && window.location.href !== "#") {
            element.classList.remove("text-neutral-400!");
            element.classList.add("active");
        } else {
            element.classList.remove("active");
            element.classList.add("text-neutral-400!");
        }
    });
});
