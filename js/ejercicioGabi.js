/*
Escribe una función llamada esPrimo que tome un número como parámetro y determine si es primo o no. La función debe devolver true si es primo y false si no lo es. Un número primo es aquel que solo es divisible por 1 y por sí mismo.
*/

let num = prompt("Ingrese un numero");



const esPrimo = (num) =>{
  let Primo = true;
  for(let i = 2; i < num / 2; i++){
  if(num % i === 0){
    Primo = false;
    }
  }
  if(Primo){
  console.log("Si es un numero primo " + num)
}else{
  console.log("No es un numero Primo " + num)
}
}

const resultado = esPrimo(num);

console.log(resultado)