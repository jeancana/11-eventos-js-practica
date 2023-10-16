
// ******* EJEMPLOS AVANZADO - EVENTOS (Formularios/form) ********

// Capturando el formulario ()
const formulario = document.querySelector('.formulario');

// Nota: los formularios tienen sus propios Eventos - El mas COMUN es el Evento Submit

// Usando el evento Submit del .formulario
// El submit esta asociado al action del formulario  
// Cada vez que se hace un submit se recarga la pagina 

formulario.addEventListener('submit', (submitEvent) => { 
   
    // Para evitar que se vaya el formulario de un solo golpe y NO me permita ver la validaciones creadas uso el metodo.preventDefault()
    // Evita que el evento se vaya y despues yo lo puedo enviar Manual 
    submitEvent.preventDefault()
    
    //verificando que envio el evento 
    console.log('enviando formulario')

    let classBusqueda= document.querySelector('.busqueda')
    
    // Logica operando: verifca que la clase Input NO este vacia (cuando coloco las "" juntas indica vacio) - por eso usamos el atributo .value del elemento Input
    if (classBusqueda.value != "") {
        console.log(`El Submit classBusqueda contiene: ${classBusqueda.value}`)

        // Hacemos - submit(enviamos el formulario) de forma Manual : Luego de verificado que la clase busqueda tiene valores dentro 
        formulario.submit()

    } else { 
        console.log('No mostrar Nada')
    }

})

// Escuchando TODO LOS EVENTOS del ELEMENTO <a></a>
// Como existe mas de una elemento <a></a>, entonces tengo un coleccion html (Array de elementos para Javascript) debo recorrerlo con un forOf  

let links = document.querySelectorAll('a');

for (let link of links) {

    // Como los Anclas <a></a> tiene un evento predeterminado (como lo tiene el submit)// le paso un parametro la funcion para poder detenerlo 
    link.addEventListener('click', (anclaEvent) => {
        
        // Aca estoy deteniendo el evento predeterminado del Ancla 
        anclaEvent.preventDefault()

        // Viendo EXACTAMENTE a que <a></a> le hice click a traves del ATRUBITO .target
        console.log(anclaEvent.target)

        // Viendo EL CONTENIDO (string) del <a></a> al que le hice click a traves del ATRUBITO .target
        console.log(anclaEvent.target.textContent)
    })
}

// EL .preventDefault() FUNCIONA PRINCIPALMENTE PARA 2 casos FORMULARIOS Y ANCLAS 
