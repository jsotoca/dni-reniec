const express = require('express');
const autentificacionRouter = require('./autentificacion.router');

const appRouter = express();

appRouter.use('/buscar',autentificacionRouter);

module.exports = appRouter;