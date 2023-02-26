// function sumar (a, b = 10){
//     return a+b;
// }

// console.log( sumar(5,9) );


// -------- Forma 1 --------
// const sumar = (a, b = 10) => {
//     return a + b;
// }

// -------- Forma 2 --------
const sumar = (a, b) => a + b;

console.log( sumar(5,9) );

const saludar = () => 'Hola mundo';

console.log( saludar() );