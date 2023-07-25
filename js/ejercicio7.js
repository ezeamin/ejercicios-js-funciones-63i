/*
7- Ingrese la temperatura en grados Celsius, determine, previo cálculo de la temperatura en grados Fahrenheit, que deporte es el más apropiado en base a la siguiente tabla.
Natación -> Temperatura > 85
Tenis -> 35 < Temperatura <= 85
Esqui -> 32 < Temperatura <= 35|
Otros -> Temperatura <= 32
✓ Nota: Grados Fahrenheit = 9/5 * (grados Celsius) + 32
*/


const deporte = (gradosCelsius) =>{
let gradosFarenheit = 0;
    gradosFarenheit = 9 % 5 * gradosCelsius + 32;
if(gradosFarenheit > 85){
    return "natacion";
} 
else if(gradosFarenheit <=85 && gradosFarenheit > 35){
    return "tenis";
} 
else if(gradosFarenheit > 32 && gradosFarenheit <=35){
    return "esqui";
}
else if (gradosFarenheit <= 32){
return "otros";
}
}
gradosCelsius=prompt("ingrese una temperatura")
const resultado = deporte(gradosCelsius)
console.log(resultado)