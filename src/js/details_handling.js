document.addEventListener("DOMContentLoaded", () => {
  const allArticles = Array.from(document.querySelectorAll("details article"));

  const firstTwoDetails = Array.from(document.querySelectorAll(".comp")).filter(
    (_, index) => index < 2
  );

  for (let detail of firstTwoDetails) {
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

  // const allEdjucationDetails = Array.from(
  //   document.querySelectorAll(".edjucation")
  // );

  // for (let detail of allEdjucationDetails) {
  //   detail.setAttribute("open", "");
  // }
});

function closeDetail(detail) {
  detail.removeAttribute("open", "");
  detail.classList.toggle("opacity-100");
}
