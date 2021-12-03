import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserDataContext';

import './UserProfile.css';
import avatar from '../../images/avatar.jpg';


export default function UserProfile() {
    const { userData } = useContext(UserContext);

    return (
        <section className="profile">
            <div className="profile-img-liks-section">
                <div className="profile-img-section">
                    <img src={avatar} alt="avatar-img" />
                </div>
                <div className="uploadImg">
                    <form action="/action_page.php">
                        <label htmlFor="img">Select image: </label>
                        <input type="file" id="img" name="img" accept="image/*" />
                        <input className="submitbtn" type="submit" />
                    </form>
                </div>
                <div className="profile-links-section">
                    <nav>
                        <ul className="nav-links">
                            <li><Link to="">My Articles</Link></li>
                            <li><Link to="">Liked</Link></li>
                            <li><Link to="">Messages</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="profile-info">
                <div className="profile-info-user">
                    <div className="user-info">
                        <h1 className="user-info-title">
                            User-Info</h1>
                        <p className="user-info-name"><span>Name</span>  <strong className="data-span">{userData.username}</strong></p>
                        <p className="user-info-email"><span>Email</span> <strong className="data-span">{userData.email}</strong></p>
                        <p className="user-info-city"><span>City</span> <strong className="data-span">{userData.username}</strong></p>
                    </div>
                </div>
                <div className="profile-info-article">
                    <h1 className="profile-article-title">Last Liked Article</h1>
                    <article className="card">
                        <div className="img">
                            <img
                                src="https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0"
                                alt=""
                            />
                        </div>
                        <article className="info">
                            <div className="card-info city">
                                <h4>Vienna</h4>
                            </div>
                            <div className="card-info date">
                                <p>Date</p>
                            </div>
                            <div className="card-info price">
                                <p>Price</p>
                            </div>
                            <div className="card-info likes">
                                <h4>Likes</h4>
                            </div>
                            <div className="data-buttons">
                                <Link to="#" className="details-btn">Details</Link>
                            </div>
                        </article>
                    </article>
                </div>
            </div>
        </section>
    )
}
