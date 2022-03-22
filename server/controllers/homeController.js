const router = require('express').Router();

router.get('/home', (req, res) => {
    res.redirect('/products')
});
module.exports = router;