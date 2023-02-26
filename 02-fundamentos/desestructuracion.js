const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder:'Regeneración',
    // edad: 50,
    getNombre: function(){
        return `${this.nombre} ${this.apellido} -> ${this.poder}`;
    }
};

console.log(deadpool.getNombre())

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// console.log(nombre, apellido, poder)


// -------------Desestructuración---------------

// const {nombre, apellido, poder, edad = 30} = deadpool;
// console.log(nombre, apellido, poder, edad)

// function imprimeHeroe(heroe){
//     const {nombre, apellido, poder, edad = 0} = heroe;
//     console.log(nombre, apellido, poder, edad);
// }

// imprimeHeroe(deadpool);

// --------------Lo mismo pero desde el argumento y que se pueden cambiar los valores dentro de la función-----------

function imprimeHeroe({nombre, apellido, poder, edad = 0}){
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);

// -o-o-o-o-o-o-o-o-o-o-o-o


const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// console.log(h1, h2, h3);

// ------------Desestructuración de arreglo --------------

const [, , h3] = heroes;

console.log(h3);