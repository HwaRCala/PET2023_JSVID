// Pedir al usuario que introduzca los 5 números
let numeros = [];
for(let i = 0; i < 5; i++) {
  let numero = prompt(`Introduce el número ${i+1}:`);
  // Validar que el usuario haya introducido un número válido
  while(isNaN(numero) || numero === "") {
    numero = prompt(`El valor introducido no es un número válido. Introduce el número ${i+1}:`);
  }
  numeros.push(Number(numero));
}

// Ordenar los números de menor a mayor

numeros.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

document.write(numeros);