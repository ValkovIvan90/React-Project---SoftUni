import React from 'react'

import './Header.css'

export default function Header(
    {navChangeHandler}
) {
    const onHeaderClick = (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            let url = new URL(e.target.href);
            navChangeHandler(url.pathname)
        }
    }

    return (
        <header onClick={onHeaderClick}>
            <article className="logo">
                <i className="fas fa-handshake"></i>
                <li><a href="#">Welcome User</a></li>
                <li><a href="/create">Create</a></li>
                <li><a href="/allArticles">All Articles</a></li>
                <li><a href="/home">Home</a></li>
            </article>
            <nav>
                <ul className="nav">
                    <li><a href="/catalog">Catalog</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </nav>
        </header>
    )
}
