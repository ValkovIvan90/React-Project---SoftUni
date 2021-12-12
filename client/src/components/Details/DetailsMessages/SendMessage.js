
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { sendMessage } from '../../../services/user';
import MessageNot from '../../Notification/MessageNot';
import { sendMessageSchema } from '../../../yupSchemaValidation/userValidation';
import Notification from '../../Notification/InputNotification/Notification'

import './SendMessage.css'

export default function SendMessage({ ownerId, ownerName, userId, articleId }) {

    const [send, setSend] = useState([]);
    const [msgIsSend, setMsgIsSend] = useState(false);


    async function submitHandler(value, { resetForm }) {
        const data = {
            username: value.username,
            mail: value.email,
            message: value.message,
            ownerId,
            userId,
            articleId
        }
        setMsgIsSend(false);
        try {
            const result = await sendMessage(data);

            if (result.status === 200) {
                setSend({ message: result.message });
                setMsgIsSend(true)
            }
        } catch (err) {
            setSend(err.message)
        }
        resetForm({ value: "" });
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
                            type="text"
                            id="text-msg"
                            name="username"
                        />
                        <ErrorMessage name="username" component={Notification} />

                        <label htmlFor="email">Email</label>
                        <Field
                            type="email"
                            id="email-msg"
                            name="email"
                        />
                        <ErrorMessage name="email" component={Notification} />
                        <label htmlFor="message">Message</label>
                        <Field
                            as="textarea"
                            id="message-area"
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
                {msgIsSend ? <MessageNot message={send.message} /> : ""}
            </article>
        </>
    )
}
