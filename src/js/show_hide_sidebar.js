document.addEventListener("DOMContentLoaded", () => {
  const leftSidebar = document.querySelector("#left-sidebar-small");
  const rightSidebar = document.querySelector("#right-sidebar-small");
  const btnContactData = document.querySelector("#button-contact-data");
  const mainContainer = document.querySelector("#content");
  const referenzProjekte = document.querySelector("#referenz-projekte-small");
  const btnMenu = document.querySelector("#menu-button");
  const menuContent = document.querySelector("#menu-content");
  const allLinks = document.querySelectorAll(".certificate");

  // helper functions
  function disableLinks() {
    allLinks.forEach(link => link.classList.add("pointer-events-none"));
  }

  function enableLinks() {
    allLinks.forEach(link => link.classList.remove("pointer-events-none"));
  }

  function hideSidebar(sidebar) {
    if (!sidebar) return;
    sidebar.classList.add("opacity-0", "pointer-events-none");
    setTimeout(() => {
      sidebar.classList.add("hidden");
    }, 700);
    sidebar.classList.remove("max-2xl:block");

    const anyOverlayVisible =
      (leftSidebar && !leftSidebar.classList.contains("opacity-0")) ||
      (rightSidebar && !rightSidebar.classList.contains("opacity-0")) ||
      (menuContent && !menuContent.classList.contains("opacity-0"));

    if (!anyOverlayVisible) {
      mainContainer?.classList.remove("blur-sm");
    }

    enableLinks();
  }

  function showSidebar(sidebar) {
    if (!sidebar) return;
    mainContainer?.classList.add("blur-sm");
    sidebar.classList.add("max-2xl:block");
    sidebar.classList.remove("hidden");
    sidebar.classList.remove("opacity-0", "pointer-events-none");

    // close menu
    if (menuContent && !menuContent.classList.contains("opacity-0")) {
      hideMenuContent();
    }

    disableLinks();
  }

  function showMenuContent() {
    if (!menuContent) return;
    menuContent.classList.remove("opacity-0", "pointer-events-none", "hidden");
    mainContainer?.classList.add("blur-sm");

    // close sidebars
    hideSidebar(leftSidebar);
    hideSidebar(rightSidebar);

    disableLinks();
  }

  function hideMenuContent() {
    if (!menuContent) return;
    menuContent.classList.add("opacity-0", "pointer-events-none", "hidden");

    const anyOverlayVisible =
      (leftSidebar && !leftSidebar.classList.contains("opacity-0")) ||
      (rightSidebar && !rightSidebar.classList.contains("opacity-0"));

    if (!anyOverlayVisible) {
      mainContainer?.classList.remove("blur-sm");
    }

    enableLinks();
  }

  // event listener
  btnMenu?.addEventListener("click", evt => {
    evt.stopPropagation();
    const isVisible = !menuContent.classList.contains("opacity-0");
    isVisible ? hideMenuContent() : showMenuContent();
  });

  btnContactData?.addEventListener("click", evt => {
    evt.stopPropagation();
    const isVisible = !leftSidebar.classList.contains("opacity-0");
    isVisible ? hideSidebar(leftSidebar) : showSidebar(leftSidebar);
  });

  referenzProjekte?.addEventListener("click", evt => {
    evt.stopPropagation();
    const isVisible = !rightSidebar.classList.contains("opacity-0");
    isVisible ? hideSidebar(rightSidebar) : showSidebar(rightSidebar);
  });

  mainContainer?.addEventListener("click", () => {
    hideSidebar(leftSidebar);
    hideSidebar(rightSidebar);
    hideMenuContent();
  });
});