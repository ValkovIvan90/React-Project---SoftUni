import React from 'react'
import './Messages.css'

import MessageCard from './MessageCard'

export default function Messages() {
    
    return (
        <div className='message-conrainer'>
            <h1 className='message-container-title'>Messages</h1>
            <MessageCard />
        </div>
    )
}
