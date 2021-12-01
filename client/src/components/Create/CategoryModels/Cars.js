import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useNavigate } from 'react-router-dom';
import { carsSchema } from '../../../Validations/CreateModels';
import Notification from '../../Notification/Notification';

import { createCar } from '../../../services/article';
import ServerError from '../../Notification/ServerError';

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
            const result = await createCar(data);
            if (result.status === 404 || result.status === 400) {
                setServerError({ error: result.statusText })
            } else {
                // navigate('/catalog');
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

                    <input type="submit" className="createArtBtn" value="Create Article" />
                </Form>
            </Formik>
            {serverErr.error !== undefined ? <ServerError serverError={serverErr.error} /> : ""}
        </>
    )
}
