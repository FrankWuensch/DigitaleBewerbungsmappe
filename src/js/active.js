document.addEventListener("DOMContentLoaded", () => {
    const references = document.querySelectorAll("nav a");
    const indexLink = document.querySelector("#index");
    const zertifikateLink = document.querySelector("#zertifikate");
    
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