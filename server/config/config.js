
const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        PORT: process.env.PORT || 5000,
        TOKEN_SECRET: 'very secret token',
        COOKIE_NAME: 'SESSION_DATA',
        DB_CONNECTION: 'mongodb://localhost:27017/Estate-Agency',
        CORS: {
            origin: 'http://localhost:3000',
            credentials: true
        }
    }
}

module.exports = config[env];