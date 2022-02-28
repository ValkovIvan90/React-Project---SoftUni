const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const path = require('path');
const auth = require('../middlewares/auth');
const config = require('./config');

module.exports = (app) => {
    app.use(express.static(path.join(__dirname, '..', 'public', 'dist')));
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors(config.CORS));

    app.use(auth());
}