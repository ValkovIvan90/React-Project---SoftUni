const productsController = require('../controllers/productsController');
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const uploadController = require('../controllers/uploadController');


module.exports = (app) => {
    app.use('/api/products', productsController);
    app.use('/api/auth', authController);
    app.use('/api/upload', uploadController);
    app.use('/api/home', homeController);
    app.use('*', (req, res) => {
        res.json({ status: '404', message: 'Not found page' })
    });
}