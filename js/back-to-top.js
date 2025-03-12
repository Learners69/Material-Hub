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
        }, { passive: true }); // Add passive flag for better performance on mobile
        
        // Scroll to top when button is clicked
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Use modern smooth scrolling for better performance on mobile
            smoothScrollToTop();
        });
    }
    
    // Improved smooth scrolling function that works better on mobile
    function smoothScrollToTop() {
        // Check if the browser supports smooth scrolling natively
        if ('scrollBehavior' in document.documentElement.style) {
            // Use native smooth scrolling (more efficient on mobile)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Fallback for browsers that don't support smooth scrolling
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 0) {
                // Use a more efficient approach with fewer calculations
                // This reduces CPU usage and prevents glitching on mobile
                const scrollStep = Math.max(scrollTop / 10, 10);
                
                window.requestAnimationFrame(function() {
                    window.scrollTo(0, scrollTop - scrollStep);
                    if (scrollTop - scrollStep > 0) {
                        window.requestAnimationFrame(smoothScrollToTop);
                    }
                });
            }
        }
    }
}); 