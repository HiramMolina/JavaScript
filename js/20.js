function sumar(n1,n2){
    return n1+n2;
}
const resultado = sumar(2,3);
console.log(resultado);










let total = 0;

function agregarCarrito(precio){
    return total += precio; //total = total + precio
}

function calcularImpuesto(total){ //"Calcular impuesto" usa el total que la función anterior retorna
    return 1.15 * total;          //A la cual multiplica para sacar impuestos, para despues volver a retornar
}                                 //Return del total, para pasar a la parte de los carritos

total = agregarCarrito(200);      //Cada vez que se usa la función agregar carrito, usa el numero de los parentesis
total = agregarCarrito(400);      //Porque en la primer función "AgregarCarrito" se dijo que el digito sería el precio
total = agregarCarrito(600);

console.log(`Es un total de $${total} antes de impuestos.`);
const totalAPagar = calcularImpuesto(total); // Aquí se declara que totalAPagar es equivalente al resultado
                                             // de la operación de la segunda función, reutilizando la formula.
console.log(`Es un total de $${totalAPagar} CON impuestos`);