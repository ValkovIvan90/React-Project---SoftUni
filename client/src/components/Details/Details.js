import { useEffect, useState } from 'react';
import './Details.css';
import { Link, useParams } from 'react-router-dom';

import { getById } from '../../services/article';

export default function Details() {
    const [art, setArt] = useState({});
    const [artOwner, setArtOwner] = useState({});

    const { artId } = useParams();

    useEffect(() => {
        getById(artId)
            .then(res =>
                setArt(res.article,
                    setArtOwner(res.owner)
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
                    <li>Seller : {artOwner.username}</li>
                    <li>Email : {artOwner.email}</li>
                    <li>Place : {art.city}</li>
                    <li>Date of publication : {art.year}</li>
                    <li>Price : ${art.price}</li>
                </ul>
                <article className="message-box">
                    <h4 className="box-title">Send message to <span>{artOwner.email}</span></h4>
                    <form action="mailto:someone@example.com" method="post" encType="text/plain">
                        Name:<br />
                        <input type="text" name="name" placeholder="Your name" /><br />
                        E-mail:<br />
                        <input type="text" name="mail" placeholder="Your Email" /><br />
                        Message:<br />
                        <textarea name="message" id="" cols="21" rows="4" placeholder="Send message..."></textarea>
                        <div className="form-btn">
                            <input className="submit-btn" type="submit" value="Send" />
                            <input className="reset-btn" type="reset" value="Reset" />
                        </div>
                    </form>
                </article>
            </article>
            <article className="buttons">
                <Link to={`/edit/${artId}`} className="button edit">Edit</Link>
                <Link to="#" className="button del">Delete</Link>
                <Link to="#" className="button like">Like</Link>
            </article>
        </section>
    )
}
