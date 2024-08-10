/* 
Bucle for

Es un bloque finito, porque se le indica la cantidad de veces que se debe repetir

sintaxis

for (inicio;fin;pasos) {
    // Bloque de código a repetir 
}

for: Palabra reservada
Inicio: Valor en el cual inicia el bucle
Fin: Valor en el cualtermina el , o indico como mayor menor
pasos: Intervalo entre valor y valor

ESTAS TRES EXPRESIONES INDICAN QUE A I SE LE AUMENTA 1
i++
i += 1
i = i + 1

*/

//Ejercicio 1
// Imprimir la palabra 'Hola' 10 veces
 for (let i = 0; i < 10; i++){
    console.log('Hola');
 }

 // Ejercicio 2
 // Imprimir la palabra 'Javascript' 25 veces 
 for (let i = 0; i < 25; i++){
    console.log('Javascript');
 }

  // Ejercicio 3
 // Imprimir la palabra 'Javascript' 25 veces 
 for (let i = 0; i < 10; i++){
    console.log(i);
    // En la ultima linea se actualiza el valor de i
 }
 console.log('');

 // Ejercicio 4
 // Mostrar los números del 1 al 10
 for (let i = 1; i < 11; i++){
    console.log(i);
 }
 console.log('');

 // Ejercicio 5
 // Mostrar los números desde el 4 hasta el 23(tomando el 23), de 3 en 3
for(let i = 4; i < 24; i += 3){
    console.log(i);
}
console.log('');

// Ejercicio 6
// Mostrar los numeros del 10 al 100, de 10 en 10
for(let i = 10; i < 101; i += 10){
    console.log(i)
}
console.log('');

// Ejercicio  7
// Mostrar los números del 9 al 0
for (let i = 9; i >= 0; i--){
    console.log(i);
}
console.log('');

