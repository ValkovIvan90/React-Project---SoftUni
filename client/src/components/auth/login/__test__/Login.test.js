import { act, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import { AuthProvider } from '../../../../context/UserDataContext';
import { BrowserRouter } from 'react-router-dom';

import Login from '../Login';

const MochFn = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Login />
            </AuthProvider>
        </BrowserRouter>
    );
}

describe(("Test Login page!"), () => {
    beforeEach(() => {
        render(
            <MochFn />
        )
    })
    describe(("Render Title"), () => {
        it('should render login title', async () => {
            const headingElement = screen.getByRole("heading", { name: "Login" });
            expect(headingElement).toBeInTheDocument();
        });
        it('shouldn`t be in the document!', async () => {
            const headingElement = screen.queryByText(/register/i);
            expect(headingElement).not.toBeInTheDocument();
        });
    })

    describe(("Show errors"), () => {
        it('should show error', async () => {
            const inputBtnSub = screen.getByTestId('login-btn');
            expect(inputBtnSub).toBeInTheDocument();
            expect(inputBtnSub).toHaveValue('Login')
        });
    })
})