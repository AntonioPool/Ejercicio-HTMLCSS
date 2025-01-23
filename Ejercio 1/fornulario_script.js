document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', (event) => {
      const nombre = document.getElementById('nombre').value.trim();
      const opinion = document.getElementById('opinion').value.trim();
  
      if (!nombre || !opinion) {
        alert('Por favor, completa todos los campos antes de enviar.');
        event.preventDefault(); // Evita que el formulario se envíe
      }
    });
  });
  