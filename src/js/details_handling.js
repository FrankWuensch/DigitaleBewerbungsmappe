document.addEventListener("DOMContentLoaded", () => {
  const allArticles = Array.from(document.querySelectorAll("details article"));

  const params = new URLSearchParams(window.location.search);
  const focus = params.get("focus");

  const openDetails = Array.from(
    document.querySelectorAll(".comp[data-focus-open]")
  ).filter((detail) => {
    const focuses = detail.dataset.focusOpen.split(" ");

    return focuses.includes(focus);
  });

  for (let detail of openDetails) {
    detail.setAttribute("open", "");
  }

  if (allArticles.length > 0) {
    allArticles.forEach((article) => {
      article.addEventListener("click", (evt) => {
        if (article.parentElement.hasAttribute("open")) {
          closeDetail(article.parentElement);
        }
      });
    });
  }
});

function closeDetail(detail) {
  detail.removeAttribute("open", "");
  detail.classList.toggle("opacity-100");
}
