import React from 'react'
import ModelLayout from './Layout/ModelLayout';


import { Formik, Form, Field, ErrorMessage } from 'formik';

import { clothesSchema } from '../../../Validations/CreateModels';
import Notification from '../../Notification/Notification';

export default function Clothes() {

    const handleSubmit = (e) => {
        const data = {
            marke: e.marke,
            type: e.type,
            size: e.size,
            year: e.year,
            city: e.city,
            image: e.image,
            price: e.price,
            description: e.description
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
        </>
    )
}
