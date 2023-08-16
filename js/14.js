//Arreglos o Arrays
// Sirven para agrupar elementos del mismo tipo o relacionados

const numeros = [10,20,30,40,50];  //Los corchetes "[]" son arreglos usualmente

console.log(numeros);

console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo');

console.table(meses);


//Acceder a los valores de un arreglo
console.log(numeros[2])


//Conocer la extensión de un arreglo
console.log(meses.length);

meses.forEach(function(meses) {
    console.log(meses);
}) //Ejecutar por cada que haya un registro
