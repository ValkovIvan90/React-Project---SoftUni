import React, { useEffect, useState } from 'react';

import OwnerCard from './DiscussionCards/OwnerCard/OwnerCard';
import SenderCard from './DiscussionCards/SenderCard/SenderCard';

import { useParams } from 'react-router-dom';
import { getAllMessagesForCurrentArticle } from '../../../../../services/user';
import './Discussion.css'
import { getById } from '../../../../../services/article';

export default function Discussion() {

    const [recMesg, setRecMesg] = useState();
    const [article, setArticle] = useState();

    const { artId, email } = useParams([]);

    useEffect(() => {
        getAllMessagesForCurrentArticle(artId, email).then(res => {
            if (res.status === 200) {
                setRecMesg(res.dataInfo)
            }
        }).catch(err => {
            console.log(err);
        })
    }, [artId, email])

    useEffect(() => {
        getById(artId).then(res => {
            setArticle(res.article)
        }).catch(err => {
            console.log(err.message);
        })
    }, [artId]);

    return (
        <div className='discussion-container'>
            <div className='discussion-article-info-img'>
                <h3 className='discussion-article-info-title'>Article-Info</h3>
                <div className='discussion-art-img'>
                    <img src={article?.image} alt="artImage" />
                </div>
                <div className='discussion-art-info'>
                    <ul className='discussion-ul-items'>
                        <li>City - {article?.city}</li>
                        <li>Year - {article?.year || article?.birthday}</li>
                        <li>Likes - {article?.liked?.length}</li>
                        <li>Price - {article?.price}$</li>
                    </ul>
                </div>
            </div>
            <div className='chat-msg-container'>
                <div className='my-msg-stra'>
                    <h3 className='dsc-chat-msg-title'>Chat</h3>
                    {recMesg?.length > 0 ? recMesg.map(x => <SenderCard key={x.messageId} recMesg={x} />) :
                        ""
                    }
                    {recMesg?.length > 0 ? recMesg.map(x => <OwnerCard key={x.messageId} recMesg={x} />) :
                        ""
                    }
                </div>
                <div className='form-msg'>
                    <form>
                        <textarea name="" id="txt-area" cols="70" rows="4" placeholder='Your message...'></textarea>
                        <div className="form-btn">
                            <input className="submit-btn" type="submit" value="Send" />
                            <input className="reset-btn" type="reset" value="Reset" />
                        </div>
                    </form>
                </div>
            </div>
            <div className='del-discussion'>
                <button className='del-discuss-btn'>Remove Discussion</button>
            </div>
        </div>
    )
}
