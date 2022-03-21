
const env = process.env.NODE_ENV || 'development';
const { MONGO_URL } = require('./db_url');


let config;

if (env === "development") {
    config = {
        PORT: process.env.PORT || 5000,
        TOKEN_SECRET: 'very secret token',
        COOKIE_NAME: 'SESSION_DATA',
        DB_CONNECTION: MONGO_URL,
        CORS: {
            origin: ['http://localhost:3000'],
            credentials: true
        }
    }
} else {
    config = {
        PORT: process.env.PORT || 8080,
        DB_CONNECTION: process.env.MONGO_URL,
        COOKIE_NAME: 'SESSION_DATA',
        SECRET: 'very strong secret',
        CORS: {
            origin: ["https://su-custom-server.herokuapp.com/"],
            credentials: true
        }
    }
}
module.exports = config;