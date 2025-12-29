document.addEventListener("DOMContentLoaded", () => {
  const leftSidebarSmall = document.querySelector("#left-sidebar-small");
  const btnContactData = document.querySelector("#button-contact-data");
  const mainContainer = document.querySelector("#content");
  const referenzProjekte = document.querySelector("#referenz-projekte");
  const rightSidebar = document.querySelector("#right-sidebar");

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
    });
  }

  referenzProjekte.addEventListener("click", (evt) => {
    let sidebar_is_visible =
      !rightSidebar.classList.contains("opacity-0");
    if (sidebar_is_visible) {
      hideSidebar(rightSidebar);
      referenzProjekte.classList.remove("text-neutral-700!");
      referenzProjekte.classList.add("text-neutral-400!");
    } else {
      showSidebar(rightSidebar);
      referenzProjekte.classList.remove("text-neutral-400!");
      referenzProjekte.classList.add("text-neutral-700!");
    }
  });

  function showSmallSidebar(sidebar) {
    mainContainer.classList.add("blur-sm");
    sidebar.classList.add("max-2xl:block");
    sidebar.classList.remove("opacity-0");
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
