const fetch = require('node-fetch');
const https = require('https');

const obtenerDatosService = async(url) => {
    return new Promise((resolve, reject) => {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });
        fetch(url, { agent: httpsAgent })
            .then(res => res.json())
            .then(json => resolve(json))
            .catch(err => reject(err))
    });
}

module.exports = { obtenerDatosService }