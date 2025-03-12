// Back to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            // Show button when user scrolls down 300px from the top
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        // Scroll to top when button is clicked
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Custom smooth scroll with easing
            smoothScrollToTop();
        });
    }
    
    // Custom smooth scrolling function with easing
    function smoothScrollToTop() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        
        // If we're already at the top, no need to scroll
        if (currentScroll > 0) {
            // Use requestAnimationFrame for smoother animation
            window.requestAnimationFrame(smoothScrollToTop);
            
            // Easing function for smoother deceleration
            // This creates a more natural slowing down effect as we approach the top
            const scrollStep = Math.max(currentScroll / 8, 1);
            
            // Scroll by the calculated step
            window.scrollTo(0, currentScroll - scrollStep);
        }
    }
}); 