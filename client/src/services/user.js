

export function register(username, email, password, passwordConfirm) {
    return fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password, passwordConfirm })
    })
}
