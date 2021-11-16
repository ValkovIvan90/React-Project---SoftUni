const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');

const auth = require('../middlewares/auth');
const config = require('./config');

module.exports = (app) => {
    app.use(express.urlencoded({
        extended: false
    }));
    app.use(express.json());
    app.use(cors(config.CORS));
    app.use(cookieParser());
    app.use(auth());
}