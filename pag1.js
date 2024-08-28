function mostrarHora() {
    const reloj = document.getElementById('reloj');
    const hora = new Date().toLocaleTimeString();
    reloj.textContent = hora;
}
setInterval(mostrarHora, 1000);



