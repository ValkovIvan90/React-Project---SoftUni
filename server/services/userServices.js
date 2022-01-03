const User = require('../models/User');
const { getAll } = require('../services/product');
const { createDate } = require('../util/currentDate');
const { createTime } = require('../util/createTime');
const uniqId = require('uniqid')

async function createUser(username, email, hashedPassword) {
    const user = new User({
        username,
        email,
        hashedPassword
    });
    await user.save()
        .then(doc => { })
        .catch(err => {
            throw new Error(err)
        });;

    return user;
};

async function getUserByUsername(username) {
    return await User.findOne({ username: { $regex: username, $options: 'i' } });
};
async function getUserByEmail(email) {
    return await User.findOne({ email: { $regex: email, $options: 'i' } });
};
async function getUserById(id) {

    const { username, email, _id } = await User.findOne(id);
    const user = { username, email, _id };
    return user;
};
async function createMessageSend(data) {


    const currentTime = `${createDate()} / ${createTime()}`;

    try {
        if (!data.username || !data.mail || !data.userId || !data.message || !data.articleId) {
            throw new Error('Invalid data!')
        }
        const recieverUser = await User.findOne({ _id: data.ownerId });

        if (!recieverUser.recievedMessages.find(x => x.senderId == data.userId)) {
            recieverUser.recievedMessages.push({
                senderId: data.userId,
                message: [{
                    messageId: uniqId(),
                    msg: data.message,
                    username: data.username,
                    email: data.mail,
                    articleId: data.articleId,
                    time: currentTime
                }]
            });
            await recieverUser.save()
                .then(doc => { })
                .catch(err => {
                    throw new Error(err)
                });
        } else {
            const obje = {
                messageId: uniqId(),
                username: data.username,
                email: data.mail,
                msg: data.message,
                articleId: data.articleId,
                time: currentTime
            }
            await User.updateOne(
                {
                    _id: data.ownerId,
                    "recievedMessages.senderId": data.userId
                },
                {
                    $push: { "recievedMessages.$.message": obje }
                }).then(result => {
                    if (result.nModified == 1 && result.n == 1) {
                        console.log(`Successfully added a new review.`)
                    }
                })
                .catch(err => console.error(`Failed to add review: ${err}`))

        }

    } catch (err) {
        return err.message
    }

};
async function getUserMessages(userId) {

    try {
        const user = await User.findOne({ _id: userId });

        // 1. User who sent me a message!
        const userSenderInfo = user.recievedMessages.reduce((acc, c) => {
            if (!acc.find(x => x.senderId == c.senderId)) {
                acc.push(c)
            }
            return acc
        }, []);

        //   2. All my articles for which I have received message
        const articles = await (await getAll())
            .filter(x => x.owner == userId)
            .reduce((acc, c) => {
                userSenderInfo.forEach((x) => {
                    if (x.articleId == c._id) {
                        acc.push({ artData: c, userInfo: x })
                    }
                });
                return acc
            }, [])

        return articles;
    } catch (err) {
        return err.message
    }

};

module.exports = {
    createUser,
    getUserByUsername,
    getUserByEmail,
    getUserById,
    createMessageSend,
    getUserMessages
}