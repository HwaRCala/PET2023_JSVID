let numeros = [
    num1 = Number(prompt("Ingrese primer numero a ordenar")),
    num2 = Number(prompt("Ingrese segundo numero a ordenar")),
    num3 = Number(prompt("Ingrese tercer numero a ordenar")),
    num4 = Number(prompt("Ingrese cuarto numero a ordenar")),
    num5 = Number(prompt("Ingrese quiinto numero a ordenar")),]

if (isNaN(numeros)=false) 
    {document.location.reload()}

numeros.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

document.write(num1+num2);