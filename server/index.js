const express = require('express');
const { PORT } = require('./config/config');
const path = require('path');

const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');
const databaseConfig = require('./config/database');

const storage = require('./middlewares/storage');
const logger = require('./middlewares/logger');

start();

async function start() {
    const app = express();

    app.use(logger());

    await databaseConfig(app);
    expressConfig(app);

    app.use(await storage());
    routesConfig(app);
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('client/build'));

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
}