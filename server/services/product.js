const uniqId = require('uniqid');

const Car = require('../models/Car');
const Animal = require('../models/Animal');
const Dress = require('../models/Dress');

// get all Articles
async function getAll() {

    const Cars = await Car.find({}).lean();
    const Animals = await Animal.find({}).lean();
    const Clothes = await Dress.find({}).lean();

    const result = [...Cars, ...Animals, ...Clothes];

    return result;
};

async function getById(id) {

    try {
        const artResult = await getAll();

        const currentArt = artResult.reduce((acc, c) => {
            if (c._id == id) {
                acc.article = c
            }
            return acc;
        }, {});
        if (!currentArt) {
            throw new Error('No record in the database!')
        }

        return currentArt.article;
    } catch (err) {
        console.log(err.message);
    }
}

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
async function createComment(data) {

    let time = new Date()
    const currentTime = time.toString().substring(0, 24);

    const model = {
        cars: Car,
        animals: Animal,
        clothes: Dress
    }
    const { artId, username, comment, category } = data;

    try {
        const commID = uniqId();

        const article = await model[category].findOne({ _id: artId });
        article.comments.push({ _id: commID, username, comment, time: currentTime });

        await article.save();
        return commID;
    } catch (err) {
        return err.message
    }
};

async function edit(id, article) {

    const model = {
        cars: Car,
        animals: Animal,
        clothes: Dress
    }
    try {
        const record = await model[article.category].findOne({ _id: id });
        if (!record) {
            throw new Error('No such article!')
        }
        Object.assign(record, article);

        await record.save();

    } catch (err) {
        return err.message
    }
};

async function deleteArtcle(id) {


    const model = {
        cars: Car,
        animals: Animal,
        clothes: Dress
    }
    try {
        const allArticle = await getAll();
        const currentArticle = allArticle.find(x => x._id == id);

        if (!currentArticle) {
            throw new Error('No record in database!');
        }
        await model[currentArticle.category].deleteOne({ _id: currentArticle._id })
    } catch (err) {
        return err.message
    }



}



module.exports = {
    getAll,
    getById,
    createArtModel,
    createComment,
    edit,
    deleteArtcle,
}