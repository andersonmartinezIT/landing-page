//Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.navbar-toggler'); 
    const mobileMenu = document.querySelector('.toggle-menu'); 
    

    hamburgerButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
        
    });
});