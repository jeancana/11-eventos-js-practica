//alert('hola')

// ******************* EVENTOS EN JAVASCRIPT ***********************

/* 

un EVENTO es una acción o suceso que ocurre en una página web y que puede ser detectado y utilizado para desencadenar una respuesta programática.Los eventos son fundamentales para crear interactividad en las páginas web y permiten a los desarrolladores responder a las acciones del usuario, como hacer clic en un botón, mover el mouse sobre un elemento, presionar una tecla del teclado, cargar una página, etc.

Aquí hay algunos ejemplos comunes de eventos en JavaScript:

1. Clic (click): Ocurre cuando un elemento(como un botón) es clicado por el usuario.

2. Mouse encima (mouseover) y mouse fuera(mouseout): Estos eventos se activan cuando el puntero del mouse se coloca sobre un elemento(mouseover) o se retira de él(mouseout).

3.Carga de página (load) : Ocurre cuando una página web o un recurso se ha cargado completamente en el navegador.

4. Presionar una tecla(keydown, keyup): Estos eventos ocurren cuando una tecla del teclado es presionada(keydown) o liberada(keyup).

5. Cambiar un elemento(change): Se activa cuando el valor de un elemento de formulario, como un cuadro de texto o una casilla de verificación, cambia.

6. Enviar un formulario(submit): Ocurre cuando se envía un formulario web, por ejemplo, al hacer clic en un botón "Enviar".

7. ntervalo de tiempo(interval): Se utiliza para ejecutar una función en intervalos de tiempo regulares.

*/

//*********** MANENO DE EVENTOs EN  JavaScript **************

//Se utilizan event listeners(escuchadores de eventos), que son funciones que se adjuntan a elementos HTML específicos y que se activan cuando ocurre un evento específico en ese elemento. Los event listeners permiten que los desarrolladores definan acciones personalizadas que se deben tomar cuando un evento ocurre.

// Permite Dar nombre/definir que Evento se va escuchar sobre cualquier Elemento Seleccionado y se queda esperando(Escucha) hasta que ese evento suceda para reaccionar y ejecutar el bloque de codigo programado 

/* Aquí hay una lista de algunos eventos comunes que puedes usar:

** Eventos de ratón - mouse /// MUY USADO TODOS ///:
- click: Se activa cuando se hace clic en el elemento.
- mouseover: Se activa cuando el puntero del ratón se mueve sobre el elemento.
- mouseout: Se activa cuando el puntero del ratón se mueve fuera del elemento.
- mousedown: Se activa cuando se presiona un botón del ratón mientras el puntero está sobre el elemento.
- mouseup: Se activa cuando se libera un botón del ratón mientras el puntero está sobre el elemento.
- mousemove: Se activa cuando el puntero del ratón se mueve dentro del elemento.

** Eventos de teclado /// MUY USADO TODOS /// :
- keydown: Se activa cuando se presiona una tecla en el teclado.
- keyup: Se activa cuando se libera una tecla del teclado.

** Eventos de formulario /// MUY USADO TODOS ///:
- submit: Se activa cuando se envía un formulario. 
- input: Se activa cuando se cambia el valor de un elemento de formulario(por ejemplo, un campo de entrada de texto). 
- change: Se activa cuando cambia el valor de un elemento de formulario(por ejemplo, un cuadro de selección). 

----------- POCO USADOS EN GENERAL -------------- 

** Eventos de ventana:
- load: Se activa cuando se ha cargado completamente una página web.
- resize: Se activa cuando se cambia el tamaño de la ventana del navegador.
- scroll: Se activa cuando se realiza un desplazamiento en la página.

**Eventos de enfoque y desenfoque:
- focus: Se activa cuando un elemento obtiene el foco.
- blur: Se activa cuando un elemento pierde el foco.

** Eventos de tiempo:
- setTimeout: Se utiliza para ejecutar una función después de un cierto tiempo.
- setInterval: Se utiliza para ejecutar una función en intervalos de tiempo regulares. */


// *** Existen 3 Formas de trabajar Eventos en JS - Son los 3 mas Comunes Usados 


// ------ Opcion Nro. 1 - EL METODO addEventListener('nombreDelEventoAescuchar' ,  ()=>  ) 

// Seleccionando el NODO <button></button> a traves de su ID - para el escuchar el Evento "click" 

let btn = document.querySelector('#btn')

// **NOTA IMPORTANTE: la HOF addEventListener() lleva 2 parametros 
// Parametro 1 es: una cadena de texto y se coloca el nombre del Evento de Deseo Escuchar 
// Parametro 2 es: una Funcion - Definida como callback 

// ** 3 Formas de Manejar la funcion Callback dentro de un .addEventListener()

// 1) Creando la funcion Afuera e invocandola/llamandola

function manejarClick() {
    alert("la vida sin es una Galleta sin Chispas")
}
// btn.addEventListener("click", manejarClick)

// 2) Usando una funcion Anonima 
// btn.addEventListener("click", function () { alert( "Click en el Boton 2 ") })

// 3) Usando ArrowFunction
btn.addEventListener("click", () => { alert("Click en el Boton 3 ") })


// ------ Opcion Nro. 2 - Usando el NODO para Definir el Evento a escuchar ( ejemplo: btn.onclick ) 

// Nota Importante: La propiedad del Evento que queremos Escuchar siempre debe llevar la palabra "on" como prefijo 
// ejemplo: .onclick / .onkeydown / .onseTimeout
// Tambien se le puede asignar funciones anominas para que el Evento genere una respuesta despues de escuhar.

let btn2 = document.querySelector('#btn2')

// Logica Operando: escuchando el evento click de la variable btn y asigando un funcion como respuesta a la escucha del Evento 

// 1) Usando una funcion Anonima 
/* btn2.onclick = function () {
    alert('Estoy haciendo Click en el Boton')
} */

// 2) Usando ArrowFunction 
//btn2.onclick = () => { alert('Segunda Vez Hago CLick')} 

// 3) Invocando/llamando la funcion "manejarClick"
// OJO Nota Importante: que el evento se ejecute correctamente no debemos hacer conjuncion ()  - solo se llama NO colocar los parentisis ... sino el evento se adelanta el click 
btn2.onclick = manejarClick



// ------ Opcion Nro. 3 - Manejando el Evento en el atributo de una Etiqueta HTML 
// NO ES UNA BUENA PRACTICA 