console.log('Inicio de programa');

setTimeout( () => {
    console.log('Primer timeOut');
}, 3000);

setTimeout( () => {
    console.log('Segundo timeOut');
}, 0);



setTimeout( () => {
    console.log('Tercer timeOut');
}, 0);

setTimeout( () => {
    console.log('Cuarto timeOut');
}, 2999);

console.log('Fin de programa');