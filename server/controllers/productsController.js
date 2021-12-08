const router = require('express').Router();

const { getUserById } = require('../services/userServices');

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
        res.json({ message: 'No Records in the database!' })
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
        const artResult = await req.storage.getAll();

        const currentArt = artResult.reduce((acc, c) => {
            if (c._id == req.params.id) {
                acc.article = c
            }
            return acc;
        }, {});

        const artOwner = await getUserById(currentArt.article.owner);

        res.json({ article: currentArt.article, status: 200, owner: artOwner })

    } catch (err) {
        res.json({ message: 'No record in the database!' })
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

router.post('/createComment', isAuth(), async (req, res) => {

    const data = { artId, username, comment, category } = req.body;
    try {
        if (!artId || !username || !comment || !category) {
            throw new Error('Invalid data!')
        }
        const commId = await req.storage.createComment(data);
      
        res.json({ message: 'Successfully created comment', status: 200, _id: commId })
    } catch (err) {
        res.json({ message: err.message, status: 404 })
    }
});

// get comments
router.get('/details/comments/:id', async (req, res) => {
    try {
        const artResult = await req.storage.getAll();

        const currentArt = artResult.reduce((acc, c) => {
            if (c._id == req.params.id) {
                acc.article = c
            }
            return acc;
        }, {});


        res.json({ comments: currentArt.article.comments, status: 200 })

    } catch (err) {
        res.json({ message: 'No comments in the database!' })
    }

});


module.exports = router;
