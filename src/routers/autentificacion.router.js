const { Router } = require('express');
const obtenerDatos = require('../controllers/autentificacion.controller');

const autentificacionRouter = Router();

autentificacionRouter.get('/:servicio/:identificador', obtenerDatos);

module.exports = autentificacionRouter;