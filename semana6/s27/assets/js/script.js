/* 
Sintaxis

function nombreDeLaFuncion(parametro1, parametro2) {
  // Bloque de codigo de la función, indentado 
  return valorDeRetorno
}

- Palabra reservada function
- Nombre de la función, siguiendo las mismas reglas de las variables
- Parentesis de apertura y cierre obligatorio
- Si nuestra función recibe parametros, los colocamos dentro de los parentesis, separados  por comas si hay mas de uno
- abrir llaves
- bloque de codigo a ejecutar de la función
- el retorno de datos si nuestra funcion los necesita
- cerrar llaves
*/
/*
// Función para sumar los números
function sumar(x,y) {
    let resultado = x + y;

    return resultado;
}

// Llamar a la función
let respuesta = sumar(16,17);
console.log(respuesta);
//console.log(sumar(16,17));
console.log("")

// Resta
function restar(x,y) {
    let solucion = x - y;

    return solucion;
}

let rpta = restar (20,16);
console.log(rpta);
console.log("")

//Multiplicar
function multi(x,y) {
    let resultado = x * y;

    return resultado;
}

let xd = multi (4,2);
console.log(xd);
console.log("") 

//Dividir

function dividir(x,y) {
  if(y != 0) {
      let division = x / y;

       return division;
    }
}

let resultado2 = dividir (20,4);
console.log(resultado2);
console.log("")
*/

// Arrow function significa funcion de flecha

//Sumar
let sumar = (x,y) => x + y;

// Llamar a la función
let respuesta = sumar(19,4);
console.log(respuesta);
console.log("");

//Restar
let restar = (x,y) => {
    let resultado = x -y ;
    return resultado;
}


// Llamar a la función
let respuestaResta = restar(19,4);
console.log(respuestaResta);
console.log("");

// Multiplicar 
let multiplicar = (x,y) => x*y;

// Llamar a la función
let wasaa = multiplicar(5,4);
console.log(wasaa);
console.log("");

//Dividir
let dividir = (x,y) => {
    if(y != 0) {
        let division = x / y;
  
         return division;
      }
      return "error, ta mal"; 
} 


// Llamar a la función
let res = dividir(50,0);
console.log(res);
console.log("");


