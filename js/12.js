//Object methods

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    estatus : true,
}
Object.seal(producto);
// SEAL permite editar propiedades existentes
// ObjectFreeze no permite hacer nada

producto.imagen = 'imagen.jpg';


console.log(Object.isSealed(producto));

console.log(producto)