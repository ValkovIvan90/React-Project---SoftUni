
const cloudinary = require('cloudinary').v2;
const config = require('../config/config');

cloudinary.config(config.CLOUDINARY);

module.exports = { cloudinary };
