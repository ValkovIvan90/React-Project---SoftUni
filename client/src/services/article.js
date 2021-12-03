
export function getAll() {
    return fetch('http://localhost:5000/products')
        .then(res => res.json());
}

export function getById(id) {
    return fetch('http://localhost:5000/products/details/' + id)
        .then(res => res.json());
}

export function createArticle(data) {
    return fetch('http://localhost:5000/products/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })
}


