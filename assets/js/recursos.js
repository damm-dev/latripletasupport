const carreras = {
    sistemas: {
        nombre: "Ingeniería de Sistemas Informáticos",
        descripcion: "Especialistas en tecnología y desarrollo de software",
        materias: {
            "Introducción a la Informática": [
                { nombre: "Guía 1", enlace: "https://f1d30bb1-75a0-4a28-b79b-dc94e21a531d.filesusr.com/ugd/84f8d4_fb8fe014c50e4a7cb1fb311eff296528.pdf" },
                { nombre: "Guía 2", enlace: "https://f1d30bb1-75a0-4a28-b79b-dc94e21a531d.filesusr.com/ugd/84f8d4_6f639f57b1d9444d933de719d5f369d2.pdf" },
                { nombre: "Guía 3", enlace: "https://f1d30bb1-75a0-4a28-b79b-dc94e21a531d.filesusr.com/ugd/84f8d4_a6a28ec99167413085e7b29b91498c3b.pdf" }
            ],
            "Programación I": [
                { nombre: "Guía 1", enlace: "https://f1d30bb1-75a0-4a28-b79b-dc94e21a531d.filesusr.com/ugd/84f8d4_3813d3278476459b8dad5b8b982ae1b6.pdf" },
                { nombre: "Guía 2", enlace: "https://f1d30bb1-75a0-4a28-b79b-dc94e21a531d.filesusr.com/ugd/84f8d4_8acd8704337a475eb566e8fc054f72bd.pdf" },
                { nombre: "Guía 3", enlace: "https://f1d30bb1-75a0-4a28-b79b-dc94e21a531d.filesusr.com/ugd/84f8d4_069b0032eacc4d7cb1e461a98c1f43d3.pdf" }
            ],
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
