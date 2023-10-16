
// ***************** EVENTOS MAS COMUNES ****************

// ** 1)Eventos de mouse/raton: Se producen por la interaccion del usuario con el mouse

// Nota: la query es a una clase y al ser selecionada debe ir con un punto por delante ejm: ".navegacion"
const nav = document.querySelector('.navegacion')

// Escuchando el Evento mouseenter (El puntero del mouse entra a un elemento)en el todo NODO <nav> </nav>
nav.addEventListener('mouseenter', () => { 
    console.log(" Aca viendo un Evento de mouseenter y le pusimos color")
    // Usando Propiedades Style en JS (se debe usar en camelCase) para hacerlo mas interactivo y explicarlo mejor 
    nav.style.backgroundColor = 'yellow'
})

// Escuchando el Evento mouseout (El puntero del sale de un elemento)en el todo NODO <nav> </nav>
nav.addEventListener('mouseout', () => {
    console.log(" Aca viendo un Evento de mouseout y le pusimos color")
    nav.style.backgroundColor = 'transparent'
})

// ---- OTROS EVENTOS Mas Comunes de Mouse ----
// mousedowm - cuando presionamos el mouse 
// mouseup - cuando soltamos el mouse luego de presionarlo
// click - 
// dbclick - doble click --> ejemplo: si queremos abrir un archivo  


// ** 2)Eventos de teclado : Se producen por la interaccion del usuario con el teclado

const busqueda = document.querySelector('.busqueda')

// input - ES EL METODO MAGIGO 
// OJO IMPORTANte: Los escuchadoresDeEventos/listener me relagan un Objeto del evento (inputEvent, keyboardEvent ...), con el cual puedo capturar lo que el usuario esta mandando 

busqueda.addEventListener('input', (inputEvent) => { 
    //console.log('Esto es una Evento de teclado - input')
    console.log(inputEvent.data)
})

/* // keydown - cuando se presiona una tecla
busqueda.addEventListener('keydown', () => {
    console.log('Esto es una Evento de teclado - keydown')
})

// keyup - cuando la tecla se suela 
busqueda.addEventListener('keyup', () => {
    console.log('Esto es una Evento de teclado - keyup')
}) */


// ** 3)Eventos de enfoque y desenfoque : Se producen por la interaccion del usuario con el teclado

// blur - cuando dejo de esta en foco se ejecuta

busqueda.addEventListener('blur', () => {
    console.log('Esto es una Evento de teclado - blur/Desenfoque')
})

// focus - cuando estoy en foco se ejecuta 
busqueda.addEventListener('focus', () => {
    console.log('Esto es una Evento de teclado - focus/enfoque')
})


// -----  OTROS TIPOS DE EVENTOS ------

// - copy
// - cut
// - paste 