// Preloader functionality
function skipPreloader() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('fade-out');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
}

// Auto-hide preloader after timeout
window.addEventListener('load', () => {
    // Show skip button immediately
    document.querySelector('.skip-button').classList.add('show');

    // Auto-hide preloader after 2 seconds
    setTimeout(skipPreloader, 2000);
}); 