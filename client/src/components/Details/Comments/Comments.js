import React from 'react'
import './Comments.css'
export default function Comments() {

    const submitComment = (e) => {
        e.preventDefault();

    }
    return (
        <div className="comments-box">
            <h2 className="comments-title">Comments :</h2>
            <form onSubmit={submitComment}>
                <input type="text" name="username" placeholder="Your name" />
                <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Comment"></textarea>
                <input type="submit" value="Post Comment" />
            </form>
            <div className="comments-count">
                <p className="count">Comments</p>
                <button className="show-hide-comments">Show Comments</button>
            </div>
        </div>
    )
}
