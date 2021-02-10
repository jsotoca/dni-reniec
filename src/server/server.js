const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const { APP_NAME, APP_PORT } = require('../config/enviroment');

class Server {
    _app;
    _port;

    constructor(){
        this.initApp();
        this._port = APP_PORT;
    }

    initApp(){
        this._app = express();
        this._app
            .use(bodyParser.urlencoded({extended: false}))
            .use(bodyParser.json())
            .use(cors())
            .use(helmet())
            .use(compression())
            // .use()
    }

    start(){
        this._app.listen(this._port, () => {
            console.log(`${APP_NAME} running in the port ${this._port}`);
        });
    }
}

module.exports = Server;
