import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useNavigate } from 'react-router-dom';
import { animalsSchema } from '../../../Validations/CreateModels';
import Notification from '../../Notification/InputNotification/Notification'

import { createArticle, updateArticle } from '../../../services/article';
import { animalEditModel } from '../../Edit/EditModel/editModel';

import ServerError from '../../Notification/ServerError';
import ModelLayout from './Layout/ModelLayout';

export default function Animals(props) {

    const animalData = animalEditModel(props);

    const [serverErr, setServerError] = useState([]);
    const navigate = useNavigate();


    const createAnimalArticle = async (e) => {

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
            if (result.status === 404) {
                setServerError({ error: result.message })
            } else {
                navigate('/catalog');
            }
        } catch (err) {
            console.log(err);
        }
    }

    const editAnimalArticle = async (e) => {
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
            const result = await updateArticle(props.artId, data);
            if (result.status === 404) {
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
                initialValues={animalData}
                validationSchema={animalsSchema}
                onSubmit={animalData.price ? editAnimalArticle : createAnimalArticle}
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

                    <ModelLayout data={animalData} />
                </Form>
            </Formik>
            {serverErr.error !== undefined ? <ServerError serverError={serverErr.error} /> : ""}
        </>
    )
}
