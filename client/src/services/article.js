
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
export function createComment(data) {
    return fetch('http://localhost:5000/products/createComment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(res => res.json());
}

export function getArtComments(id) {
    return fetch('http://localhost:5000/products/details/comments/' + id)
        .then(res => res.json());
}



export function updateArticle(id, data) {
    return fetch('http://localhost:5000/products/edit/' + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })
}