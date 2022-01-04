import React from 'react'
import './MessageCard.css'
export default function MessageCard({ data }) {
    return (
        <div className='msg-container'>
            <div className='msg-box'>
                <div className='time-author'>
                    <h3 className='msg-box-author'>{data.userInfo.username}</h3>
                    <p className='msg-time'>{data.userInfo.time}</p>
                </div>
                <div className='msg-box-content'>
                    <div className='msg-box-img'>
                        <img src={data.artData.image} alt="article-img" />
                    </div>
                    <div className='msg-box-message'>
                        <p className='msg-box-message-content'>
                            {data.userInfo.msg}
                        </p>
                    </div>
                    <div className='msg-card-btn'>
                        <button>more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
