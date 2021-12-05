
import React, { useState } from 'react'
import './SendMessage.css'

import { sendMessage } from '../../../services/user';

export default function SendMessage({ ownerId, ownerName, userId }) {
    const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;

    const [error, setError] = useState('');
    const [send, setSend] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const { name, mail, message } = formData;

        if (name === "" || name.length < 4 || name.length > 15) {
            setError('Name should be between 4 and 15 character long!');
            return;
        }
        if (message === "" || message.length < 4 || message.length > 100) {
            setError('Message should be between 4 and 100 character long!');
            return;
        }

        if (!mail.match(emailRegex)) {
            setError('Invalid Email!');
            return;
        }
        const data = {
            name,
            mail,
            message,
            ownerId,
            userId
        }

        try {
            const result = await sendMessage(data);
            if (result.status === 200) {
                setSend(result.message);
            }

        } catch (err) {
            setError(err.message)
        }


    }
    return (
        <>
            {error ? <p className="msg-error">{error}</p> : <p className="msg-send">{send}</p>}
            <article className="message-box">
                <h4 className="box-title">Send message to <span>{ownerName}</span></h4>
                <form onSubmit={submitHandler}>
                    Name:<br />
                    <input type="text" name="name" placeholder="Your name" /><br />
                    E-mail:<br />
                    <input type="text" name="mail" placeholder="Your Email" /><br />
                    Message:<br />
                    <textarea name="message" id="" cols="21" rows="4" placeholder="Send message..."></textarea>
                    <div className="form-btn">
                        <input className="submit-btn" type="submit" value="Send" />
                        <input className="reset-btn" type="reset" value="Reset" />
                    </div>
                </form>
            </article>
        </>
    )
}
