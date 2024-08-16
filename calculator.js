window.addEventListener("load", (event) => {

    // obtenemos elementos del html
    let botonCalcular = document.getElementById('btnCalcular');
    let paraCuandoField = document.getElementById('paraCuando');
    let paraQueHoraField = document.getElementById('queHora');
    let duracionField = document.getElementById('duracion');

    let now = new Date()
    let nowHours = now.getHours();
    let nowMinutes = now.getMinutes();
    paraQueHoraField.value = `${nowHours}:${nowMinutes}`;

    // al hacer click en el botón calcular
    // obtenemos la info de los campos y hacemos el cálculo
    botonCalcular.onclick = function () {
        calcularDelay(
            paraCuandoField.value,
            paraQueHoraField.value,
            duracionField.value
        );
    };

    paraCuandoField.onchange = function (value) {
        let asd = document.getElementById("paraCuando").value;

        console.log(asd);
    };
});


function calcularDelay(paraCuando, aQueHora, duracion) {
    console.log('amigo estamos en la funcion!');
    console.log(`para cuando: ${paraCuando}`);
    console.log(`a que hora: ${aQueHora}`);
    console.log(`duracion: ${duracion}`);

    let paraCuandoDate = paraCuando === 'hoy' ? new Date() : new Date(Date.now() + 86400000);

    let hora = aQueHora.split(':')[0];
    let minutos = aQueHora.split(':')[1];

    paraCuandoDate = new Date(paraCuandoDate.setHours(hora, minutos, 0));

    console.log(`para cuando Date: ${paraCuandoDate}`);

    let duracionHoras = duracion.split(':')[0];
    let duracionMinutos = duracion.split(':')[1];

    let cuandoDebeEmpezar = new Date(paraCuandoDate.setHours(paraCuandoDate.getHours() - duracionHoras, paraCuandoDate.getMinutes() - duracionMinutos));

    console.log(`cuando debe empezar: ${cuandoDebeEmpezar}`);

    let now = new Date();

    now.setSeconds(0);

    console.log(`now: ${now}`);

    let delay = cuandoDebeEmpezar - now;

    const differenceInMinutes = Math.floor(delay / (1000 * 60));
    const hours = Math.abs(Math.floor(differenceInMinutes / 60));
    const minutes = Math.abs(differenceInMinutes % 60);

    console.log(`delay: ${Math.abs(hours)}:${Math.abs(minutes)}`);


    let delayParagraph = document.getElementById('delay');
    let delayBox = document.getElementById('delayBox');

    delayParagraph.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    if (delayBox.classList.contains('hidden')) {
        delayBox.classList.remove('hidden');
    }

}
