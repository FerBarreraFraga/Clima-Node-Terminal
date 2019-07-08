const axios = require('axios');


const getClima = async(lat, lon) => {
    
    const resp =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2fab2509b3dbadf18006618fc297df05&units=metric`)
    return resp.data.main.temp;
    
}

module.exports = {
    getClima
}