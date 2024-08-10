// Solicitar el ingreso de dos números al usuario
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Comparar los números y mostrar el resultado
if (numero1 > numero2) {
    console.log("El primer número (" + numero1 + ") es mayor que el segundo número (" + numero2 + ").");
} else if (numero1 < numero2) {
    console.log("El segundo número (" + numero2 + ") es mayor que el primer número (" + numero1 + ").");
} else {
    console.log("Ambos números son iguales.");
}
