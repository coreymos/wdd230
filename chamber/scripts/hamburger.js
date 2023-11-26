function adjustMenu() {
    var navMenu = document.getElementById('nav-menu');
    if (window.innerWidth >= 768) { // Same breakpoint as your CSS media query
        navMenu.style.display = ''; // Reset to default for larger screens
    } else {
        navMenu.style.display = 'none'; // Ensure it's hidden on smaller screens
    }
}

// Initial adjustment when the page loads
adjustMenu();

// Adjust menu on window resize
window.addEventListener('resize', adjustMenu);

// Existing hamburger click event listener
document.getElementById('hamburger').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});