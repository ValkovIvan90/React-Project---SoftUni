const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { getUserByUsername, getUserByEmail } = require('../services/userServices');

router.post('/register',
    body('username', 'The username should be at least 5 characters long!').isLength({ min: 5 }),
    body('email', 'Invalid Email!').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    body('password', 'The password should be at least 4 characters long!').trim().isLength({ min: 4 }).isAlphanumeric(),
    body('rePass').trim().custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Password don\'t match!')
        }
        return true;
    })
    , async (req, res) => {

        try {
            const isNameTaken = await getUserByUsername(req.body.username);
            const isEmailTaken = await getUserByEmail(req.body.email);

            if (isNameTaken) {
                throw new Error("Name is taken!")
            };
            if (isEmailTaken) {
                throw new Error("Email is taken!")
            };

            try {
                const errors = Object.values(validationResult(req).mapped());
                console.log(errors);
                if (errors.length > 0) {
                    res.sendStatus(404)
                    throw new Error(errors.map(x => x.msg).join('\n'));
                };
                await req.auth.register(req.body);

                res.sendStatus(200)

            } catch (err) {
                res.sendStatus(404)
                return;
            };

        } catch (err) {
            console.log(err.message);
            res.statusMessage = err.message;
            res.status(400).end();
            return;
        }

    });

router.post('/login', async (req, res) => {
    try {
        await req.auth.login(req.body);
        res.redirect('/products')
    } catch (err) {
        console.log(err.message);
    };
});

// router.get('/logout', (req, res) => {
//     req.auth.logout();
//     res.redirect('/products')
// })


module.exports = router;