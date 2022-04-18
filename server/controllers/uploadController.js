const router = require('express').Router();
const { cloudinary } = require('../util/cloudinary');
const User = require('../models/User');

router.post('/uploadUserImg', async (req, res) => {

    const user = await User.findById(req.user._id);

    if (!user) {
        throw new Error('No found user!')
    }
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'shop_user',
        });
        if (!user.image_id) {
            user.image_id = uploadResponse.public_id;
            user.save();
        }
        console.log(uploadResponse);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});
router.get('/loadImages', async (req, res) => {
    const user = await User.findById(req.user._id);

    const { resources } = await cloudinary.search
        .expression('folder:fr_shop')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id).find(x => x == user.image_id);
    res.status(200).json({ data: publicIds })
});

module.exports = router;
