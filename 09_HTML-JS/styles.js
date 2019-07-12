//Inputs
let inputNombre = document.getElementById('inputNombre')
let inputTelefono = document.getElementById('inputTelefono')
let inputPizza = document.getElementById('inputPizza')
//etiqueta p
let mostrarNombre = document.getElementById('nombre')
let mostrarTelefono = document.getElementById('telefono')
let mostrarPizza = document.getElementById('pizza')
//boton
let boton = document.getElementById('boton')
//card
let card = document.getElementById('card')


const accion = () => {

    let textoNombre = inputNombre.value
    let textoTelefono = inputTelefono.value
    let textoPizza =  inputPizza.value
    let pizzamin = textoPizza.toLowerCase()

    mostrarNombre.innerHTML = textoNombre
    mostrarTelefono.innerHTML = textoTelefono

    console.log(pizzamin)

    if( pizzamin === 'con'){

        mostrarPizza.innerHTML = ':C'
        
    }else if(pizzamin === 'sin'){

        mostrarPizza.innerHTML = 'C:'

    }else{
        mostrarPizza.innerHTML = 'Introduce otra cosa'

    }

    //aparecer card
    card.classList.remove('desaparecer')

}       
    
    
    boton.addEventListener('click', accion)

    
    




