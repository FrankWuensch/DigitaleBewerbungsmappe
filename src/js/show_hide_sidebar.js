document.addEventListener("DOMContentLoaded", () => {
  const sidebar_left_small = document.querySelector("#left-sidebar-small");
  const btn_contact_data = document.querySelector("#button-contact-data");
  const main_container = document.querySelector("#content");
  const blurred = document.querySelector("#blurred");

  if (
    sidebar_left_small !== null &&
    btn_contact_data !== null &&
    main_container !== null &&
    blurred !== null
  ) {
    btn_contact_data.addEventListener("click", (evt) => {
      console.log(evt.currentTarget);
      if (evt.currentTarget === btn_contact_data) {
        let sidebar_is_visible =
          !sidebar_left_small.classList.contains("opacity-0");
        if (sidebar_is_visible) {
          hideSidebarLeft();
        } else {
          showSidebarLeft();
        }
      } else {
        hideSidebarLeft();
      }
    });

    main_container.addEventListener("click", () => {
      hideSidebarLeft();
    });
  }

  function showSidebarLeft() {
    sidebar_left_small.classList.remove("opacity-0");
    sidebar_left_small.classList.remove("pointer-events-none");
    main_container.classList.add("blur-sm");
    document.body.removeChild(blurred);
    sidebar_left_small.style.display = "block";
  }

  function hideSidebarLeft() {
    sidebar_left_small.classList.add("opacity-0");
    sidebar_left_small.classList.add("pointer-events-none");
    main_container.classList.remove("blur-sm");
    document.body.appendChild(blurred);
    sidebar_left_small.style.display = "none";
  }
});
