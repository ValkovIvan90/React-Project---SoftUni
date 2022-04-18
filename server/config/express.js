

const express = require('express');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');

const cors = require('cors');
const path = require('path');
const config = require('./config');

module.exports = (app) => {
    app.use(express.static(path.join(__dirname, '..', 'public', 'build')));
    app.use(express.urlencoded({ limit: '50mb', extended: true }));
    
    app.use(express.json({ limit: "50mb" }));
    app.use(cookieParser());
    app.use(cors(config.CORS));
    app.options('*', cors());
    app.use(auth());

}

