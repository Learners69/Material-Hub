// Notes functionality will be implemented here
document.addEventListener('DOMContentLoaded', () => {
    // Initialize notes functionality
    // Ensure navbar brand link works
    const navbarBrand = document.querySelector('.navbar-brand');
    if (navbarBrand) {
        navbarBrand.addEventListener('click', (e) => {
            window.location.href = 'index.html';
        });
    }
}); 