import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useNavigate } from 'react-router-dom';
import { carsSchema } from '../../../Validations/CreateModels';
import Notification from '../../Notification/Notification';

import { createArticle } from '../../../services/article';
import ServerError from '../../Notification/ServerError';
import ModelLayout from './Layout/ModelLayout';

export default function Cars() {
    const [serverErr, setServerError] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        const data = {
            marke: e.marke,
            model: e.model,
            year: e.year,
            city: e.city,
            image: e.image,
            price: e.price,
            description: e.description,
            category: 'cars'
        }
        try {
            const result = await createArticle(data);
            if (result.status === 404 || result.status === 400) {
                setServerError({ error: result.statusText })
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
                    model: '',
                    year: '',
                    city: '',
                    image: '',
                    price: '',
                    description: '',
                }}
                validationSchema={carsSchema}
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

                    <label htmlFor="model">Model</label>
                    <Field
                        type="text"
                        id="model"
                        name="model"
                    />
                    <ErrorMessage name="model" component={Notification} />

                    <label htmlFor="year">Year</label>
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
