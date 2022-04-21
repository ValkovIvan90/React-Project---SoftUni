const router = require('express').Router();
const { cloudinary } = require('../util/cloudinary');
const User = require('../models/User');
const { preloadArt } = require('../middlewares/preload');

router.post('/uploadUserImg', async (req, res) => {

    const user = await User.findById(req.user._id);

    if (!user) {
        throw new Error('No found user!')
    }
    try {
        if (user.image_id) {
            throw new Error('User already added image!')
        }
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'shop_user',
        });
        user.image_id = uploadResponse.public_id;
        user.save();
        console.log(uploadResponse);
        res.json({ msg: 'The image has ben succssefully added!', status: 200 });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});
router.get('/loadImages', async (req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) {
        throw new Error('No found user!')
    }
    const { resources } = await cloudinary.search
        .expression('folder:fr_shop')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id).find(x => x == user.image_id);
    res.status(200).json({ data: publicIds })
});

router.post('/deleteImage/:id', preloadArt(), async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const imageId = user.image_id;
        if (!user) {
            throw new Error('No found user!')
        }

        await cloudinary.uploader.destroy([imageId], (err, response) => {
            console.log(err, response);
            if (response.result == 'ok') {
                user.image_id = "";
                user.save();

                res.json({ status: 200, message: 'This image has ben succssefully deleted!' })
                console.log('This image has ben succssefully deleted!');
            }
        });

    } catch (err) {
        console.log(err.message);
    };
});

module.exports = router;
