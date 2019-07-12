let titulo = document.getElementById('titulo')
let subtitulo = document.getElementById('subtitulo')
let boton = document.getElementById('boton')
let input = document.getElementById('input')
let mostrar = document.getElementById('mostrar')

const cambiar = () => {
    titulo.innerHTML = 'Estoy cambiando por una funcion :D'
    subtitulo.innerHTML = 'Soy el jefe xd'
}


const mostrarInput = ( ) => {

    let texto = input.value

    mostrar.innerHTML = texto

}

boton.addEventListener('click', mostrarInput)
boton.addEventListener('click', cambiar)


//console.log('input')
//console.log('button')

//console.log('etiqueta')
//console.log(texto)

// const cambiar=()=>{

//     etiqueta.innerHTML= 'Es un nuevo saludo'
//     texto.innerHTML= 'Es un nuevo texto '


// }

// boton.addEventListener('click', cambiar)

