// Floating header scroll effect
window.addEventListener('scroll', function() {
  const floatingHeader = document.getElementById('floating-header');
  if (window.scrollY > 50) {
    floatingHeader.classList.add('scrolled');
  } else {
    floatingHeader.classList.remove('scrolled');
  }
}); 