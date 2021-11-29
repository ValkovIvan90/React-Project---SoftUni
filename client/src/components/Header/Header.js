import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserDataContext';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../services/user'
import './Header.css';

export default function Header() {

    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);

    async function logoutUser() {
        const result = await logout();

        if (result.status !== 200) {
            console.log('Logout Error');
        } else {
            localStorage.removeItem('Token');
            setUserData("")
            navigate('/')
        }
    }


    return (
        <header>
            <article className="logo">
                <li><Link to="/"><i className="fas fa-handshake"></i></Link ></li>
                <li><Link to="/profile"> {userData.username ? `Welcome, ${userData.username}` : ""}</Link ></li>
                
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
                    {userData.username ?
                        <>
                            <li><Link to="/create">Create</Link ></li>
                            <li><Link to="/catalog">Catalog</Link ></li>
                            <button className="logOutBtn" onClick={logoutUser}>Sign out</button>
                        </>
                        :
                        <>
                            <li><Link to="/login">Login</Link ></li>
                            <li><Link to="/register">Register</Link ></li>
                        </>
                    }

                </ul>
            </nav>
        </header>
    )
}
