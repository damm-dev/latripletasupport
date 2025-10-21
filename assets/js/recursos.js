const carreras = {
    arquitectura: {
        nombre: "Arquitectura",
        descripcion: "Profesionales en diseño arquitectónico y urbanismo",
        materias: {
            "Materia X": [
                { nombre: "Material X", enlace: "#" }
            ]
        }
    },
    civil: {
        nombre: "Ingeniería Civil",
        descripcion: "Egresados especializados en construcción e infraestructura",
        materias: {
            "Materia X": [
                { nombre: "Material X", enlace: "#" }
            ]
        }
    },
    electrica: {
        nombre: "Ingeniería Eléctrica",
        descripcion: "Especialistas en sistemas eléctricos y energía",
        materias: {
            "Materia X": [
                { nombre: "Material X", enlace: "#" }
            ]
        }
    },
    industrial: {
        nombre: "Ingeniería Industrial",
        descripcion: "Profesionales en optimización de procesos y sistemas productivos",
        materias: {
            "Materia X": [
                { nombre: "Material X", enlace: "#" }
            ]
        }
    },
    sistemas: {
        nombre: "Ingeniería de Sistemas Informáticos",
        descripcion: "Especialistas en tecnología y desarrollo de software",
        materias: {
            "Materia X": [
                { nombre: "Material X", enlace: "#" }
            ]
        }
    },
    mecanica: {
        nombre: "Ingeniería Mecánica",
        descripcion: "Expertos en diseño y manufactura de sistemas mecánicos",
        materias: {
            "Materia X": [
                { nombre: "Material X", enlace: "#" }
            ]
        }
    },
    quimica: {
        nombre: "Ingeniería Química",
        descripcion: "Profesionales en procesos químicos e industriales",
        materias: {
            "Materia X": [
                { nombre: "Material X", enlace: "#" }
            ]
        }
    },
    alimentos: {
        nombre: "Ingeniería de Alimentos",
        descripcion: "Profesionales en desarrollo, control y producción de alimentos",
        materias: {
            "Materia X": [
                { nombre: "Material X", enlace: "#" }
            ]
        }
    }
};

// ===== Funciones para mostrar materias y materiales =====
function mostrarMaterias(carreraId) {
    const carrera = carreras[carreraId];
    const contenedor = document.getElementById("materias-container");
    const lista = document.getElementById("lista-materias");

    document.getElementById("titulo-carrera").textContent = `${carrera.nombre}`;
    lista.innerHTML = "";

    // agregar descripción si no existe
    if (!document.getElementById("descripcion-carrera")) {
        const desc = document.createElement("p");
        desc.id = "descripcion-carrera";
        desc.style.marginBottom = "1rem";
        desc.style.color = "#ccc";
        contenedor.insertBefore(desc, lista);
    }
    document.getElementById("descripcion-carrera").textContent = carrera.descripcion;

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
