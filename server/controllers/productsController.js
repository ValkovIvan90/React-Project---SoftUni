const router = require('express').Router();

const serviceProduct = require('../services/product');

const { createArt } = require('../util/createArticle');

const { isOwner, isAuth } = require('../middlewares/guards');
const { preloadEst } = require('../middlewares/preload');
const { parseMongooseError } = require('../util/parse');



// Home
router.get('/', async (req, res) => {
    try {
        const result = await req.storage.getAll();
        res.json({ article: result, status: 200 })
    } catch (err) {
        console.log(err.message);
    }
});

// Create
router.post('/create', isAuth(), async (req, res) => {
    const data = {
        model: req.body
    };

    const result = createArt(data)
    result.owner = req.user._id;

    if (result != undefined) {
        try {
            await req.storage.createArtModel(result);
            res.json({ status: 200, message: 'Succses!' })
            console.log('Succses created!');
        } catch (err) {
            const ctx = {
                title: 'Create Article',
                result
            };
            if (err.name == 'ValidationError') {
                ctx.errors = parseMongooseError(err);
            } else {
                ctx.errors = [err.message]
            }
        }
    }

});

// Details ! 
router.get('/details/:id', async (req, res) => {
    try {
        const article = await serviceProduct.getById(req.params.id);
        res.send(article);
    } catch (err) {
        console.log(err.message);
    }

});

//Edit 
router.get('/edit/:id', preloadEst(), isOwner(), async (req, res) => {
    const estate = await req.storage.getById(req.params.id);

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
// router.get('/rentHouse/:id', async (req, res) => {
//     const house = await Estate.findById(req.params.id);
//     if (!house) {
//         throw new ReferenceError('No such ID in database');
//     };
//     house.availablePieces -= 1;
//     house.rented.push({ username: req.user.username })
//     await house.save();

//     res.redirect('/');
// });

// router.get('/rentApart', async (req, res) => {
//     const estate = await req.storage.getAll();
//     const ctx = {
//         title: 'Apartmant for Rent',
//         estate,
//     };
//     res.render('apart', ctx);
// });


module.exports = router;
