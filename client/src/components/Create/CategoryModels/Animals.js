import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useNavigate } from 'react-router-dom';
import { animalsSchema } from '../../../Validations/CreateModels';
import Notification from '../../Notification/Notification';

import { createArticle } from '../../../services/article';

import ServerError from '../../Notification/ServerError';
import ModelLayout from './Layout/ModelLayout';

export default function Animals() {
    const [serverErr, setServerError] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        const data = {
            animalName: e.name,
            type: e.type,
            birthday: e.birthday,
            city: e.city,
            image: e.image,
            price: e.price,
            description: e.description,
            category: 'animals'
        }
        try {
            const result = await createArticle(data);
            if (result.status === 404 || result.status === 400) {
                setServerError({ error: result.message })
            } else {
                navigate('/catalog');
            }
        } catch (err) {
            console.log(err);
        }
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

                    <ModelLayout />

                    <input type="submit" className="createArtBtn" value="Create Article" />
                </Form>
            </Formik>
            {serverErr.error !== undefined ? <ServerError serverError={serverErr.error} /> : ""}
        </>
    )
}
