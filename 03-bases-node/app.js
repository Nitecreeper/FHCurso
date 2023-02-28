const { crearArchivo } = require('./helpers/multiplicar.js')
const argv = require('./config/yargs.js');

console.clear();

// La forma clasica de ver los argumentos del comando desdce consola
// console.log( process.argv );
// console.log( argv );

crearArchivo(argv.listar, argv.hasta , argv.base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));