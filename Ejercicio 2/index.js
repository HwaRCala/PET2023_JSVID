let numeros = [
    Number(num1= prompt("Ingrese primer numero a ordenar")),
    Number(num2 = prompt("Ingrese segundo numero a ordenar")),
    Number(num3 = prompt("Ingrese tercer numero a ordenar")),
    Number(num4 = prompt("Ingrese cuarto numero a ordenar")),
    Number(num5 = prompt("Ingrese quiinto numero a ordenar")),]

if (numeros === NaN) {alert("Debe ingresar solo numeros")};

numeros.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

document.write(numeros);
