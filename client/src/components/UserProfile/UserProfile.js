import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserDataContext';

import { Image } from 'cloudinary-react';

import './UserProfile.css';
import ArtCard from '../catalog/Card/ArtCard'
import Spinner from '../Spinner';

import { getUserLikedCreatedArticles } from '../../services/article';
import { deleteImageHandler, loadImages, uploadProfileImage } from '../../services/user';


export default function UserProfile() {
    const { userData } = useContext(UserContext);

    const [artData, setArtData] = useState([]);
    const [createdArtCount, setCreatedArtCount] = useState(0);

    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();

    const [isLoaded, setIsLoaded] = useState(false);
    const [isSended, setIsSended] = useState(false);
    const [imageId, setImageId] = useState('');


    useEffect(() => {
        loadImages().then(res => {
            setImageId(res.data);
        }).catch(err => {
            console.error(err);
        })
    }, [isSended]);

    useEffect(() => {
        setIsLoaded(false)
        getUserLikedCreatedArticles(userData._id).then(res => {
            setArtData(res.article,
                setCreatedArtCount(res.userArticle))
            setIsLoaded(true)
        })
    }, [userData._id]);


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
        reader.onloadend = () => {
            uploadProfileImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
        };
        setIsSended(true);
    };

    return (
        isLoaded ?
            <section className="profile">
                <div className="profile-img-liks-section">
                    <div className="profile-img-section">
                        {imageId ?
                            <Image
                                cloudName='dkkvehvyx'
                                publicId={imageId}
                            />
                            : <img src={"/images/avatar.jpg"} alt="" />
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
                                        width: "50%",
                                        marginRight: "10px",
                                    }}
                                />
                                <button className="btn" type="submit">
                                    Submit
                                </button>
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
