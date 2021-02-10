const { request } = require("express");
const serviciosUrl = require("../config/urls");

const { obtenerDatosService } = require('../services/autentificacion.service.js');

const obtenerDatos = async(req, res) => {
    try {
        const { servicio, identificador } = req.params;
        const url = `${serviciosUrl[servicio]}${identificador}`;
        const datos = await obtenerDatosService(url);
        res.json({datos});
    } catch (error) {
        res.json(error);
    }
}

module.exports = obtenerDatos;