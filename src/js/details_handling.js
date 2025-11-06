document.addEventListener("DOMContentLoaded", () => {
  const allArticles = Array.from(document.querySelectorAll("details article"));

  const firstTwoDetails = Array.from(document.querySelectorAll(".comp")).filter(
    (_, index) => index < 2
  );
  const firstTwoDetailsSm = Array.from(
    document.querySelectorAll(".comp-sm")
  ).filter((_, index) => index < 2);
  const arrDetails = [...firstTwoDetails, ...firstTwoDetailsSm];

  const allEdjucationDetails = Array.from(
    document.querySelectorAll(".edjucation")
  );

  for (let detail of arrDetails) {
    detail.setAttribute("open", "");
  }

  for (let detail of allEdjucationDetails) {
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
