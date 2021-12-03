import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useNavigate } from 'react-router-dom';
import { clothesSchema } from '../../../Validations/CreateModels';
import Notification from '../../Notification/Notification';

import { createArticle } from '../../../services/article';
import ModelLayout from './Layout/ModelLayout';
import ServerError from '../../Notification/ServerError';

export default function Clothes() {
    const [serverErr, setServerError] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        const data = {
            marke: e.marke,
            type: e.type,
            size: e.size,
            year: e.year,
            city: e.city,
            image: e.image,
            price: e.price,
            description: e.description,
            category: 'clothes'
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
                    marke: '',
                    type: '',
                    size: '',
                    year: '',
                    city: '',
                    image: '',
                    price: '',
                    description: '',
                }}
                validationSchema={clothesSchema}
                onSubmit={handleSubmit}
            >

                <Form>
                    <label htmlFor="marke">Marke</label>
                    <Field
                        type="text"
                        id="marke"
                        name="marke"
                    />
                    <ErrorMessage name="marke" component={Notification} />

                    <label htmlFor="type">Type</label>
                    <Field
                        type="text"
                        id="type"
                        name="type"
                    />
                    <ErrorMessage name="type" component={Notification} />

                    <label htmlFor="size">Size</label>
                    <Field
                        type="string"
                        id="size"
                        name="size"
                    />
                    <ErrorMessage name="size" component={Notification} />

                    <label htmlFor="year">Produced on:</label>
                    <Field
                        type="date"
                        id="year"
                        name="year"
                    />
                    <ErrorMessage name="year" component={Notification} />

                    <ModelLayout />
                    <input type="submit" className="createArtBtn" value="Create Article" />
                </Form>
            </Formik>
            {serverErr.error !== undefined ? <ServerError serverError={serverErr.error} /> : ""}
        </>
    )
}
