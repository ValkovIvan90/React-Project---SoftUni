import React from 'react'

import './Header.css'

export default function Header() {
    return (
        <header>
            <article className="logo">
                <i className="fas fa-handshake"></i>
                <li><a href="#">Welcome User</a></li>
                <li><a href="#">Create</a></li>
                <li><a href="#">All Articles</a></li>
            </article>
            <nav>
                <ul className="nav">
                    <li><a href="#">Catalog</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </nav>
        </header>
    )
}
