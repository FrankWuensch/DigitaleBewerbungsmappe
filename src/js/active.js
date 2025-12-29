document.addEventListener("DOMContentLoaded", () => {
    const references = document.querySelectorAll("nav a");
    
    references.forEach(element => {
        console.log(element, window.location.href);
        if (element.href && element.href === window.location.href) {
            element.classList.remove("text-neutral-400!");
            element.classList.add("active");
        }
    });
});