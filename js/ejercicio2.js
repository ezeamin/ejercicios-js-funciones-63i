/*
2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/


let texto = prompt("Ingrese una texto");
const cadenaDeTexto = (texto) =>{
  if(texto === texto.toUpperCase()){
    console.log("el texto contiene mayusculas")
  }else if(texto === texto.toLowerCase ()){
    console.log("el texto contiene minusculas")
  }else{
    console.log("el texto contiene minusculas y mayusculas")
  }
}

const res = cadenaDeTexto(texto);

console.log(res);