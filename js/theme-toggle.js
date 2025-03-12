// Theme Toggle Functionality for Material Hub

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme)) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
    
    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener('click', function() {
        if (htmlElement.getAttribute('data-bs-theme') === 'light') {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    });
    
    // Function to enable dark mode
    function enableDarkMode() {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        themeIcon.classList.remove('bi-sun-fill');
        themeIcon.classList.add('bi-moon-stars-fill');
        localStorage.setItem('theme', 'dark');
        
        // Add smooth transition animation
        document.body.classList.add('theme-transition');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 300);
    }
    
    // Function to enable light mode
    function enableLightMode() {
        htmlElement.setAttribute('data-bs-theme', 'light');
        themeIcon.classList.remove('bi-moon-stars-fill');
        themeIcon.classList.add('bi-sun-fill');
        localStorage.setItem('theme', 'light');
        
        // Add smooth transition animation
        document.body.classList.add('theme-transition');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 300);
    }
}); 