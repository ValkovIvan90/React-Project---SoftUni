import { useEffect, useState } from 'react';
import './Details.css';

import { getById } from '../../services/article';

export default function Details({
    match,
}) {
    const [article, setArticle] = useState({});
    const id = match.params.articleId;

    useEffect(() => {
        getById(id).then(result => {
            setArticle(result)
        }).catch(err => {
            console.log(err.message);
        })
    }, []);

    const { imageUrl, description, city, owner, year, availablePieces } = article;
    return (
        <section className="details">
            <h1 className="details-title">Details</h1>
            <article className="details-info">
                <div className="details-info-img">
                    <img src={imageUrl} alt="img-details" />
                </div>
                <p className="details-text">
                    {description}
                </p>
            </article>
            <article className="article-info">
                <ul className="art-info-items">
                    <li>Seller : Ivan</li>
                    <li>Email : {owner}</li>
                    <li>Place : {city}</li>
                    <li>Date of publication : {year}</li>
                    <li>Price : ${availablePieces}</li>
                </ul>
                <article className="message-box">
                    <h4 className="box-title">Send message to <span>Ivan@gmai.com</span></h4>
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
                <a href="#" className="button edit">Edit</a>
                <a href="#" className="button del">Delete</a>
                <a href="#" className="button like">Like</a>
            </article>
        </section>
    )
}
