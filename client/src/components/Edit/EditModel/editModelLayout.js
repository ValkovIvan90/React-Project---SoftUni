

export function editModel(props) {

    let carData;
    if (!props.artData) {
        carData = {
            marke: "",
            model: "",
            year: "",
            city: "",
            image: "",
            price: "",
            description: ""
        }
    } else {
        carData = {
            marke: props.artData.marke,
            model: props.artData.model,
            year: props.artData.year,
            city: props.artData.city,
            image: props.artData.image,
            price: props.artData.price,
            description: props.artData.description
        }
    }

    return carData;

}