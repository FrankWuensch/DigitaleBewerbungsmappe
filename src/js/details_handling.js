document.addEventListener("DOMContentLoaded", () => {
  const allArticles = Array.from(document.querySelectorAll("details article"));

  const openDetails = Array.from(document.querySelectorAll(".comp")).filter(
    (_, index) => index == 1
  );

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
