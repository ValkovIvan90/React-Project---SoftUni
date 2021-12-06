import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { commentSchema } from '../../../Validations/UserValidation';
import Notification from '../../Notification/InputNotification/Notification';

import { createComment } from '../../../services/article';

import './Comments.css'
export default function Comments({ articleId, category }) {

    const submitComment = async (value, { resetForm }) => {

        const data = {
            articleId,
            username: value.username,
            comment: value.comment,
            category
        }

        const result = await createComment(data)
        console.log(result);

    }
    return (
        <div className="comments-box">
            <h2 className="comments-title">Comments</h2>
            <Formik
                initialValues={{
                    username: '',
                    comment: ''
                }}
                validationSchema={commentSchema}
                onSubmit={submitComment}>
                <Form className="comment-form">
                    <Field
                        type="text"
                        id="inp-name"
                        name="username"
                        placeholder="Name ..."
                    />
                    <ErrorMessage name="username" component={Notification} />

                    <Field
                        as="textarea"
                        id="comment-area"
                        name="comment"
                        placeholder="Comment ..."
                        rows="4"
                        cols="100"
                    />
                    <ErrorMessage name="comment" component={Notification} />
                    <input type="submit" id="cm-submit" value="Post Comment" />
                </Form>
            </Formik>
            <div className="comments-count">
                <button className="show-hide-comments">Show Comments</button>
            </div>
        </div>
    )
}
