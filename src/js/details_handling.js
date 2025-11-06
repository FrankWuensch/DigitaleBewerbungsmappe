document.addEventListener("DOMContentLoaded", () => {
  const firstTwoDetails = Array.from(document.querySelectorAll(".comp")).filter(
    (_, index) => index <= 2
  );
  const allEdjucationDetails = Array.from(document.querySelectorAll(".edjucation"));

  for (let detail of firstTwoDetails) {
    detail.setAttribute("open", "");
  }

  for (let detail of allEdjucationDetails) {
    detail.setAttribute("open", "");
  }
});
