// scripts.js

// 1. Seleccionamos todos los enlaces de clase nav-link
const navbarLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse'); // Para colapsar el menú

function clearActiveLinks() {
  navbarLinks.forEach(link => link.classList.remove('active-link'));
}

// Recorremos cada link
navbarLinks.forEach(link => {
  link.addEventListener('click', function () {
    // 1. Aplicar subrayado activo
    clearActiveLinks(); 
    this.classList.add('active-link');
  });


  // Cerrar el menú hamburguesa en móviles al hacer clic en un enlace
  link.addEventListener('click', function () {
    if (window.innerWidth < 992) { 
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false 
      });
      bsCollapse.hide(); // Cierra el menú correctamente
    }
  });
});

