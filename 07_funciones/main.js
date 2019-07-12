//Funciones

// function suma (a,b){
//     console.log(a+b)

// }

// suma(5,6)      //Para las funciones es llamar la funcion suma()
// suma(6,6)
// suma(10,10)

// function resta(a,b){
//     return a - b
// }

// console.log(resta(10,4))
// console.log(resta(resta(50,20),4))

// let num= Number (prompt('Dame un número para calcular el área de un cuadrado'))
// function multiplicacion(a){
//     return a*a
// }
// console.log(multiplicacion(num))




// const areaC = ()=>{
//     let a= prompt('Ingresa tu número')
//     return a*a
// }
// console.log(areaC())


//const areaT = ()=>{
  //  let b= Number(prompt('Ingresa la base'))
    //let h= Number(prompt('Ingresa la altura'))
   // let a= b*h
    //return a/2
//}
//console.log(areaT())

//funcion que sume mis parametros a y b, reste c y d, y lo multiplique por e
//a+b-c-d*e

// const parametrof=()=>{
//     let a= Number(prompt('Ingresa a'))
//     let b= Number(prompt('Ingresa b'))
//     let c= Number(prompt('Ingresa c'))
//     let d= Number(prompt('Ingresa d'))
//     let e= Number(prompt('Ingresa e'))
//     let f=a+b-c-d
//     return f*e

// }
// console.log(parametrof())

//const parametrog=()=>{
//     let a= 2
//     let b= 3
//     let c= 4
//     let d= 5
//     let e= 6
//     let f=a+b-c-d
//     return f*e

// }
// console.log(parametrog())

//const parametrof=()=>{
//     let a= 2
//     let b= 3
//     let c= 4
//     let d= 5
//     let e= 6
//     return f=(a+b-c-d)*e

// }
// console.log(parametrof())


//Ingresar la contraseña gatitos 13 si no 
// let password= (prompt('Ingresa la contraseña:'))
// if(password==='gatitos 13'){
//     console.log('Has entrado a la plataforma')

// }else{
//     console.log('Intenta de nuevo')
// }




const contraseña = () =>{
    password = prompt('Ingresa la contraseña:')
    console.log(password)
    if( password === 'gatitos13'){
        console.log('Has entrado a la plataforma')
        
    }else{
        console.log('Intenta de nuevo')
        }
}
contraseña()




// let usuario = prompt('Ingresa la contraseña:')
// const password= 'gatitos13'
// const login = (a, b) => {
//     if( a === b){
//         console.log('Bienvenido')
//     }else{
//         console.log('contraseña incorrecta')
//     }
// }

// login(usuario, password)

const login = () => {
    let user = 'Hola'     //agrego un prompt para que el usuario escriba la contraseña
    const password = 'gatitos13'
    if(user === password){
        console.log('Bienvenido')
    }else{
        console.log('contraseña incorrecta :C')
    }
}
login()