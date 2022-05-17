import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import user from '@testing-library/user-event';

import { AuthProvider } from '../../../../context/UserDataContext';
import { BrowserRouter } from 'react-router-dom';
import { Form, Formik } from 'formik';

import Catalog from '../Catalog';

describe(("Test Catalog page"), () => {
    it(("test 1"), async () => {
        render(<Catalog />);
        expect(screen.getByText("All added Articles")).toBeInTheDocument();
    })

})

