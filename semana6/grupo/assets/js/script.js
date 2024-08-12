// Invertir arreglo

//Contar Vocales


// Función par/impar 
const comprobar = (n) => {
    if (n % 2 === 0) {
        return 0;  // Retorna 0 si el número es par
    } else {
        return 1;  // Retorna 1 si el número es impar
    }
};

module.exports = comprobar;

//NNúmero mayor que otro 
const max = (A, B, C) => {
    if (A >= B && A >= C) {
        return A;  // Retorna A si es mayor o igual que B y C
    } else if (B >= A && B >= C) {
        return B;  // Retorna B si es mayor o igual que A y C
    } else {
        return C;  // Retorna C si es mayor o igual que A y B
    }
};

module.exports = max;

// Determinar si un número es primo 

// Puedes conducir y votar?

// Determinar si dos números son pares
const areEven = (n, m) => {
    return n % 2 === 0 && m % 2 === 0
 
 };
 
 module.exports = areEven;