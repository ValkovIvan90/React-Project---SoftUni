const router = require('express').Router();
const { body, validationResult } = require('express-validator');


router.get('/register', (req, res) => {
    res.render('register', { title: 'Register User' })
});

router.post('/register',
    body('name', 'The name should be in the following format -> (firstname lastname) - "Alexandur Petrov').matches(/^([A-Z][a-z]{3,} )([A-Z][a-z]{3,} )?([A-Z][a-z]{3,})$/),
    body('username', 'The username should be at least 5 characters long').isLength({ min: 5 }),
    body('password', 'The password should be at least 4 characters long').trim().isLength({ min: 4 }).isAlphanumeric(),
    body('repeatPassword').trim().custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Password don\'t match!')
        }
        return true;
    })
    , async (req, res) => {
        try {
            const errors = Object.values(validationResult(req).mapped());
            if (errors.length > 0) {
                throw new Error(errors.map(e => e.msg).join('\n'));
            };
            await req.auth.register(req.body);
            res.redirect('/products')
        } catch (err) {
            const ctx = {
                title: 'Register',
                errors: err.message.split('\n'),
                data: { username: req.body.username }
            };
            res.render('register', ctx);
        };
    });

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' })
});

router.post('/login', async (req, res) => {
    try {
        await req.auth.login(req.body);
        res.redirect('/products')
    } catch (err) {
        const ctx = {
            title: 'Login',
            errors: [err],
            data: { username: req.body.username }
        };
        res.render('login', ctx)
    };
});

router.get('/logout', (req, res) => {
    req.auth.logout();
    res.redirect('/products')
})


module.exports = router;