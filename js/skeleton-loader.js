// Skeleton Loader Functionality
document.addEventListener('DOMContentLoaded', function() {
    initSkeletonLoader();
});

function initSkeletonLoader() {
    const skeletonContainer = document.querySelector('.skeleton-container');
    const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"]):not([href^="javascript"]):not([href^="mailto"]):not([href^="tel"])');
    
    // Don't apply to links that have download attribute or no href
    links.forEach(link => {
        if (!link.hasAttribute('download') && link.getAttribute('href')) {
            link.addEventListener('click', function(e) {
                // Only intercept links to pages within our site
                const href = this.getAttribute('href');
                if (href && !href.includes('://') && !href.startsWith('#')) {
                    e.preventDefault();
                    showSkeletonLoader();
                    
                    // Navigate to the new page after a short delay
                    setTimeout(() => {
                        window.location.href = href;
                    }, 300); // Short delay to allow skeleton to show
                }
            });
        }
    });
    
    // Function to show skeleton loader
    function showSkeletonLoader() {
        if (skeletonContainer) {
            // Hide preloader if it's visible
            const preloader = document.querySelector('.preloader');
            if (preloader && preloader.style.display !== 'none') {
                preloader.style.display = 'none';
            }
            
            // Show skeleton
            skeletonContainer.classList.add('show');
            
            // Apply current theme to skeleton
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            if (currentTheme) {
                skeletonContainer.setAttribute('data-bs-theme', currentTheme);
            }
        }
    }
    
    // Handle browser back/forward navigation
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            // Page was loaded from cache (back/forward navigation)
            hideSkeletonLoader();
        }
    });
    
    // Function to hide skeleton loader
    function hideSkeletonLoader() {
        if (skeletonContainer) {
            skeletonContainer.classList.remove('show');
        }
    }
    
    // Hide skeleton when page is fully loaded
    window.addEventListener('load', function() {
        hideSkeletonLoader();
    });
}

// Function to manually show skeleton loader (can be called from other scripts)
function showPageTransition() {
    const skeletonContainer = document.querySelector('.skeleton-container');
    if (skeletonContainer) {
        skeletonContainer.classList.add('show');
        
        // Apply current theme
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        if (currentTheme) {
            skeletonContainer.setAttribute('data-bs-theme', currentTheme);
        }
    }
}

// Function to manually hide skeleton loader
function hidePageTransition() {
    const skeletonContainer = document.querySelector('.skeleton-container');
    if (skeletonContainer) {
        skeletonContainer.classList.remove('show');
    }
} 