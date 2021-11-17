
export function getAll() {
    return fetch('http://localhost:5000/products')
        .then(res => res.json());
}