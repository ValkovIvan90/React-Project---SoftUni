import React from 'react'
import './MessageCard.css'
export default function MessageCard() {
    return (
        <div className='msg-box'>
            <h3 className='msg-box-author'>author</h3>
            <div className='msg-box-img'>
                <img src="" alt="" />
            </div>
            <p className='msg-time'>20</p>
        </div>
    )
}
