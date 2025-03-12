// Preloader functionality
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure all elements are properly loaded and positioned
    setTimeout(function() {
        initPreloader();
    }, 300); // Increased delay for better reliability
});

function initPreloader() {
    const preloader = document.querySelector('.preloader');
    const skipButton = document.querySelector('.skip-button');
    const preloaderImage = document.querySelector('.preloader-image');
    
    // Show skip button immediately
    if (skipButton) {
        skipButton.classList.add('show');
    }
    
    // Skip button functionality
    if (skipButton) {
        skipButton.addEventListener('click', function() {
            fadeOutPreloader(true);
        });
    }
    
    // Automatically hide preloader after delay
    setTimeout(function() {
        fadeOutPreloader(false);
    }, 2500);
    
    function fadeOutPreloader(skipAnimation) {
        const headerLogo = document.querySelector('.navbar-brand-image');
        
        // If elements don't exist or we're skipping, just fade out
        if (skipAnimation || !headerLogo || !preloaderImage || !preloader) {
            if (preloader) {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }
            return;
        }
        
        try {
            // Get positions for animation
            const headerRect = headerLogo.getBoundingClientRect();
            const preloaderRect = preloaderImage.getBoundingClientRect();
            
            // Create a clone for the animation
            const clone = document.createElement('img');
            clone.src = preloaderImage.src;
            clone.alt = preloaderImage.alt;
            clone.className = 'preloader-image-clone';
            
            // Set initial styles to match preloader image
            Object.assign(clone.style, {
                position: 'fixed',
                zIndex: '9999',
                top: preloaderRect.top + 'px',
                left: preloaderRect.left + 'px',
                width: preloaderRect.width + 'px',
                height: preloaderRect.height + 'px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '5px solid var(--primary-color)',
                boxShadow: '0 0 35px rgba(108, 99, 255, 0.6)',
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s ease-in-out',
                opacity: '0' // Start with opacity 0 (invisible)
            });
            
            // Add to body
            document.body.appendChild(clone);
            
            // First phase: Fade out preloader with a slight delay
            preloader.classList.add('fade-out');
            
            // Force a reflow to ensure the initial styles are applied before changing them
            void clone.offsetWidth;
            
            // Second phase: After preloader starts fading, make the clone visible
            setTimeout(() => {
                // Make clone visible
                clone.style.opacity = '1';
            }, 200);
            
            // Third phase: After clone is visible, move it to header position
            setTimeout(() => {
                // Move to header position
                Object.assign(clone.style, {
                    top: headerRect.top + 'px',
                    left: headerRect.left + 'px',
                    width: headerRect.width + 'px',
                    height: headerRect.height + 'px',
                    borderWidth: '2px',
                    boxShadow: 'none',
                    transform: 'rotate(360deg)'
                });
            }, 400);
            
            // Clean up after animation
            setTimeout(() => {
                clone.remove();
                preloader.style.display = 'none';
                
                // Add a pulse animation to the header logo
                if (headerLogo) {
                    headerLogo.style.animation = 'pulse 1s ease-out';
                    setTimeout(() => {
                        headerLogo.style.animation = '';
                    }, 1000);
                }
            }, 1200);
        } catch (error) {
            console.error('Animation error:', error);
            // Fallback to normal fade
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }
} 