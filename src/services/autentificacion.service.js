const fetch = require('node-fetch');

const obtenerDatosService = async(url) => {
    try {
        return await fetch(url);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { obtenerDatosService }