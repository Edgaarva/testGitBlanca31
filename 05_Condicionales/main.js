//if(*condicion*){
// Bloque de codigo en caso de que se cumpla la condicion
// }else{
// bloque de código en caso de que *Nodelist*    
// }

// if(condition){                                     //si si se cumple
    // console.log(':D')
// }else{                                             // si no se cumple
    // console.log(':C')
// }


// if('computadora'=== 'Computadora'){           //=== significa que los valores a comparar son idénticos
// console.log('Son idénticos')                    //= igualas el valor
// }else{                                        //= Igualdad
    // console.log('Algo anda mal :C')
// }

//Challenge preguntar la edad del usuario:
//Si lo es, entrar al bar 7u7
//Si no lo es, llama a sus papás

// let edad= prompt('Qué edad tienes?')
// if(edad>=18){
    // console.log('Puedes entrar al bar 7u7')
// }else{
    // console.log('Vete de aquí')
// }



//&& (y) - (ó) ||
// let edad = prompt('Ingresa tu edad')  
// if(edad < 16){                                 //Si
    // console.log('Puedes sacar tu licencia')    
// }else if(edad >=16 || edad === 17 ){           // ó
    // console.log('Puedes sacar tu permiso')
// }else{                                         // Si no
    // console.log('No puedes conducir')
// }


//Si mi número es par: Escribir en la consola *Numero* es par, si mi número es impar : Escribir en la consola *Numero* es impar.

// let numero = prompt('Ingresa un número')
// if(numero % 2 === 0){       //--> % es el módulo(es decir el resultado de dividir un numero entre dos,                                         el módulo nos permietirá compararlo con el residuo en éste caso 0)
    // console.log(numero + ' ' + 'es par')
// }else{
    // console.log(numero + ' ' + 'es impar')
// }



// Piedra, papel o tijera
// let player1 = prompt('Elige: Piedra, papel o tijera')
// let player2 = prompt('Elige: Piedra, papel o tijera')

// if(player1 === player2){
    // console.log('Es un empate :|')

// }else if(player1 === 'piedra' && player2 === 'tijera' || player1 === 'tijera' && player2 === 'papel' || player1 === 'papel' && player2 === 'piedra'){
    // console.log('Gana jugador 1')

// }else{
    // console.log('Gana jugador 2')
// }




let player1 = prompt('Elige: Piedra, papel o tijera')
let player2 = prompt('Elige: Piedra, papel o tijera')

if(player1 === player2){
    console.log('Es un empate :|')

}else if(player1 === 'piedra' && player2 === 'tijera' || player1 === 'tijera' && player2 === 'papel' || player1 === 'papel' && player2 === 'piedra'){
    console.log('Gana jugador 1')

}else if(player1 === 'tijera' && player2 === 'piedra' || player1 === 'papel' && player2 === 'tijera' || player1 === 'piedra' && player2 === 'papel'){
    console.log('Gana jugador 2')

}else{
    console.log('No te entendí, vuelve a escribir una opción :/')
}


