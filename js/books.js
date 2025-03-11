// Books Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Books page loaded');
    
    // Initialize floating header behavior
    initFloatingHeader();
    
    // Initialize book cards with minimal animations
    initBookCards();
});

// Function to handle floating header behavior
function initFloatingHeader() {
    const header = document.getElementById('floating-header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Function to initialize book cards with minimal animations
function initBookCards() {
    const bookCards = document.querySelectorAll('.book-card');
    
    // Add minimal hover effect handling
    bookCards.forEach((card) => {
        // No staggered animations or fade-ins to prevent lagginess
        console.log('Book card initialized');
    });
}

// Function to filter books (for future implementation)
function filterBooks(category) {
    console.log(`Filtering books by: ${category}`);
    // This will be implemented when actual book data is added
}

// Function to search books (for future implementation)
function searchBooks(query) {
    console.log(`Searching for: ${query}`);
    // This will be implemented when actual book data is added
}

// Future functions for book filtering, searching, etc. will go here 