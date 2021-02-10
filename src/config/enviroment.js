if(process.env.NODE_ENV != 'production') require('dotenv').config();

module.exports = {
    APP_NAME        : process.env.APP_NAME,
    APP_PORT        : process.env.APP_PORT,
    URL_RENIEC      : process.env.URL_RENIEC,
    URL_SUNAT       : process.env.URL_SUNAT
}