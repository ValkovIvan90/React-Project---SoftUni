import React, { useEffect, useState } from 'react'

import MessageCard from './MessageCard'
import { getUserMessages } from '../../../services/user'

import { useParams } from 'react-router-dom';

import './Messages.css'
import Spinner from '../../Spinner';

export default function Messages() {

    const { userId } = useParams();

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false)
        getUserMessages(userId).then(res => {
            setData(state => ({ ...state, info: res.dataInfo }))
            setIsLoaded(true)
        }).catch(err => {
            console.log(err.message);
        })
    }, [userId]);

    return (
        isLoaded ?
            <div className='message-conrainer'>
                <h1 className='message-container-title'>Messages</h1>
                {data.info?.length > 0 ? data.info.map(x => <MessageCard key={x.documentId} data={x} currentUser={userId} />) :
                    <h1 className="sv-msg">No Messages yet</h1>
                }
            </div>
            : <Spinner />
    )
}
