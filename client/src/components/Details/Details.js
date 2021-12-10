import { useContext, useEffect, useState } from 'react';
import './Details.css';
import { Link, useParams } from 'react-router-dom';
import UserContext from '../../context/UserDataContext';
import SendMessage from './DetailsMessages/SendMessage';
import Comments from './Comments';

import { getById } from '../../services/article';

export default function Details() {
    const { userData } = useContext(UserContext);
    const [art, setArt] = useState({});
    const [artOwner, setArtOwner] = useState({});

    const { artId } = useParams();
    useEffect(() => {
        getById(artId)
            .then(res =>
                setArt(res.article,
                    setArtOwner(res.owner),
                ));
    }, [artId]);


    return (
        <section className="details">
            <h1 className="details-title">Details</h1>
            <article className="details-info">
                <div className="details-info-img">
                    <img src={art.image} alt="img-details" />
                </div>
                <p className="details-text">
                    {art.description}
                </p>
            </article>
            <article className="article-info">
                <ul className="art-info-items">
                    {art.category === 'animals' ?
                        <>
                            <li><strong>Name</strong>  {art.animalName}</li>
                            <li><strong>Type</strong>  {art.type}</li>
                            <li><strong>Birthday</strong>  {art.birthday}</li>
                        </>
                        : ''}
                    {art.category === 'cars' ?
                        <>
                            <li><strong>Marke</strong>  {art.marke}</li>
                            <li><strong>Model</strong>  {art.model}</li>
                            <li><strong>Year</strong>  {art.year}</li>
                        </>
                        : ''}
                    {art.category === 'clothes' ?
                        <>
                            <li><strong>Marke</strong>  {art.marke}</li>
                            <li><strong>Type</strong>  {art.type}</li>
                            <li><strong>Year</strong>  {art.year}</li>
                        </>
                        : ''}
                    <li><strong>Category</strong>  {art.category}</li>
                    <li><strong>City</strong>  {art.city}</li>
                    <li><strong>Date of publication</strong>  {art.createdAt}</li>
                    <li><strong>Price</strong>  ${art.price}</li>
                    {userData ?
                        <div className="seler-info">
                            <li><strong>Seller</strong>  {artOwner.username}</li>
                            <li><strong>Email</strong>  {artOwner.email}</li>
                        </div>
                        : ''}
                </ul>
                {userData ? <SendMessage ownerName={artOwner.username} ownerId={artOwner._id} userId={userData._id}
                    articleId={artId} /> : ""}

            </article>

            {userData ? <article className="buttons">
                {userData._id === art.owner ?
                    <>
                        <Link to={`/edit/${artId}`} className="button edit">Edit</Link>
                        <Link to="#" className="button del">Delete</Link>
                    </>
                    : <Link to="#" className="button like">Like</Link>}
            </article> : ""}
            <Comments category={art.category} />
        </section>
    )
}
