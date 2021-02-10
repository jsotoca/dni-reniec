const { request } = require("express");
const serviciosUrl = require("../config/urls");

const { obtenerDatosService } = request('../services/autentificacion.service.js');

const obtenerDatos = async(req, res) => {
    try {
        const { servicio, identificador } = req.params;
        const url = `${serviciosUrl[servicio]}${identificador}`;
        const datos = await obtenerDatosService(url);
        res.status(200)
           .json({datos});
    } catch (error) {
        res.status(500)
           .json(error);
    }
}

module.exports = obtenerDatos;