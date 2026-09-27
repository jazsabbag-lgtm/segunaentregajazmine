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
}
