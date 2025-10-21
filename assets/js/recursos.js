const carreras = {
    sistemas: {
        nombre: "Ingeniería de Sistemas Informáticos",
        descripcion: "Especialistas en tecnología y desarrollo de software",
        materias: {
            "Introducción a la Informática": [{ nombre: "Material X", enlace: "#" }],
            "Programación I": [{ nombre: "Material X", enlace: "#" }],
            "Manejo de Software para Microcomputadoras": [{ nombre: "Material X", enlace: "#" }],
            "Programación II": [{ nombre: "Material X", enlace: "#" }],
            "Estructuras de Datos": [{ nombre: "Material X", enlace: "#" }],
            "Programación III": [{ nombre: "Material X", enlace: "#" }],
            "Sistemas y Procedimientos": [{ nombre: "Material X", enlace: "#" }],
            "Arquitectura de Computadoras": [{ nombre: "Material X", enlace: "#" }],
            "Diseño de Sistemas I": [{ nombre: "Material X", enlace: "#" }],
            "Diseño de Sistemas II": [{ nombre: "Material X", enlace: "#" }]
        }
    },
    electrica: {
        nombre: "Ingeniería Eléctrica",
        descripcion: "Especialistas en sistemas eléctricos y energía",
        materias: {
            "Sistemas Digitales": [{ nombre: "Material X", enlace: "#" }]
        }
    },
    industrial: {
        nombre: "Ingeniería Industrial",
        descripcion: "Profesionales en optimización de procesos y sistemas productivos",
        materias: {
            "Historia Social y Económica de El Salvador y C.A.": [{ nombre: "Material X", enlace: "#" }],
            "Fundamentos de Economía": [{ nombre: "Material X", enlace: "#" }],
            "Métodos de Optimización": [{ nombre: "Material X", enlace: "#" }],
            "Ingeniería Económica": [{ nombre: "Material X", enlace: "#" }],
            "Recursos Humanos": [{ nombre: "Material X", enlace: "#" }],
            "Psicología Social": [{ nombre: "Material X", enlace: "#" }]
        }
    },
    ciencias: {
        nombre: "Unidad de Ciencias Básicas",
        descripcion: "Responsable de la formación inicial de los estudiantes de la Facultad de Ingeniería y Arquitectura en áreas de matemática, física y estadística",
        materias: {
            "Matemática I": [{ nombre: "Material X", enlace: "#" }],
            "Matemática II": [{ nombre: "Material X", enlace: "#" }],
            "Matemática III": [{ nombre: "Material X", enlace: "#" }],
            "Matemática IV": [{ nombre: "Material X", enlace: "#" }],
            "Probabilidad y estadística": [{ nombre: "Material X", enlace: "#" }],
            "Métodos Experimentales": [{ nombre: "Material X", enlace: "#" }],
            "Física I": [{ nombre: "Material X", enlace: "#" }],
            "Física II": [{ nombre: "Material X", enlace: "#" }],
            "Física III": [{ nombre: "Material X", enlace: "#" }]
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
