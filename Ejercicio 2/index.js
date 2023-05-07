// Pedir que se introduzcan los 5 números
let numeros = [];
for(let i = 0; i < 5; i++) {
  let numero = prompt(`Introduce el número ${i+1}:`);
  // Validar que el usuario haya introducido un número válido
  while(isNaN(numero) || numero === ""|| numero == " ") {
    numero = prompt(`El valor introducido no es un número válido. Introduce el número ${i+1}:`);
  }
  numeros.push(Number(numero));
}

// Ordenar los números de menor a mayor ".sort"

//numeros.sort( function( a , b){
//    if(a > b) return 1;
//    if(a < b) return -1;
//    return 0;
//});

// Ordenar los números de menor a mayor ".forEach"

//numeros.forEach((numero, index, array) => {
//  for (let j = index + 1; j < array.length; j++) {
//    if (numero > array[j]) {
//      let temp = numero;
//      array[index] = array[j];
//      array[j] = temp;
//      numero = array[index];
//    }
//  }
//});

// Ordenar los números de menor a mayor ".map"

//numeros = numeros.map((numero, index, array) => {
//  for (let j = index + 1; j < array.length; j++) {
//    if (numero > array[j]) {
//      let temp = numero;
//      array[index] = array[j];
//      array[j] = temp;
//      numero = array[index];
//    }
//  }
//  return numero;
//});

// Ordenar los números de menor a mayor ".filter"

//numeros = numeros.filter((numero, index) => {
//  for(let i = index+1; i < numeros.length; i++){
//    if(numero > numeros[i]){
//      let temp = numero;
//      numero = numeros[i];
//      numeros[i] = temp;
//    }
//  }
//  return numero;
//});

// Ordenar los números de menor a mayor ".reduce"-".splice"

numeros = numeros.reduce((acumulador, valorActual) => {
  if (acumulador.length === 0) {
    return [valorActual];
  } else {
    for (let i = 0; i < acumulador.length; i++) {
      if (valorActual < acumulador[i]) {
        acumulador.splice(i, 0, valorActual);
        return acumulador;
      }
    }
    return acumulador.concat(valorActual);
  }
}, []);

alert(`Los números ordenados de menor a mayor son: ${numeros}`);