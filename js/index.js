// scripts.js

// 1. Seleccionamos todos los enlaces de clase nav-link
const navbarLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse'); // Para colapsar el menú

// 2. Iteramos sobre cada enlace para asignarle el comportamiento
navbarLinks.forEach(link => {
  // Redirección al pasar el mouse (mantiene tu funcionalidad original)
  link.addEventListener('mouseover', function handleMouseOver() {
    window.location.href = link.href;
  });

  // Cerrar el menú hamburguesa en móviles al hacer clic en un enlace
  link.addEventListener('click', function () {
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse, {
        toggle: true
      });
    }
  });
});

