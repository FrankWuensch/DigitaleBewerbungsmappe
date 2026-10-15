document.addEventListener("DOMContentLoaded", () => {
    const references = document.querySelectorAll("nav a");

    // Set application focus from URL parameter
    const params = new URLSearchParams(window.location.search);
    const focus = params.get("focus");

    const validFocuses = ["it", "sps", "data"];

    // Set focus class on body
    if (validFocuses.includes(focus)) {
        document.body.classList.add(`focus-${focus}`);
    } else {
        document.body.classList.add("focus-default");
    }

    // Preserve application focus when navigating between pages
    if (validFocuses.includes(focus)) {
        document.querySelectorAll("a.index, a.certificates").forEach(link => {
            const url = new URL(link.href, window.location.href);
            url.searchParams.set("focus", focus);
            link.href = url.href;
        });
    }

    // Set active navigation link
    references.forEach(element => {
        element.classList.remove("active");

        if (
            window.location.href === element.href &&
            window.location.href !== "#"
        ) {
            element.classList.remove("text-neutral-400!");
            element.classList.add("active");
        } else {
            element.classList.remove("active");
            element.classList.add("text-neutral-400!");
        }
    });
});
