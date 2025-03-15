// scripts.js

// 1. Seleccionamos todos los enlaces de clase nav-link
const navbarLinks = document.querySelectorAll('.nav-link');

// 2. Iteramos sobre cada enlace para asignarle el comportamiento
navbarLinks.forEach(link => {
  link.addEventListener('mouseover', function handleMouseOver() {
    // 3. Redirigimos inmediatamente al pasar el mouse
    window.location.href = link.href;
  });
});
