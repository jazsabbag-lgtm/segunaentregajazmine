const btnCargar = document.getElementById("cargar");
const btnTema = document.getElementById("tema");

btnCargar.addEventListener("click", cargarTarjetas);
btnTema.addEventListener("click", cambiarTema);

function cargarTarjetas() {
    fetch('js/datos.json')
    .then(res => res.json())
    .then(proyectos => {
        document.querySelector("section").innerHTML = "";

        proyectos.forEach(proyecto => {
            document.querySelector("section").innerHTML +=
            `<div class="card">
                <h2>${proyecto.titulo}</h2>
                <p>${proyecto.descripcion}</p>
                <p class="detalle">${proyecto.detalles}</p>
            </div>`;
        });
    })
}

function cambiarTema() {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("section").innerHTML =
    `<div class="card">
        <h2>Mood creativo</h2>
        <p>Música, cuaderno abierto y una tarde para hacer algo nuevo.</p>
        <p class="detalle">Plan: crear sin apuro.</p>
    </div>
    <div class="card">
        <h2>Mood social</h2>
        <p>Juntarse con amigos, salir a comer y dejar que el plan se arme solo.</p>
        <p class="detalle">Plan: improvisar.</p>
    </div>
    <div class="card">
        <h2>Mood tranquilo</h2>
        <p>Café, algo para leer y un rato sin demasiados planes.</p>
        <p class="detalle">Plan: bajar un cambio.</p>
    </div>`;
}
