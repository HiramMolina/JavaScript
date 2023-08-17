//Array methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio :500},
    {nombre: 'Television 50', precio :700},
    {nombre: 'Tablet', precio :50},
    {nombre: 'Audifonos', precio :500},
    {nombre: 'Celular', precio :300},
    {nombre: 'Bocinas', precio :800},
];

// forEach

meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});


//Includes para arreglos planos a secas
let resultado = meses.includes('Marzo');


// const resultado2 = meses.includes('Celular');
//SOME ideal para arreglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular'
})

//PARA SUMAR EL RESULTADO DE LA SUMA
//REDUCE
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0)



// FILTER

resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});


console.log(resultado);