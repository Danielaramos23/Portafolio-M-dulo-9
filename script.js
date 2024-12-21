document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío real

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente.`);
        document.getElementById('contactForm').reset(); // Limpiar formulario
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});
