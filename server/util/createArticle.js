const { createDate } = require('./currentDate');

function createArt(data) {

    let { marke, model, year, city, image, price, category, description } = data.model;

    let result;
    if (category == 'cars') {

        const carData = {
            marke,
            model,
            year
        };
        result = carData;
    } else if (category == 'animals') {
        const animalsData = {
            name,
            type,
            birthday
        };
        result = animalsData;
    } else if (category == 'clothes') {
        const clothesDate = {
            marke,
            type,
            size,
            year
        };
        result = clothesDate;
    }
    result.city = city;
    result.image = image;
    result.price = price;
    result.category = category;
    result.description = description;
    result.createdAt = createDate();
    result.liked = [];
    result.comments = [];

    return result;
}
module.exports = {
    createArt
}