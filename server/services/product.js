const Estate = require('../models/Housting');

// get all Estates
async function getAll() {
    const estate = Estate.find({}).lean();
    return estate;
};
async function createEstate(estate) {
    const record = new Estate(estate);
    return record.save();
};

async function getById(id) {
    const article = await Estate.
        findById(id)
        .populate('owner')
        .populate('rented')
        .lean();

    if (article) {
        const viewModel = {
            _id: article._id,
            name: article.name,
            year: article.year,
            type: article.type,
            city: article.city,
            description: article.description,
            imageUrl: article.imageUrl,
            owner: article.owner && article.owner.username,
            availablePieces: article.availablePieces,
            rented: article.rented,
        };
        return viewModel;

    } else {
        undefined;
    }
};
async function edit(id, estate) {
    const existingEst = await Estate.findById(id);

    if (!existingEst) {
        throw new ReferenceError('No such ID in database');
    };

    Object.assign(existingEst, estate);
    return existingEst.save();
};

async function deleteEstate(estId) {
    return await Estate.deleteOne({ _id: estId });
}



module.exports = {
    getAll,
    createEstate,
    getById,
    edit,
    deleteEstate,
}