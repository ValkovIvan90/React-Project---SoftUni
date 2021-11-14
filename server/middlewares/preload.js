function preloadEst() {
    return async (req, res, next) => {
        req.data = req.data || {};
        try {
            const estate = await req.storage.getById(req.params.id);
            if (estate) {
                req.data.estate = estate
            }
        } catch (err) {
            console.error('Database error!', err.message);
        }
        next();
    };
};
module.exports = {
    preloadEst
}