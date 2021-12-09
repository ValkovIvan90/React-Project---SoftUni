const router = require('express').Router();

const { getUserById } = require('../services/userServices');

const { createAndEditArt } = require('../util/createArticle');

const { isOwner, isAuth } = require('../middlewares/guards');
const { preloadArt } = require('../middlewares/preload');
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

    const result = createAndEditArt(data)
    result.owner = req.user._id;

    if (result != undefined) {
        try {
            await req.storage.createArtModel(result);
            res.json({ status: 200, message: 'Succsessfully created!' })
            console.log('Create Article!');
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
        const currentArt = await req.storage.getById(req.params.id);

        const artOwner = await getUserById(currentArt.owner);

        if (!currentArt || !artOwner) {
            throw new Error('No record in the database!')
        }

        res.json({ article: currentArt, status: 200, owner: artOwner })

    } catch (err) {
        res.json({ message: err.message })
    }
});

//Edit 
router.post('/edit/:id', preloadArt(), isOwner(), async (req, res) => {

    const data = {
        model: req.body,
        edit: true
    };
    const result = createAndEditArt(data);

    try {
        await req.storage.edit(req.params.id, result);
        res.json({ status: 200, message: 'Succsessfully edited!' })
    } catch (err) {
        res.json({ status: 404, message: 'Failed to edit!' })
    };
});
router.get('/delete/:id', preloadArt(), isOwner(), async (req, res) => {
    try {
        await req.storage.deleteEstate(req.params.id);
        res.redirect('/');
    } catch (err) {
        return console.log(err.message);
    };
});

// create comment
router.post('/createComment', isAuth(), async (req, res) => {

    const data = { artId, username, comment, category } = req.body;
    try {
        if (!artId || !username || !comment || !category) {
            throw new Error('Invalid data!')
        }
        const commId = await req.storage.createComment(data);

        res.json({ message: 'Comment added successfully', status: 200, _id: commId })
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


        res.json({ comments: currentArt.article.comments.reverse(), status: 200 })

    } catch (err) {
        res.json({ message: 'No comments in the database!' })
    }

});


module.exports = router;
