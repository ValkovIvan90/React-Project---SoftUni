const router = require('express').Router();

const Estate = require('../models/Housting');
const serviceProduct = require('../services/product');

const { isOwner, isAuth } = require('../middlewares/guards');
const { preloadEst } = require('../middlewares/preload');
const { parseMongooseError } = require('../util/parse');
const { route } = require('./authController');



// Home
router.get('/', async (req, res) => {
    try {
        const art = await req.storage.getAll();
        return res.send(art)
    } catch (err) {
        console.log(err.message);
    }
});
router.get('/post', async (req, res) => {

    return;
});

// Create

router.post('/create', isAuth(), async (req, res) => {

    let { name, type, year, city, imageUrl, description, availablePieces, rented } = req.body;
    const estateDate = {
        name,
        type,
        year,
        city,
        imageUrl,
        description,
        availablePieces,
        rented,
        owner: req.user._id
    };
    try {
        await req.storage.createEstate(estateDate);
        res.redirect('/');
    } catch (err) {
        const ctx = {
            title: 'Create Estate',
            estateDate
        };
        if (err.name == 'ValidationError') {
            ctx.errors = parseMongooseError(err);
        } else {
            ctx.errors = [err.message]
        }
    };
});
// Details ! 
router.get('/details/:id', async (req, res) => {
    const estate = await serviceProduct.getById(req.params.id);
    if (estate != undefined) {

        const isPlace = estate.availablePieces > 0 ? true : false;
        const isTenants = estate.rented ? estate.rented.join(' ,') : false;



        estate.isTenants = isTenants;
        estate.isOwner = req.user && (estate.ownerId == req.user._id);
        estate.isPlace = isPlace;



        res.render('details', estate);
    } else {
        throw new Error('Error!')
    }

});

//Edit 
router.get('/edit/:id', preloadEst(), isOwner(), async (req, res) => {
    const estate = await req.storage.getById(req.params.id);
    console.log(estate);
    if (estate != undefined) {

        res.render('edit', estate);
    } else {
        throw new Error('Error!')
    }
});
router.post('/edit/:id', preloadEst(), isOwner(), async (req, res) => {

    let { name, type, year, city, imageUrl, description, availablePieces, rented } = req.body;
    const estateDate = {
        name,
        type,
        year,
        city,
        imageUrl,
        description,
        availablePieces,
        rented,
        owner: req.user._id
    };
    try {
        await req.storage.edit(req.params.id, estateDate);
        res.redirect('/');
    } catch (err) {
        return console.log(err);
    };
});
router.get('/delete/:id', preloadEst(), isOwner(), async (req, res) => {
    try {
        await req.storage.deleteEstate(req.params.id);
        res.redirect('/');
    } catch (err) {
        return console.log(err.message);
    };
});
// rented
router.get('/rentHouse/:id', async (req, res) => {
    const house = await Estate.findById(req.params.id);
    if (!house) {
        throw new ReferenceError('No such ID in database');
    };
    house.availablePieces -= 1;
    house.rented.push({ username: req.user.username })
    await house.save();

    res.redirect('/');
});

router.get('/rentApart', async (req, res) => {
    const estate = await req.storage.getAll();
    const ctx = {
        title: 'Apartmant for Rent',
        estate,
    };
    res.render('apart', ctx);
});


module.exports = router;
