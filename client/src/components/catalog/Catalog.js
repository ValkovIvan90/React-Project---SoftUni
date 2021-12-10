import React from 'react';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import queryString from 'query-string'
import { getAll, getByCategory } from '../../services/article';

import ArtCard from './Card';
import './Catalog.css';

export default function Catalog() {
    const [articles, setArticle] = useState([]);
    const [serverMsg, setServerMsg] = useState("");

    const { search } = useLocation();
    const { name } = queryString.parse(search);

    useEffect(() => {
        if (name) {
            getByCategory(name).then(result => {
                setArticle(result.article);
                setServerMsg(result.message)
            }).catch(err => {
                console.log(err.message);
            })
        } else {
            getAll().then(result => {
                setArticle(result.article);
                setServerMsg(result.message)
            }).catch(err => {
                console.log(err.message);
            });
        }
    }, [name])

    return (
        <section className="catalog">
            <h1 className="catalog-title">All added Articles</h1>
            <article className="cards">
                {articles.length > 0 ? articles.map(x => <ArtCard key={x._id} article={x} />) :
                    <h1 className="sv-msg">{serverMsg}</h1>
                }

            </article>
        </section >
    )
}
