const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('pdods');
    res.redirect('/products')
});
module.exports = router;