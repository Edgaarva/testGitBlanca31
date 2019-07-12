//Diferentes ciclos for y while

//for(inicio; final o límite; secuencia){
    //bloque de código
// }

// let i = 0

// for(i; i<= 100; i= i+1){
//     console.log(i)

// }

// for(let e= 10; e<= 50; e= e+5){
//     console.log(e)                       // Checar que no sean ciclos infinitos, y que no se trabe la página al cargar
// }

// ciclo 1: empiece en 3, llegue a 500 y sea de 9 en 9
// ciclo 1: empiece en -100, llegue a 0 y sea de 1 en 1
// ciclo 1: empiece en 500, llegue a 2000 y sea de 100 en 100

// let i = 3

// for(i; i<= 500; i= i+9){
//     console.log(i)

// }

// for(let e= -100; e<= 0; e= e+1){
//     console.log(e)          
// }
// for(let r= 500; r<= 2000; r= r+100){
//     console.log(r)    
// }          



// Hacer un ciclo que el usuario decida la secuencia
// let num = prompt('Elige la secuencia que quieres')
// let number = Number(num)     // Number sirve para cambiar un string a valor numérico con el  nombre de                                     mi variable a cambiar
// for(let i= 0; i<=100; i=i + number){
//     console.log(i)
// }


// let num = Number(prompt('Elige la secuencia que quieres'))

// for(let i= 0; i<=100; i=i + num){
//     console.log(i)
// }


// for(let i=0; i<=100; i= i+1){
//     if(i % 2 ===0){
//         console.log(i + ' Es par')
//     }else{
//         console.log(i + ' Es impar')
//     }
// }


// for(let i=1; i<=100;i++){
//     if(i % 3 === 0 && i % 5 ==0){        //Poner primero la condicion con más opciones
//         console.log(i + ' FizzBuzz')

//     }else if(i % 5 === 0){
//         console.log(i + ' Buzz')
//     }else if(i % 3 === 0 ){
//         console.log(i + ' Fizz')

//     }else{
//         console.log(i)

//     }
// }



//Como recorrer un arreglo}

// let array = ['a','b','c','d','e','f']
 // ya no es igual en mi i porque ya hay un límite establecido por el arreglo
// for(let i=0; i< array.length; i++){                 //array.length para el límite del arreglo
    // console.log(array[i])
// }                    


// Tablas de multiplicar
// for(let i=1; i<=10; i++){ 
//     for(let e=1; e<=10; e++)
//      console.log(i + 'x' + e + '=' + i*e)
// }


// EL factorial de un 'n' numero
let num= Number(prompt('Elige un numero para calcular el factorial'))
let numero=1
if( num>0){
    for(let i=1 ; i<=num; i++){
        console.log( numero=nummero*i)

    }
}else{
    console.log( 'No puede ser cero')
}


// let num=1

// for(let i=1; i<=5; i++){
//    console.log(num= num*i)
// }


// let num= 1
// for(let i=1; i<=5; i++){
//     num=num*i
// }
// console.log(num)


