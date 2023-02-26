// setTimeout(function(){
//     console.log('Hola Mundo');
// }, 1000);

// setTimeout( () => 'Hola Mundo', 2000);


const getUsuarioById = (id, callback) => {

    const user = {
        id,
        nombre: 'Jorge'
    }

    setTimeout(() => {
        callback(user);
    }, 1500)

}

getUsuarioById(10, ( usuario ) => {
    console.log( usuario );
    console.log( usuario.nombre.toUpperCase() );
});