
//HACER UN ARRAY DE MESES
console.log('ORIGINAL');
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.table(meses);


console.log('CAMBIADO');

meses.pop(); //QUITAR ULTIMO MES
meses.shift(); //QUITAR PRIMER MES
meses.push('Enero2'); //PONER REGISTRO AL FINAL
meses.unshift('Diciembre Anterior');


console.table(meses);


console.log('AGREGAR UN ARRAY SIN AFECTAR EL ORIGINAL');
const nuevoMes = [...meses, 'DICIEMBRE 3'];

console.table(nuevoMes);

// ELIMINAR UN ARREGLO SIN AFECTAR LOS DEMÁS
console.log('ELIMINAR UN ARREGLO SIN AFECTAR LOS DEMÁS');
meses.splice(3,6);
console.table(meses);
