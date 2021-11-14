import React from 'react'
import './HomePage.css'

export default function HomePage() {
    return (
        <section className="homePage">
            <article className="homePage-img">
                <img src="https://doinalangille.com/img/online-shopper/homepage.jpg" alt="" />
            </article>
            <article className="home-message">
                <div className="home-text-box">
                    <h1 className="home-message-title">I want to have ... everything</h1>
                    <p className="home-message-untertitle">The best free trade page !</p>
                </div>
            </article>
        </section>
    )
}
