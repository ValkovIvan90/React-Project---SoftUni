import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header(
) {
    return (
        <header>
            <article className="logo">
                <li><Link to="/"><i className="fas fa-handshake"></i></Link ></li>
                <li><Link to="#">Welcome User</Link ></li>
                <li><Link to="/create">Create</Link ></li>
                <li><Link to="/edit">Edit</Link ></li>
                <li><Link to="/allArticles">All Articles</Link ></li>
            </article>
            <nav>
                <ul className="nav">
                    <li><Link to="/catalog">Catalog</Link ></li>
                    <li><Link to="/login">Login</Link ></li>
                    <li><Link to="/register">Register</Link ></li>
                    <li><Link to="/logout">Logout</Link ></li>
                </ul>
            </nav>
        </header>
    )
}
