import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserDataContext';

import { Image } from 'cloudinary-react';

import './UserProfile.css';
import ArtCard from '../Dashboard/Card/ArtCard'; 
import Spinner from '../Spinner';

import { getUserLikedCreatedArticles } from '../../services/article';
import { deleteImageHandler, loadImages, logout, uploadProfileImage } from '../../services/user';


export default function UserProfile() {
    const { userData, setUserData } = useContext(UserContext);

    const navigate = useNavigate();


    const [artData, setArtData] = useState([]);
    const [createdArtCount, setCreatedArtCount] = useState(0);

    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();

    const [isLoaded, setIsLoaded] = useState(false);
    const [imageId, setImageId] = useState('');

    useEffect(() => {
        loadImages().then(res => {
            setImageId(res.data);
        }).catch(err => {
            console.error(err);
        })
    }, []);


    useEffect(() => {
        setIsLoaded(false)
        getUserLikedCreatedArticles(userData._id).then(res => {
            setArtData(res.article,
                setCreatedArtCount(res.userArticle))
            setIsLoaded(true)
        })
    }, [userData._id]);

    async function logoutUser() {
        const result = await logout();
        if (result.status !== 200) {
            console.log('Logout Error');
        } else {
            setUserData('')
            navigate('/')
        }
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };


    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = async () => {
            await uploadProfileImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
        };
    };

    return (
        isLoaded ?
            <section className="profile">
                <div className="profile-img-liks-section">
                    <div className="profile-img-section">
                        {imageId ?
                            <Image
                                cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                                publicId={imageId}
                            />
                            : <img src={"/images/avatar.jpg"} alt="some error" />
                        }
                    </div>
                    {!imageId ?
                        <div className="uploadImg">
                            <form onSubmit={handleSubmitFile} className="form">
                                <input
                                    id="fileInput"
                                    type="file"
                                    name="image"
                                    onChange={handleFileInputChange}
                                    value={fileInputState}
                                    className="form-input"
                                    style={{
                                        width: "100%",
                                        color: "red",
                                        margin: "auto",
                                    }}
                                />
                                {selectedFile ?
                                    <button className="uploadimage-btn" type="submit">
                                        Submit
                                    </button>
                                    : ""
                                }

                            </form>
                        </div>
                        :
                        <button className='profileDelBtn' type='button' onClick={() => deleteImageHandler(userData._id)}>Delete Image</button>
                    }
                    <div className="profile-links-section">
                        <nav>
                            <ul className="nav-links">
                                <li><Link to={`/messages/${userData._id}`}>Messages</Link></li>
                                <li><Link to={`/messag/${userData}`}>Settings</Link></li>
                                <li><button className="logOutBtn" onClick={logoutUser}>Sign out</button></li>
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
                            <p className="user-info-liked-art"><span>Created Articles</span> <strong className="data-span">{createdArtCount}</strong></p>
                            <p className="user-info-created-art"><span>Liked Articles</span> <strong className="data-span">{artData.length}</strong></p>
                        </div>
                    </div>
                    <div className="profile-info-article">
                        <h1 className="profile-article-title">Last Liked Articles</h1>

                        {artData?.length > 0 ? artData.map(x => <ArtCard key={x._id} article={x} />) :
                            <p className='no-liked-art'> No liked articles yet!</p>
                        }
                    </div>
                </div>
            </section >
            : <Spinner />
    )
}
