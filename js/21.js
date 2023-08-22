//Metodos de propiedad
// Mantienen toda la información dentro de un objeto

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Canción ID: ${id}`);
    },
    detener : function() {
        console.log('Canción detenida')
    }
}

reproductor.reproducir(25);
reproductor.detener();