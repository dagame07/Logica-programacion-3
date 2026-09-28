const inputNumero = document.getElementById("inputNumero");
const btnCalcular = document.getElementById("btnCalcular");
const divResultado = document.getElementById("resultado");
const divError = document.getElementById("error");

function mostrarError(mensaje) {
    divResultado.hidden = true;
    divError.textContent = mensaje;
    divError.hidden = false;
}

function mostrarResultado(numero, factorial) {
    divError.hidden = true;
    divResultado.innerHTML = "";

    const titulo = document.createElement("p");
    titulo.className = "titulo";
    titulo.textContent = `El factorial de ${numero} es:`;

    const valor = document.createElement("p");
    valor.className = "valor";
    valor.textContent = factorial.toString();

    divResultado.append(titulo, valor);
    divResultado.hidden = false;
}

function calcularFactorial() {
    // Leer el valor desde el input (antes era prompt)
    const texto = inputNumero.value.trim();
    const numero = Number(texto);

    // Validar que sea un entero no negativo (antes era alert)
    if (texto === "" || !Number.isInteger(numero) || numero < 0) {
        mostrarError("Por favor, ingrese un número entero no negativo.");
        return;
    }

    // Calcular el factorial con BigInt para no perder precisión en números grandes
    let factorial = 1n;
    for (let i = 1n; i <= BigInt(numero); i++) {
        factorial *= i;
    }

    mostrarResultado(numero, factorial);
}

btnCalcular.addEventListener("click", calcularFactorial);
inputNumero.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") calcularFactorial();
});