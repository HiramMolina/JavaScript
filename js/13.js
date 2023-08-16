const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    estatus: true,
}

const medidas = {
    peso: '1k',
    medida: '2m',
}

const nuevoProducto = { ...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);

//ASI SE UNEN LOS OBJETOS PARA NO MUTAR LOS OBJETOS