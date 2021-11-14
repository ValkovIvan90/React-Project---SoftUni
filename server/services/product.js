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
    const estate = await Estate.
        findById(id)
        .populate('owner')
        .populate('rented')
        .lean();

    if (estate) {
        const viewModel = {
            _id: estate._id,
            name: estate.name,
            year: estate.year,
            type: estate.type,
            city: estate.city,
            description: estate.description,
            imageUrl: estate.imageUrl,
            owner: estate.owner && estate.owner.username,
            availablePieces: estate.availablePieces,
            rented: estate.rented,
            ownerId: estate.owner._id
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