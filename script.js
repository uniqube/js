// Get references to the button and the navbar
const showNavButton = document.getElementById("showNavButton");
const navbar = document.getElementById("navbar");

// Add a click event listener to the button
showNavButton.addEventListener("click", () => {
    // Toggle the "hidden" class to show or hide the navbar
    navbar.classList.toggle("hidden");
});
