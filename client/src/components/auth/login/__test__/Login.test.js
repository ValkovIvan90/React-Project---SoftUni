import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import user from '@testing-library/user-event';

import { AuthProvider } from '../../../../context/UserDataContext';
import { BrowserRouter } from 'react-router-dom';

import Login from '../Login';

const handleSubmit = jest.fn();
const MochFn = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Login onSubmit={handleSubmit} />
            </AuthProvider>
        </BrowserRouter>
    );
}

describe(("Test Login component"), () => {

    beforeEach(() => {
        render(
            <MochFn />
        )
    });

    describe(("Render Title and Login value!"), () => {
        it('should render login title', async () => {
            const headingElement = screen.getByRole("heading", { name: "Login" });
            expect(headingElement).toBeInTheDocument();
        });
        it('shouldn`t be in the document!', async () => {
            const headingElement = screen.queryByText(/register/i);
            expect(headingElement).not.toBeInTheDocument();
        });
        it(("should show login button and have value Login"), async () => {
            const inputBtnSub = screen.getByTestId('login-btn');
            expect(inputBtnSub).toBeInTheDocument();
            expect(inputBtnSub).toHaveValue('Login');
        })
        it(("should fill email and password inputs!"), async () => {
            const emailInput = getAllInputs().email;
            const passwordInput = getAllInputs().password;

            fireEvent.change(emailInput, { target: { value: "gogo@abv.bg" } });
            fireEvent.change(passwordInput, { target: { value: "1234" } });

            await waitFor(() => {
                expect(emailInput).toHaveValue("gogo@abv.bg");
                expect(passwordInput).toHaveValue("1234");
            })
        })
    });

    const getAllInputs = () => {
        return {
            logBtn: user.click(screen.getByRole('button', { name: /login/i })),
            email: screen.getByTestId("email"),
            password: screen.getByTestId("password")
        }
    }

    describe(("Form inputs errors"), () => {
        it('should show required email error!', async () => {
            getAllInputs().logBtn;
            await waitFor(() => {
                expect(screen.getByText('Email is required!')).toBeInTheDocument();
            });
        });
        it('should show required password error!', async () => {
            getAllInputs().logBtn;
            await waitFor(() => {
                expect(screen.getByText('Password is required!')).toBeInTheDocument();
            });
        });
        it('should show invalid email error!', async () => {

            user.type(getAllInputs().email, 'Koko');
            user.tab();

            await waitFor(() => {
                expect(screen.getByText('Wrong email')).toBeInTheDocument();
            });
        });
        it('should show invalid password error!', async () => {

            user.type(getAllInputs().password, '12');
            user.tab();

            await waitFor(() => {
                expect(screen.getByText('password must be at least 4 characters')).toBeInTheDocument();
            });
        });
    })
    describe(("Login Button"), () => {
        it(("should show Login button!"), async () => {
            expect(screen.getByRole('button', { name: /login/i })).toHaveValue('Login');
        });
        it(("title shiuld be false!"), async () => {
            expect(screen.getByRole('button', { name: /login/i })).not.toHaveValue('Register');
        });
    });

});