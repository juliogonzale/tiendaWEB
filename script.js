function updateTimeAndDate() {
    const now = new Date();

    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    // Obtener hora, minutos y segundos
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    // Formato de la fecha
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('es-ES', options);

    // Actualizar el contenido de los elementos
    timeElement.textContent = `Hora: ${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `Fecha: ${formattedDate}`;
}

// Actualizar cada segundo
setInterval(updateTimeAndDate, 1000);

// Llamada inicial para mostrar la hora y fecha inmediatamente
updateTimeAndDate();
