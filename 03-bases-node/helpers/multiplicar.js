const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(listar, hasta, base = 5) => {

    try {

        let salida ='';
        let consola ='';
        let fileName = `./out/tabla-${base}.txt`;
        
        for(let i = 1; i<=hasta; i++){
            consola += `${base} ${'x'.yellow} ${i} ${'='.red} ${base*i} \n`;
            salida += `${base} x ${i} = ${base*i} \n`;
        }

        fs.writeFileSync(fileName, salida);

        if(listar){
            console.log('========================'.blue)
            console.log('      Tabla del'.green, base)
            console.log('========================'.blue)

            console.log(consola)
        }

        return `tabla-${base}.txt`;
        
    } catch (error) {
        console.error(error);
        throw error;
    }

}

module.exports = {
    crearArchivo
}