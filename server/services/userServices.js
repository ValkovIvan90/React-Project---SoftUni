const User = require('../models/User');
const { getAll } = require('../services/product');
const { createDate } = require('../util/currentDate');


async function createUser(username, email, hashedPassword) {
    const user = new User({
        username,
        email,
        hashedPassword
    });
    await user.save();

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
    let time = new Date()
    const hour = time.getHours()
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const currentTime = `${createDate()} && ${hour}:${minutes}:${seconds}`;

    try {
        if (!data.username || !data.mail || !data.userId || !data.message || !data.articleId) {
            throw new Error('Invalid data!')
        }
        const recieverUser = await User.findOne({ _id: data.ownerId });

        recieverUser.recievedMessages.push({
            username: data.username,
            email: data.mail,
            senderId: data.userId,
            message: data.message,
            articleId: data.articleId,
            time: currentTime
        });

        await recieverUser.save();
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
                user.recievedMessages.forEach((y) => {
                    if (c._id == y.articleId) {
                        acc.push({ artData: c, userInfo: y })
                    }
                })
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