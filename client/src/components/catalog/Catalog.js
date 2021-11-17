import { useEffect, useState } from 'react';

import './Catalog.css';
import ArtCard from './ArtCard';

import React from 'react'
import { getAll } from '../../services/article';

export default function Catalog() {
    const [articles, setArticle] = useState([])

    useEffect(() => {
        getAll().then(result => {
            setArticle(result)
        }).catch((err) => {
            console.log(err.message);
        })

    }, [])


    return (
        <section className="catalog">
            <h1 className="catalog-title">All added Articles</h1>
            <article className="cards">
                {articles.map(x => <ArtCard key={x._id} article={x} />)}
            </article>
        </section >
    )
}
