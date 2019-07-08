const axios = require('axios');


const getLugar = async(direccion) => {
    const encodedURL = encodeURI( direccion)
    
    const instance = axios.create({
        baseURL : `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        timeout: 2000,
        headers :{'X-RapidAPI-Key':  '38ce4cf740mshc6af7a2a6f9346dp15565ajsn9fda4d34bbdc'}
    })

    const respuesta  = await instance.get();

    if(respuesta.data.Results.length === 0 ){
        throw new Error ('No hay resultados');
    }

    const data = respuesta.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
    
}

module.exports = {
    getLugar
}