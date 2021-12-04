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

    const { username, email } = await User.findOne(id);
    const user = { username, email };
    return user;
};

module.exports = {
    createUser,
    getUserByUsername,
    getUserByEmail,
    getUserById
}