import React from 'react'

import './OwnerCard.css'

export default function OwnerCard({ recMesg }) {
    return (
        <div className='chat-msg-box-me'>
            <div className='chat-avatar-me'>
                <h4 className='chat-av-me'>
                    Me
                </h4>
            </div>
            <p className='chat-message-me'>
                {recMesg.msg}
            </p>
            <div className='msg-time'>
                {recMesg.time}
            </div>
        </div>
    )
}
