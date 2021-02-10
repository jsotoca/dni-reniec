const { URL_RENIEC, URL_SUNAT } = require('./enviroment');

const serviciosUrl = Object.freeze({
    "dni": URL_RENIEC,
    "ruc": URL_SUNAT,
});

module.exports = serviciosUrl;