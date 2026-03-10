document.addEventListener("DOMContentLoaded", () => {
  const leftSidebar = document.querySelector("#left-sidebar-small");
  const rightSidebar = document.querySelector("#right-sidebar-small");
  const btnContactData = document.querySelector("#button-contact-data");
  const mainContainer = document.querySelector("#content");
  const referenzProjekte = document.querySelector("#referenz-projekte-small");
  const btnMenu = document.querySelector("#menu-button");
  const menuContent = document.querySelector("#menu-content");
  const allLinks = document.querySelectorAll(".certificate");

  if (btnMenu !== null &&
    menuContent !== null) {
    btnMenu.addEventListener("click", (evt) => {
      if (evt.currentTarget === btnMenu) {
        let menuContentIsVisible = !menuContent.classList.contains("opacity-0");
        if (menuContentIsVisible) {
          hideMenuContent();
        } else {
          showMenuContent();
        }
      }
    });
  }

  if (
    leftSidebar !== null &&
    btnContactData !== null &&
    mainContainer !== null
  ) {
    btnContactData.addEventListener("click", (evt) => {
      let sidebarLeftVisible = !leftSidebar.classList.contains("opacity-0");
      if (sidebarLeftVisible) {
        hideSidebar(leftSidebar);
      } else {
        showSidebar(leftSidebar);
      }
    });
  }

  if (referenzProjekte !== null) {
    referenzProjekte.addEventListener("click", (evt) => {
      let sidebarRightVisible = !rightSidebar.classList.contains("opacity-0");
      if (sidebarRightVisible) {
        hideSidebar(rightSidebar);
      } else {
        showSidebar(rightSidebar);
      }
    });
  }

  if (mainContainer !== null) {
    mainContainer.addEventListener("click", (evt) => {
      let sidebarLeftVisible = !leftSidebar.classList.contains("opacity-0");
      let sidebarRightVisible = !rightSidebar.classList.contains("opacity-0");
      let menuContentVisible = !menuContent.classList.contains("opacity-0");
      if (sidebarLeftVisible) {
        hideSidebar(leftSidebar);
      }
      if (sidebarRightVisible) {
        hideSidebar(rightSidebar);
      }
      if (menuContentVisible) {
        hideMenuContent();
      }
    })
  }

  function showSidebar(sidebar) {
    mainContainer.classList.add("blur-sm");
    sidebar.classList.add("max-2xl:block");
    sidebar.classList.remove("opacity-0");
    sidebar.classList.remove("pointer-events-none");
    if (!menuContent.classList.contains("opacity-0")) {
      menuContent.classList.add("opacity-0");
    }
    disableLinks();
  }

  function hideSidebar(sidebar) {
    sidebar.classList.add("opacity-0");
    sidebar.classList.add("pointer-events-none");
    sidebar.classList.remove("max-2xl:block");
    mainContainer.classList.remove("blur-sm");
    enableLinks();
  }

  function disableLinks() {
    allLinks.forEach(link => {
      link.classList.add("pointer-events-none");
    });
  }

  function enableLinks() {
    allLinks.forEach(link => {
      link.classList.remove("pointer-events-none");
    });
  }

  function showMenuContent() {
    menuContent.classList.remove("opacity-0");
    menuContent.classList.remove("pointer-events-none");
    mainContainer.classList.add("blur-sm");
    if (!leftSidebar.classList.contains("opacity-0")) {
      leftSidebar.classList.add("opacity-0");
    }
    if (!rightSidebar.classList.contains("opacity-0")) {
      rightSidebar.classList.add("opacity-0");
    }
    disableLinks();
  }

  function hideMenuContent() {
    menuContent.classList.add("opacity-0");
    menuContent.classList.add("pointer-events-none");
    mainContainer.classList.remove("blur-sm");
    enableLinks();
  }
});
