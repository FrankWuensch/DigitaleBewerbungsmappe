document.addEventListener("DOMContentLoaded", () => {
  const leftSidebarSmall = document.querySelector("#left-sidebar-small");
  const btnContactData = document.querySelector("#button-contact-data");
  const mainContainer = document.querySelector("#content");

  if (
    leftSidebarSmall !== null &&
    btnContactData !== null &&
    mainContainer !== null
  ) {
    btnContactData.addEventListener("click", (evt) => {
      if (evt.currentTarget === btnContactData) {
        let sidebar_is_visible =
          !leftSidebarSmall.classList.contains("opacity-0");
        if (sidebar_is_visible) {
          hideSidebarLeft();
        } else {
          showSidebarLeft();
        }
      } else {
        hideSidebarLeft();
      }
    });

    mainContainer.addEventListener("click", () => {
      hideSidebarLeft();
    });
  }

  function showSidebarLeft() {
    mainContainer.classList.add("blur-sm");
    leftSidebarSmall.classList.add("max-2xl:block");
    leftSidebarSmall.classList.remove("opacity-0");
  }

  function hideSidebarLeft() {
    leftSidebarSmall.classList.add("opacity-0");
    leftSidebarSmall.classList.remove("max-2xl:block");
    mainContainer.classList.remove("blur-sm");
  }
});
