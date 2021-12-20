import React, { useEffect, useState } from 'react'

import MessageCard from './MessageCard'
import { getUserMessages } from '../../../services/user'

import { useParams } from 'react-router-dom';

import './Messages.css'

export default function Messages() {

    const { userId } = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        getUserMessages(userId).then(res => {
            setData(state => ({ ...state, info: res.dataInfo }))
        }).catch(err => {
            console.log(err.message);
        })
    }, [userId])

    console.log(data);
    return (
        <div className='message-conrainer'>
            <h1 className='message-container-title'>Messages</h1>
            {data.info?.length > 0 ? data.info.map(x => <MessageCard key={x.userInfo.message} data={x} />) :
                <h1 className="sv-msg">No Articles</h1>
            }
        </div>
    )
}
