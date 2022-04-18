require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

const { MONGO_URL } = require('./db_url')

const config = {
    development: {
        PORT: process.env.PORT || 5000,
        DB_CONNECTION: MONGO_URL,
        TOKEN_SECRET: 'very secret token',
        COOKIE_NAME: 'SESSION_DATA',
        CLOUDINARY: {
            cloud_name: process.env.CLOUDINARY_NAME, // enter your cloud name from cloudinary account
            api_key: process.env.CLOUDINARY_API_KEY, // enter your cloud key from cloudinary account
            api_secret: process.env.CLOUDINARY_API_SECRET // enter your cloud secret from cloudinary account
        },
        CORS: {
            origin: ['http://localhost:3000'],
            credentials: true
        }
    },
    production: {
        PORT: process.env.PORT || 80,
        DB_CONNECTION: MONGO_URL,
        TOKEN_SECRET: 'very secret token',
        COOKIE_NAME: 'SESSION_DATA',
        CLOUDINARY: {
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        },
        CORS: {
            origin: ["https://iwanttohave.herokuapp.com/"],
            credentials: true
        }
    }
}
module.exports = config[env];