function limpiar() {
    document.getElementById("entrada").innerHTML = "";
}
function encriptar() {
   
    let original = document.getElementById("entrada").value;
    let secreto = original.replace(/e/g, "enter");
    secreto = secreto.replace(/i/g, "imes");
    secreto = secreto.replace(/a/g, "ai");
    secreto = secreto.replace(/o/g, "ober");
    secreto = secreto.replace(/u/g, "ufat");
    

    if (secreto.length != 0) {

        var resultado = document.getElementById("result");

        // Eliminamos todos los elementos hijos de la capa "resultado"
        while (resultado.firstChild) {
            resultado.removeChild(resultado.firstChild);
        }

        // Creamos un elemento de párrafo para el texto encriptado o desencriptado
        var texto = document.createElement("p");
        texto.textContent = secreto; // Aquí va el texto encriptado o desencriptado que quieras mostrar
        texto.classList.add("salida");

        // Creamos un botón para copiar el texto al portapapeles
        var boton = document.createElement("button");
        boton.textContent = "Copiar";
        boton.addEventListener("click", function () {
            // Al hacer clic en el botón, copiamos el texto al portapapeles
            navigator.clipboard.writeText(secreto);
        });
        boton.classList.add("copia");
        // Agregamos el texto y el botón a la capa "resultado"
        resultado.appendChild(texto);
        resultado.appendChild(boton);
        resultado.classList.add("respo");


    } else {
        alert("necesita ingresar texto");
        
    }

}

function desencriptar() {
   
    let secreto = document.getElementById("entrada").value;
    let original = secreto.replace(/enter/g, "e");
    original = original.replace(/imes/g, "i");
    original = original.replace(/ai/g, "a");
    original = original.replace(/ober/g, "o");
    original= original.replace(/ufat/g, "u");
    

    if (secreto.length != 0) {

        var resultado = document.getElementById("result");

        // Eliminamos todos los elementos hijos de la capa "resultado"
        while (resultado.firstChild) {
            resultado.removeChild(resultado.firstChild);
        }
        
        // Creamos un elemento de párrafo para el texto encriptado o desencriptado
        var texto = document.createElement("p");
        texto.textContent = original; // Aquí va el texto encriptado o desencriptado que quieras mostrar
        texto.classList.add("salida");
        // Creamos un botón para copiar el texto al portapapeles
        var boton = document.createElement("button");
        boton.textContent = "Copiar";
        boton.addEventListener("click", function () {
            // Al hacer clic en el botón, copiamos el texto al portapapeles
            navigator.clipboard.writeText(original);
        });
        boton.classList.add("copia");
        // Agregamos el texto y el botón a la capa "resultado"
        resultado.appendChild(texto);
        resultado.appendChild(boton);
        resultado.classList.add("respo");
    } else {
        alert("necesita ingresar texto");
        
    }

}
