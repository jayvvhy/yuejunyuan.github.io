// scripts/loadHeader.js
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    // Wait until header content is injected before running logic
    const path = window.location.pathname;
    let page = path.split("/").pop();

    // Handle homepage (root URL)
    if (page === "" || page === "/") {
      page = "index.html";
    }

    const navLinks = document.querySelectorAll("#header-placeholder nav a");
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (
        href === page ||
        (page.startsWith("project_") && href === "projects.html")
      ) {
        link.classList.add("active");
      }
    });
  })
  .catch(err => console.error("Error loading header:", err));