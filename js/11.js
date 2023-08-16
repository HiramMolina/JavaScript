// Objetos

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

// Como crear un objeto

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


// console.log(producto.precio);

// console.log(producto["precio"]);

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

//Eliminar propiedades
delete producto.precio;

console.log(producto);