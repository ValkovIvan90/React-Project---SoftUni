import React, { useState } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { commentSchema } from '../../../Validations/UserValidation';
import Notification from '../../Notification/InputNotification/Notification';

import { createComment } from '../../../services/article';
import CommentCard from './CommentCard'

import './Comments.css'
export default function Comments({ articleId, category, comments }) {

    const [data, setData] = useState([]);
    const [isHiden, setIsHiden] = useState(false);

    const hideHandler = (e) => {
        e.preventDefault();
        if (isHiden) {
            setIsHiden(false)
        } else {
            setIsHiden(true)
        }

    }

    const submitComment = async (value) => {

        const data = {
            articleId,
            username: value.username,
            comment: value.comment,
            category
        }
        try {
            const result = await createComment(data);
            if (result.status !== 200) {
                throw new Error(result.message)
            }
            setData(result)
        } catch (err) {
            console.log(err.message);
        }
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
            <div className="cmt-container">
                <button className="show-hide-comments" onClick={hideHandler}>{isHiden ? 'Hide Comments' : 'Show Comments'}</button>
                {isHiden ? comments.map(x => <CommentCard key={x._id} comment={x} />) : ""}
            </div>
        </div>
    )
}
