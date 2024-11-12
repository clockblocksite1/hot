document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.header__mobile img');
    const burgerMenu = document.querySelector('.burger__menu');     
    const closeIcon = document.querySelector('.burger__close');     
  
    menuIcon.addEventListener('click', function() {
      burgerMenu.classList.add('active');
    });
  
    closeIcon.addEventListener('click', function() {
      burgerMenu.classList.remove('active');
    });
  });