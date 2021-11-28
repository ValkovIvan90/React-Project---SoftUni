const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { COOKIE_NAME, TOKEN_SECRET } = require('../config/config');

const { getUserByUsername, getUserByEmail, createUser } = require('../services/userServices');

module.exports = () => (req, res, next) => {
    req.auth = {
        register,
        login,
        logout
    };

    if (readToken(req)) {
        next();
    }
    //register
    async function register({ username, email, password }) {

        const isNameTaken = await getUserByUsername(username);
        if (isNameTaken) {
            throw new Error('Name is taken!');
        };

        const isEmailTaken = await getUserByEmail(email);

        if (isEmailTaken) {
            throw new Error('Email is taken!');
        };

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser(username, email, hashedPassword);
        req.user = createToken(user);
        return req.user
    };

    //Login middleware!

    async function login({ email, password }) {

        const user = await getUserByEmail(email);
        if (!user) {
            throw new Error('Wrong Email or Password!');
        } else {
            const isMatch = await bcrypt.compare(password, user.hashedPassword);
            if (!isMatch) {
                throw new Error('Wrong Email or Password!')
            } else {
                req.user = createToken(user);
            };
        };
    };

    //logout

    async function logout() {
        res.clearCookie(COOKIE_NAME);
    }

    //createToken!
    function createToken(user) {
        const userViewModel = { _id: user._id, username: user.username, email: user.email };
        const token = jwt.sign(userViewModel, TOKEN_SECRET);
        res.cookie(COOKIE_NAME, token, { htppOnly: true });
        userViewModel.token = token
        return userViewModel;
    }

    //readToken!!
    function readToken(req) {
        const token = req.cookies[COOKIE_NAME];

        if (token) {
            try {
                const userData = jwt.verify(token, TOKEN_SECRET);
                req.user = userData;
                res.locals.user = userData;

                console.log('Know user', userData.username);
            } catch (err) {
                res.clearCookie(COOKIE_NAME);
                res.redirect('/auth/login');
                return false;
            }
        };
        return true;
    }
}