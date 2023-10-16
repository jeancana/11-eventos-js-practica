
// ***************  ESCUCHANDO los Eventos que estan Por Fuera del DOM  ***************

// Eventos del Objeto Global Window

// 1. Escuchando el evento Scroll del Obj Window
window.addEventListener('scroll', () => {
    //console.log('scrolling')

    // Aca estoy Seleccionando al tercer parrafo mediante el atributo class = 'resaltado'
    const resaltado = document.querySelector('.resaltado')

    // Esto me da el tamano(size) del elemento y la ubicacion, respecto a la ubicacion actual (de momento)
    const ubicacion = resaltado.getBoundingClientRect()

    // Para Saber exactamente donde arranca el tercer Parrafo 
    //console.log(ubicacion.top)

    if (ubicacion.top < 100) {
        console.log('ya esta visible')
    } else { 
        console.log('No esta visible ')
    }
})