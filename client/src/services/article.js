
export function getAll() {
    return fetch('http://localhost:5000/products')
        .then(res => res.json());
}

export function getById(id) {
    return fetch('http://localhost:5000/products/details/' + id)
        .then(res => res.json());
}

export function createCar(data) {
    return fetch('http://localhost:5000/products/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'X-Authorization': 'token'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })
}


