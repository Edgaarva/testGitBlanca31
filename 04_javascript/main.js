// let numerico= 10
//string

// let texto='Hola mundo'

//booleanos

// let booleanos= true
// let booleanos= false

//arreglos

// let arreglo= []

//objeto

// let objeto={}
//constante
// const perro= 'salchicha'

// + - / * %

// let num1= 10
// let num2= 50

// num1 + num2

// console.log(num1+num2)

// let nombre='Edgar'
// let saludo= 'Hola'

// console.log(saludo+' '+nombre)

// let resultado= num1+num2

// console.log(resultado)

// prompt('Ingresa tu nombre')

// console.log(ingresa)

// Challenge Preguntar al usuario su nombre, cumpleaños y su Correo, mostrarlo en 3 consola diferentes :D
// let nombre= prompt('Ingresa tu nombre')
// console.log(nombre)
// let Cumpleaños= prompt('Ingresa tu fecha de nacimiento')
// console.log(Cumpleaños)
// let Correo= prompt('Ingresa tu correo electrónico')
// console.log(Correo)


//Preguntar al usuario su año de nacimiento y mostrar su edad:
// let año= prompt('Ingresa el año de nacimiento')
// edad=2019-año
// console.log('usted tiene' + edad +' años')

// let nacimiento = prompt('Ingresa tu año de nacimiento')
//   Number(nacimiento)

//   let edad = 2019- nacimiento

//   console.log(edad)


//Variables de tipo Arreglo

// let arreglo = [ 'perrito', 'tortuga', 'hipopotamo']

// let persona = ['Edgar', 'edgarfaustinovargas@gmail.com', '5591889850' ]

// console.log(persona)
// console.log(persona[1])

//Crear un arreglo de 10 elementos y ver en la misma consola el 5 y el 9 en la misma consola

// let escuela= ['director', 'profesor','alumnos', 'clases', 'salones', 'turno', 'examenes', 'temario', 'ejercicios', 'problemario' ]
// console.log(escuela[5] +' '+ escuela[9])


// let arreglo = [ 'perrito', 'tortuga', 'hipopotamo']

// arreglo[3]= 'león'

// arreglo.push('Pajarito')  //poner elementos sin sobreescribir

// arreglo.pop() //borrar elementos
// console.log(arreglo)

// sumar tres elementos y borrar el último

// let escuela= ['director', 'profesor','alumnos', 'clases', 'salones', 'turno', 'examenes', 'temario', 'ejercicios', 'problemario' ]
// escuela.pop()
// escuela.push('bancas', 'pizarrones', 'plumones')

// console.log(escuela)


// let numeros= [1,2,3,4,5,6,7,8,9,10]
// console.log(numeros)
// numeros.splice(0,1) //para borrar la primera coordenada es la posición del número que quiero empezar a borrar y la 2da coordenada le digo cuantos número quiero que borre; para borrar todos los números despues de una posición sólo especifico la posición.
// console.log(numeros)

// let numeros= [1,2,3,4,5,6,7,8,9,10]
// console.log(numeros)
// numeros.splice(3,1)
// console.log(numeros)


//Variables de tipo objeto

// let objeto= {
    // Nombre: 'Edgar', 
    // Direccion: 'Calle 6 #98 col. estado de México',
    // Musica: 'House',
    // Celular: '5591889850',
    // Libros: ['La biblia', 'El arte de la guerra']
// }

// console.log(objeto)

let persona= {
    Nombre: 'Edgar', 
    Direccion: 'Calle 6',
    Correo: 'edgarfaustinovargas@gmail.com',
    Celular: '5591889850',
    Viajes: {
        Internacionales:[ 'LA', 'Washington', 'Cuba'],
        Nacionales:['Tijuana', 'Acapulco', 'Mazatlán'],

    },
    Musica: ['House', 'Metal', 'Rock', 'Banda'],
    Películas: {
        Terror:['Anabelle', 'El conjuro', 'Rec'],
        Accion:['007', 'La caída de la casa blanca', 'Guerra mundial Z', 'Indestructibles2'],
        Comedia:['American pie', 'Son como niños']
    }
    

}
console.log(persona.Películas.Comedia[1])
console.log(persona.Viajes.Nacionales[2])
console.log(persona.Musica[3])


