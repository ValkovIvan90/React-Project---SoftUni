import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserDataContext';

import './Header.css';

export default function Header() {

    const { userData } = useContext(UserContext);
    console.log(userData);
    return (
        <header>
            <article className="logo">
                <li><Link to="/"><i className="fas fa-handshake"></i></Link ></li>
                <li><Link to="#"> {userData.username ? `Welcome, ${userData.username}` : ""}</Link ></li>
                <li><Link to="/create">Create</Link ></li>
                <li><Link to="/edit">Edit</Link ></li>

                <div className="dropdown">
                    <button className="dropbtn">Category
                        <i className="fas fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="#">Animals</Link>
                        <Link to="#">Cars</Link>
                        <Link to="#">Clothing</Link>
                    </div>
                </div>

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
