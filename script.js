// Select all nav links and sections
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// Create an IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id"); // Get the section's ID
      const navItem = document.querySelector(`.nav-link[href="#${id}"]`);

      if (entry.isIntersecting) {
        // Add active class when the section is in view
        navItem.classList.add("active");
      } else {
        // Remove active class when it's out of view
        navItem.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the section is visible
  }
);

// Observe all sections
sections.forEach((section) => observer.observe(section));

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  // Smooth fade-out effect
  loader.style.transition = "opacity 0.8s ease";
  loader.style.opacity = "0";

  // Completely hide loader and show main content
  setTimeout(() => {
    loader.style.display = "none";
    mainContent.style.display = "block"; // Reveal the content
  }, 800); // Match with fade-out duration
});
