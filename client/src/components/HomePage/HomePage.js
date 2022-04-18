import React, { useState } from 'react'
import Spinner from '../Spinner';
import './HomePage.css'



export default function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false);
    setTimeout(() => {
        setIsLoaded(true);
    }, 400);
    return (
        isLoaded ?
            <section className="homePage">
                <article className="homePage-img">
                    <img src={"images/homepage.jpg"} alt="" />
                </article>
                <article className="home-message">
                    <div className="home-text-box" id='hm-txt-bx'>
                        <h1 className="home-message-title">I want to have ... everything</h1>
                        <p className="home-message-untertitle">The best free trade page !</p>
                    </div>
                </article>
            </section>
            : <Spinner />
    )
}
