import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthProvider } from '../../../../context/UserDataContext';
import { BrowserRouter } from 'react-router-dom';

import Login from '../Login';

describe(("Test Login page!"), () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Login />
                </AuthProvider>
            </BrowserRouter>
        )
    })
    it('should render login title', async () => {
        const headingElement = screen.getByRole("heading", { name: "Login" });
        expect(headingElement).toBeInTheDocument();
    });
    it('shouldn`t be in the document!', async () => {
        const headingElement = screen.queryByText(/register/i);
        expect(headingElement).not.toBeInTheDocument();
    });
})