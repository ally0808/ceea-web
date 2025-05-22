// Espera que el documento esté listo
document.addEventListener("DOMContentLoaded", function() {
  // Obtiene el botón de menú hamburguesa y la lista de navegación
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.getElementById("navbarList");

  // Verifica que ambos elementos existan
  if (menuToggle && navList) {
    // Al hacer click en el botón, abre/cierra el menú
    menuToggle.addEventListener("click", function() {
      navList.classList.toggle("open");
    });

    // (Opcional) Cierra el menú si se hace click fuera de él o del botón
    document.addEventListener("click", function(e) {
      if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
        navList.classList.remove("open");
      }
    });
  }
});