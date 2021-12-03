import React from 'react'
import { Field, ErrorMessage } from 'formik';
import Notification from '../../../Notification/Notification';

export default function ModelLayout() {
    return (
        <>
            <label htmlFor="city">City</label>
            <Field
                type="text"
                id="city"
                name="city"
            />
            <ErrorMessage name="city" component={Notification} />

            <label htmlFor="image">Image</label>
            <Field
                type="text"
                id="image"
                name="image"
            />
            <ErrorMessage name="image" component={Notification} />

            <label htmlFor="price">Price</label>
            <Field
                type="number"
                id="price"
                name="price"
            />
            <ErrorMessage name="price" component={Notification} />
            <label htmlFor="description">Description</label>
            <Field
                as="textarea"
                id="description"
                name="description"
                rows="4"
                cols="50"
            />
            <ErrorMessage name="description" component={Notification} />
        </>
    )
}
