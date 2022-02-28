
const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        PORT: process.env.PORT || 5000,
        TOKEN_SECRET: 'very secret token',
        COOKIE_NAME: 'SESSION_DATA',
        DB_CONNECTION: 'mongodb+srv://ivan:1990@shopcluster.9cs5p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        CORS: {
            origin: 'http://localhost:3000',
            credentials: true
        }
    },
    production: {
        PORT: process.env.PORT || 80,
        DB_CONNECTION: process.env.DB_CONNECTION,
        COOKIE_NAME: 'SESSION_DATA',
        SECRET: 'very strong secret',
        CORS: {
            origin: ["https://git.heroku.com/su-free-shoop.git"],
            credentials: true
        }
    }
}
module.exports = config[env];