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
    if (window.innerWidth < 992) { // Solo en móviles (Bootstrap usa 992px como breakpoint)
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false // Evita que vuelva a abrirse inmediatamente
      });
      bsCollapse.hide(); // Cierra el menú correctamente
    }
  });
});

