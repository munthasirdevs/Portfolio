// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.remove("navbar-transparent");
    navbar.classList.add("navbar-solid");
  } else {
    navbar.classList.add("navbar-transparent");
    navbar.classList.remove("navbar-solid");
  }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");

  // Change icon based on menu state
  const icon = mobileMenuButton.querySelector("i");
  if (mobileMenu.classList.contains("hidden")) {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  } else {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  }
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
    const icon = mobileMenuButton.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");

    // Set active link
    navLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});
