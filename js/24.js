var km = 1;

console.log('Recorriendo ' + km + ' km al día');


// for (let dia = 1; dia < 10; dia++) {
// console.log('El dia ' + dia + ' corre ' + dia + ' kilometros');
// camino = dia + dia;
// console.log('De regreso, hace ' + dia + ' kilometros extra, haciendo un total de ' + camino + ' kilometros');
// }
dia = 0
camino = 0
total = 0
n = 0
// while(dia < 10){
//     dia++
//     console.log('El dia ' + dia + ' corre ' + dia + ' kilometros');
//         camino = dia + dia;
//     console.log('De regreso, hace otros ' + dia + ' kilometros, haciendo un total de ' + camino + ' kilometros en el dia');
// }

// do {
//     dia++
//     console.log('El dia ' + dia + ' corre ' + dia + ' kilometros');
//         camino = dia + dia;
//     console.log('De regreso, hace otros ' + dia + ' kilometros, haciendo un total de ' + camino + ' kilometros en el dia');
// } while (dia < 10);

function corredor(){
    do {
        dia++
        console.log('El dia ' + dia + ' corre ' + dia + ' kilometros');
            camino = dia + dia;
        console.log('De regreso, hace otros ' + dia + ' kilometros, haciendo un total de ' + camino + ' kilometros en el dia');
        total = camino + camino
        if(dia <= 365){
            n = n + camino;
        }
    } while (dia < 365);
    return total;
}

corredor(1);
console.log(n);
