// Diferencias ente metodo y función

// const numero1 = 20;
// const numero2 = "20";

// console.log(parseInt(numero2)); //ParseInt es una función)
// console.log(numero1.toString()); //Si esta el metodo despues de la variable es un metodo



//Funciones con parametros y argumentos
function sumar(n1 = 0, n2 = 0) { //Argumentos o valores reales
    console.log(n1 + n2);
}
sumar(10,10); //Aqui se va a reutilizar la función
sumar(3,3);
sumar(2,2);
sumar(8,2);
sumar(9,1);

console.log("-------------------------------------")

const sumar2 = function(n1,n2){
console.log(n1 + n2);
}
sumar2(5,10);
sumar(3,3);
sumar(2,2);
sumar(8,2);
sumar(9,3);