import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import user from '@testing-library/user-event';


import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../../context/UserDataContext';
import Details from '../Details';
import { ArticleProvider } from '../../../context/ArticleContext';


describe(("Test details component"), () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <ArticleProvider>
                        <Details />
                    </ArticleProvider>
                </AuthProvider>
            </BrowserRouter>
        )

    });

    describe(("Shoud show title,buttons,likes,description"), () => {

        it(("should show details title"), async () => {
              
        })
    })
})