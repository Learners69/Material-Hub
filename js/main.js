// Custom JavaScript for Material Hub

// Preloader functionality
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const preloaderImage = document.querySelector('.preloader-image');
    
    if (preloader && preloaderImage) {
        // Function to fade out preloader
        const fadeOutPreloader = () => {
            setTimeout(() => {
                preloader.classList.add('fade-out');
                // Remove preloader from DOM after animation completes
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 800);
        };

        // Check if image is already loaded
        if (preloaderImage.complete) {
            fadeOutPreloader();
        } else {
            // Wait for the image to load
            preloaderImage.onload = fadeOutPreloader;
            // Fallback in case image fails to load
            preloaderImage.onerror = fadeOutPreloader;
        }
    }
});

// Function to show preloader
function showPreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.display = 'flex';
        preloader.classList.remove('fade-out');
        
        // Hide preloader after animation
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1500);
    }
}

// Add click event listener to navbar brand image
document.addEventListener('DOMContentLoaded', () => {
    const navbarBrandImage = document.querySelector('.navbar-brand-image');
    if (navbarBrandImage) {
        navbarBrandImage.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default behavior
            e.stopPropagation(); // Stop event from bubbling up to parent elements
            showPreloader();
        });
    }
    
    // Prevent parent anchor tag from redirecting
    const navbarBrand = document.querySelector('.navbar-brand');
    if (navbarBrand) {
        navbarBrand.addEventListener('click', (e) => {
            if (e.target.classList.contains('navbar-brand-image')) {
                e.preventDefault();
            }
        });
    }
});

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

// Enhanced dropdown interaction for Books menu
document.addEventListener("DOMContentLoaded", function() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    const dropdownParent = toggle.closest('.dropdown');
    
    toggle.addEventListener('click', function() {
      // Add a small delay to allow Bootstrap to toggle the aria-expanded attribute
      setTimeout(() => {
        if (toggle.getAttribute('aria-expanded') === 'true') {
          dropdownParent.classList.add('show');
        } else {
          dropdownParent.classList.remove('show');
        }
      }, 10);
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    dropdownToggles.forEach(toggle => {
      const dropdownParent = toggle.closest('.dropdown');
      if (dropdownParent && !dropdownParent.contains(e.target)) {
        dropdownParent.classList.remove('show');
      }
    });
  });
  
  // Highlight active category in dropdown if on books page
  if (window.location.pathname.includes('books.html')) {
    highlightActiveCategory();
  }
});

// Function to highlight active category in books dropdown
function highlightActiveCategory() {
  // Get the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  
  // Highlight active category in dropdown
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    item.classList.remove('active');
    
    // Check if this item corresponds to the current category
    const itemHref = item.getAttribute('href');
    if (category && itemHref && itemHref.includes(`category=${category}`)) {
      item.classList.add('active');
    } else if (!category && itemHref === 'books.html') {
      // If no category is selected, highlight "All Books"
      item.classList.add('active');
    }
  });
} 