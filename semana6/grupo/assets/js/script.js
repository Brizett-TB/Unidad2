// Invertir arreglo

//Contar Vocales
const countVowels = (str) => {
    let counter = 0;  // Inicializa el contador a 0
        const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];  // Lista de vocales
    
        // Itera sobre cada carácter de la cadena
        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {  // Verifica si el carácter actual es una vocal
                counter++;  // Incrementa el contador si es una vocal
            }
        }
    
        return counter;  // Retorna el número total de vocales
    };
    module.exports = countVowels;

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