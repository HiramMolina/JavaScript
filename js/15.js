
const numeros = [10,20,30,40,50]; 

//para agregar un arreglo en el indice final (EJ 5.)
numeros[3] = 60;

numeros.push(234234); //AGREGAR AL FINAL DEL ARREGLO


numeros.unshift(-10,2,3); // AGREGAR AL INICIO DEL ARREGLO
console.table(numeros);




const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop();    //Elimina el ultimo elemento
// meses.shift();  //Elimina el primer elemento
// meses.splice(2,1); //Elimina un arreglo
console.table(meses);

//REST OPERATOR O SPREAD OPERATOR
//Agregar un mes al final sin afectar el arreglo original
const nuevoArreglo = ['Diciembre', ...meses, 'Junio' ];
console.table(nuevoArreglo);