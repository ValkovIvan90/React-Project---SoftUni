import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { animalsSchema } from '../../../Validations/CreateModels';
import Notification from '../../Notification/Notification';

export default function Animals() {
    const handleSubmit = () => {
        console.log('Carssss');
    }
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    type: '',
                    birthday: '',
                    city: '',
                    image: '',
                    price: '',
                    description: '',
                }}
                validationSchema={animalsSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field
                        type="text"
                        id="name"
                        name="name"
                    />
                    <ErrorMessage name="name" component={Notification} />

                    <label htmlFor="type">Type</label>
                    <Field
                        type="text"
                        id="type"
                        name="type"
                    />
                    <ErrorMessage name="type" component={Notification} />

                    <label htmlFor="birthday">Birthday</label>
                    <Field
                        type="date"
                        id="birthday"
                        name="birthday"
                    />
                    <ErrorMessage name="birthday" component={Notification} />

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
                    />
                    <ErrorMessage name="description" component={Notification} />

                    <input type="submit" className="createArtBtn" value="Create Article" />
                </Form>
            </Formik>

        </>
    )
}
