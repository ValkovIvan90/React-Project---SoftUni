import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useNavigate } from 'react-router-dom';
import { carsSchema } from '../../../Validations/CreateModels';
import Notification from '../../Notification/InputNotification/Notification'

import { createArticle, updateArticle } from '../../../services/article';
import { editModel } from '../../Edit/EditModel/editModelLayout';

import ServerError from '../../Notification/ServerError';
import ModelLayout from './Layout/ModelLayout';

export default function Cars(props) {

    const carData = editModel(props)

    const [serverErr, setServerError] = useState([]);
    const navigate = useNavigate();

    const createArt = async (e) => {

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
                setServerError({ error: result.message })
            } else {
                navigate('/catalog');
            }
        } catch (err) {
            console.log(err);
        }
    }
    const editArt = async (e) => {
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
            const result = await updateArticle(props.artId, data);
            console.log(result);
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
                initialValues={carData}
                validationSchema={carsSchema}
                onSubmit={carData.marke ? editArt : createArt}
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
