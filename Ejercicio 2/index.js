num1 = prompt("Ingrese primer numero a ordenar");
num2 = prompt("Ingrese segundo numero a ordenar");
num3 = prompt("Ingrese tercer numero a ordenar");
num4 = prompt("Ingrese cuarto numero a ordenar");
num5 = prompt("Ingrese quinto numero a ordenar");

let numeros = [Number(num1),Number(num2),Number(num3),Number(num4),Number(num5),]

numeros.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

document.write(numeros);
