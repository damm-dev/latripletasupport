const carreras = {
    sistemas: {
        nombre: "Ingeniería de Sistemas Informáticos",
        descripcion: "Especialistas en tecnología y desarrollo de software",
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
    ciencias: {
        nombre: "Unidad de Ciencias Básicas",
        descripcion: "Responsable de la formación inicial de los estudiantes de la Facultad de Ingeniería y Arquitectura en áreas de matemática, física y estadística",
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

    document.getElementById("titulo-carrera").textContent = carrera.nombre;
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
