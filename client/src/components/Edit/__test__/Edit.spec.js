import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import user from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../../context/UserDataContext';
import { Form, Formik } from 'formik';
import Edit from '../Edit';



describe(("Test Edit component"), () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Edit />
                </AuthProvider>
            </BrowserRouter>
        )
    });

    it(("should show title"), async () => {
        expect(screen.getByRole('heading', {
            name: /edit article/i
        })).toBeInTheDocument();
    })
})