document.addEventListener("DOMContentLoaded", () => {
  const leftSidebarSmall = document.querySelector("#left-sidebar-small");
  const rightSidebarSmall = document.querySelector("#right-sidebar-small");
  const btnContactData = document.querySelector("#button-contact-data");
  const mainContainer = document.querySelector("#content");
  const referenzProjekte = document.querySelector("#referenz-projekte");
  const referenzProjekteSmall = document.querySelector("#referenz-projekte-small");
  const rightSidebar = document.querySelector("#right-sidebar");
  const btnMenu = document.querySelector("#menu-button");
  const menuContent = document.querySelector("#menu-content");

  if (btnMenu !== null && menuContent !== null) {
    btnMenu.addEventListener("click", (evt) => {
      menuContent.classList.toggle("hidden");
    });
  }

  if (
    leftSidebarSmall !== null &&
    btnContactData !== null &&
    mainContainer !== null
  ) {
    btnContactData.addEventListener("click", (evt) => {
      if (evt.currentTarget === btnContactData) {
        let sidebar_left_is_visible =
          !leftSidebarSmall.classList.contains("opacity-0");
        if (sidebar_left_is_visible) {
          hideSmallSidebar(leftSidebarSmall);
        } else {
          showSmallSidebar(leftSidebarSmall);
        }
      } else {
        hideSmallSidebar(leftSidebarSmall);
      }
    });

    mainContainer.addEventListener("click", () => {
      hideSmallSidebar(leftSidebarSmall);
      hideSmallSidebar(rightSidebarSmall);
    });
  }

  referenzProjekte.addEventListener("click", (evt) => {
    let sidebar_right_is_visible =
      !rightSidebar.classList.contains("opacity-0");
    if (sidebar_right_is_visible) {
      hideSidebar(rightSidebar);
      referenzProjekte.classList.remove("active!");
    } else {
      showSidebar(rightSidebar);
      referenzProjekte.classList.add("active!");
    }
  });

  referenzProjekteSmall.addEventListener("click", (evt) => {
    let sidebar_right_is_visible =
      !rightSidebarSmall.classList.contains("opacity-0");
    if (sidebar_right_is_visible) {
      hideSmallSidebar(rightSidebarSmall);
      referenzProjekte.classList.remove("active!");
    } else {
      showSmallSidebar(rightSidebarSmall);
      referenzProjekte.classList.add("active!");
    }
  });

  function showSmallSidebar(sidebar) {
    mainContainer.classList.add("blur-sm");
    sidebar.classList.add("max-2xl:block");
    sidebar.classList.remove("opacity-0");
    if (!menuContent.classList.hidden) {
      menuContent.classList.add("hidden");
    }
  }

  function hideSmallSidebar(sidebar) {
    sidebar.classList.add("opacity-0");
    sidebar.classList.remove("max-2xl:block");
    mainContainer.classList.remove("blur-sm");
  }

  function showSidebar(sidebar) {
    sidebar.classList.remove("opacity-0");
  }

  function hideSidebar(sidebar) {
    sidebar.classList.add("opacity-0");
  }
});
