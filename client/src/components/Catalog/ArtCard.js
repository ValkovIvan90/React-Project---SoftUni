import React from 'react';

import { Link } from 'react-router-dom';


export default function ArtCard({
    article
}) {
    return (
        <article className="card">
            <div className="img">
                <img
                    src={article.imageUrl}
                    alt="art"
                />
            </div>
            <article className="info">
                <div className="card-info city">
                    <h4>{article.city}</h4>
                </div>
                <div className="card-info date">
                    <p>{article.year}</p>
                </div>
                <div className="card-info price">
                    <p>{article.type}</p>
                </div>
                <div className="card-info likes">
                    <h4>Likes</h4>
                </div>
                <div className="data-buttons">
                    <Link to={`details/${article._id}`}
                        className="details-btn">
                        Details
                    </Link>
                </div>
            </article>
        </article>
    )
}