function mostrarHora() {
    const reloj = document.getElementById('reloj');
    const hora = new Date().toLocaleTimeString();
    reloj.textContent = hora;
}
setInterval(mostrarHora, 1000);

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('comentario-form');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const comentario = document.getElementById('comentario').value;
        mensajeConfirmacion.textContent = '¡Gracias por tu comentario!';

        formulario.reset();

        setTimeout(() => {
            mensajeConfirmacion.textContent = '';
        }, 1000000);
    });
});
