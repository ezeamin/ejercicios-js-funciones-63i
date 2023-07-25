/*
Escribe una función llamada esPrimo que tome un número como parámetro y determine si es primo o no. La función debe devolver true si es primo y false si no lo es. Un número primo es aquel que solo es divisible por 1 y por sí mismo.
*/

let numero = parseInt(prompt("Ingrese un número"));

const esPrimo = (num1) => {
    if(num1 % num1 === 0 && num1 % 1 === 0/* CORREGIR */){
        return true;
    } else {
        return false;
    }
}

let resultado = esPrimo(numero);
console.log(resultado)