const router = require('express').Router();
const { body, validationResult } = require('express-validator');


router.post('/register',
    body('username', 'The username should be at least 5 characters long').isLength({ min: 5 }),
    body('email', 'The email valid').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    body('password', 'The password should be at least 4 characters long').trim().isLength({ min: 4 }).isAlphanumeric(),
    body('passwordConfirm').trim().custom((value, { req }) => {
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
        } catch (err) {
            console.log(err.message);
        };
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