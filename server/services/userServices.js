const User = require('../models/User');

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

    try {
        const recieverUser = await User.findOne({ _id: data.ownerId });
        const userId = data.userId;

        const newMessage = {
            username: data.username,
            email: data.mail,
            senderId: data.userId,
            message: data.message,
            articleId: data.articleId
        }
        recieverUser.recievedMessages.push({ [userId]: newMessage });

        await recieverUser.save();
    } catch (err) {
        return err.message
    }

};

module.exports = {
    createUser,
    getUserByUsername,
    getUserByEmail,
    getUserById,
    createMessageSend
}