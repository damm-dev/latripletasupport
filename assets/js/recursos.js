const carreras = {
    sistemas: {
        nombre: "Ingeniería en Sistemas",
        materias: {
            "Programación I": [
                { nombre: "Guía de Python", enlace: "#" },
                { nombre: "Video Introducción", enlace: "#" }
            ],
            "Base de Datos": [
                { nombre: "Apuntes SQL", enlace: "#" },
                { nombre: "Video Normalización", enlace: "#" }
            ]
        }
    },
    electronica: {
        nombre: "Ingeniería Electrónica",
        materias: {
            "Circuitos I": [
                { nombre: "PDF de resistencias", enlace: "#" }
            ],
            "Microcontroladores": [
                { nombre: "Proyecto Arduino", enlace: "#" }
            ]
        }
    },
    industrial: {
        nombre: "Ingeniería Industrial",
        materias: {
            "Gestión de Calidad": [
                { nombre: "ISO 9001 resumen", enlace: "#" }
            ]
        }
    }
};

function mostrarMaterias(carreraId) {
    const carrera = carreras[carreraId];
    const contenedor = document.getElementById("materias-container");
    const lista = document.getElementById("lista-materias");

    document.getElementById("titulo-carrera").textContent = carrera.nombre;
    lista.innerHTML = "";

    for (let materia in carrera.materias) {
        const li = document.createElement("li");
        li.textContent = materia;
        li.onclick = () => mostrarMaterial(carreraId, materia);
        lista.appendChild(li);
    }

    contenedor.classList.remove("oculto");
}

function mostrarMaterial(carreraId, materiaNombre) {
    const materiales = carreras[carreraId].materias[materiaNombre];
    const contenedor = document.getElementById("material-container");
    const lista = document.getElementById("lista-materiales");

    document.getElementById("titulo-materia").textContent = materiaNombre;
    lista.innerHTML = "";

    materiales.forEach(mat => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = mat.enlace;
        a.textContent = mat.nombre;
        a.target = "_blank";
        li.appendChild(a);
        lista.appendChild(li);
    });

    document.getElementById("materias-container").classList.add("oculto");
    contenedor.classList.remove("oculto");
}

function cerrarPopup() {
    document.getElementById("materias-container").classList.add("oculto");
}

function cerrarMaterial() {
    document.getElementById("material-container").classList.add("oculto");
}
