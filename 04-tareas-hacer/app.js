const colors = require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquire');



console.clear();

const main = async() => {

    console.log('Hola Mundo');

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({opt})

        await pausa();

    } while (opt != '0');
}

main();