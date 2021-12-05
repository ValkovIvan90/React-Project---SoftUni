
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { sendMessage } from '../../../services/user';
import MessageNot from '../../Notification/MessageNot';
import { sendMessageSchema } from '../../../Validations/UserValidation';
import Notification from '../../Notification/InputNotification/Notification'

import './SendMessage.css'

export default function SendMessage({ ownerId, ownerName, userId, articleId }) {

    const [error, setError] = useState('');
    const [send, setSend] = useState('');

    async function submitHandler(e) {

        const data = {
            username: e.username,
            mail: e.email,
            message: e.message,
            ownerId,
            userId,
            articleId
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
            <article className="message-box">
                <h4 className="box-title">Send message to <span>{ownerName}</span></h4>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        message: ''
                    }}
                    validationSchema={sendMessageSchema}
                    onSubmit={submitHandler}>
                    <Form className="form">
                        <label htmlFor="username">Name</label>
                        <Field
                            className="input"
                            type="text"
                            id="text"
                            name="username"
                        />
                        <ErrorMessage name="username" component={Notification} />

                        <label htmlFor="email">Email</label>
                        <Field
                            className="input"
                            type="email"
                            id="email"
                            name="email"
                        />
                        <ErrorMessage name="email" component={Notification} />
                        <label htmlFor="message">Message</label>
                        <Field
                            as="textarea"
                            id="message"
                            name="message"
                            rows="4"
                            cols="50"
                        />
                        <ErrorMessage name="message" component={Notification} />

                        <div className="form-btn">
                            <input className="submit-btn" type="submit" value="Send" />
                            <input className="reset-btn" type="reset" value="Reset" />
                        </div>
                    </Form>
                </Formik>
            </article>
            <div id="notification-box">
                {/* {error ? <MessageNot message={error} /> : <MessageNot message={send} />} */}
            </div>
        </>
    )
}
