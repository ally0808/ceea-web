// Espera que el documento esté listo
document.addEventListener("DOMContentLoaded", function() {
  // Selecciona el formulario de contacto
  const form = document.querySelector('.contacto-form');
  if (form) {
    // Intercepta el evento submit del formulario
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Evita que recargue la página

      // Aquí puedes enviar los datos por AJAX si tienes backend.
      // Por ahora solo muestra un mensaje y limpia el formulario.
      alert('¡Mensaje enviado! Nos pondremos en contacto pronto.');

      // Reinicia el formulario (limpia los campos)
      form.reset();
    });
  }
});