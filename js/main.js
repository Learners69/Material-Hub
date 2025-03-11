// Custom JavaScript for Material Hub

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Material Hub website loaded successfully!');
    
    // Floating header scroll effect
    const floatingHeader = document.getElementById('floating-header');
    const headerContainer = document.querySelector('.floating-header-container');
    
    if (floatingHeader && headerContainer) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                floatingHeader.classList.add('scrolled');
                // Reduce top margin when scrolling for a more compact header
                headerContainer.style.top = '0.5rem';
            } else {
                floatingHeader.classList.remove('scrolled');
                // Reset top margin when at the top
                headerContainer.style.top = '1rem';
            }
        });
    }
}); 