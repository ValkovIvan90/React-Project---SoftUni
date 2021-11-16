import React from 'react'

export default function ArtCard({
    article
}) {
    return (
        <article className="card">
            <div className="img">
                <img
                    src="https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0"
                    alt=""
                />
            </div>
            <article className="info">
                <div className="card-info city">
                    <h4>{article.title}</h4>
                </div>
                <div className="card-info date">
                    <p>{article.body}</p>
                </div>
                <div className="card-info price">
                    <p>{article.userId}</p>
                </div>
                <div className="card-info likes">
                    <h4>Likes</h4>
                </div>
                <div className="data-buttons">
                    <a href="#" className="details-btn">Details</a>
                </div>
            </article>
        </article>
    )
}
