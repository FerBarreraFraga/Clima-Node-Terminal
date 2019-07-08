const {getLugar} = require('./lugar/Lugar');
const {getClima} = require('./clima/Clima');

const argv = require('yargs').options({
    direccion:{
        alias:'d',
        demand : true
    }
}).argv;


const getInfo = async(direccion) =>{
    try{
        const cords = await getLugar(direccion);
        const clima = await getClima(cords.lat, cords.lng);
        return ` El clima de ${direccion} es de: ${clima}`;

    }
    catch(e){
        return 'Error ', e
    }
}

getInfo(argv.direccion)
    .then(res => console.log(res))
    .catch(err => console.log(err))

