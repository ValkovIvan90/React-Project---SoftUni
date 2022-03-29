const express = require('express');
const config = require('./config/config')
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
        app.use(express.static(path.join(__dirname, "public/index.html")));
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, "public/index.html"));
        });
    }
    app.listen(config.PORT, () => console.log(`app is listening on port ${config.PORT}`));
}

