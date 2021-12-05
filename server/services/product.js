
const Car = require('../models/Car');
const Animal = require('../models/Animal');
const Dress = require('../models/Dress');

// get all Estates
async function getAll() {

    const Cars = await Car.find({}).lean();
    const Animals = await Animal.find({}).lean();
    const Clothes = await Dress.find({}).lean();

    const result = [...Cars, ...Animals, ...Clothes];

    return result;
};

async function createArtModel(art) {
    try {
        if (art.category == 'cars') {
            const record = new Car(art);
            return record.save();
        } else if (art.category == 'animals') {
            const record = new Animal(art);
            return record.save();
        } else if (art.category == 'clothes') {
            const record = new Dress(art);
            return record.save();
        }
    } catch (err) {
        throw new Error(err.message)
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
    createArtModel,
    edit,
    deleteEstate,
}