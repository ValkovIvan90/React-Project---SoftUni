import React from 'react'
import './CommentCard.css'

export default function CommentCard() {
    return (
        <div className="comment-container">
            <p className="comment title">title</p>
            <p className="comment text">text</p>
            <p className="comment time">time</p>
        </div>
    )
}
