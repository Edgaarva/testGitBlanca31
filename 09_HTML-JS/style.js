let nombre = document.getElementById('nombre')
let telefono = document.getElementById('telefono')
let pizza = document.getElementById('pizza')
let boton = document.getElementById('boton')
let mostrar = document.getElementById('mostrar')



const mostrarInput = ( ) => {

    let texto = nombre.value
    let texto = telefono.value
    let texto = pizza.value

    mostrarnombre.innerHTML = textonombre
    mostrartelefono.innerHTML = textotelefono
    mostrarpizza.innerHTML = textopizza
    

}
boton.addEventListener('click', mostrarInput)
