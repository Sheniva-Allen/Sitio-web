const horaElement = document.getElementById('hora');

function actualizarHora() {
    let fecha = new Date();
    let horas = fecha.getHours().toString().padStart(2, '0');
    let minutos = fecha.getMinutes().toString().padStart(2, '0');
    let segundos = fecha.getSeconds().toString().padStart(2, '0');
    let horaActual = `${horas}:${minutos}:${segundos}`;
    horaElement.textContent = horaActual;
}

setInterval(actualizarHora, 1000);

actualizarHora(); 