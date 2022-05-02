import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AuthProvider } from '../../../../context/UserDataContext';
import { BrowserRouter } from 'react-router-dom';
import user from '@testing-library/user-event';

import Register from '../Register';
import { Formik } from 'formik'
describe(("Test Register component"), () => {

    const handleSubmit = jest.fn();
    beforeEach(() => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Register>
                        <Formik onSubmit={handleSubmit} />
                    </Register>
                </AuthProvider>
            </BrowserRouter>
        );
    });
    const getAllinputsAndRegBtn = () => {
        return {
            username: screen.getByTestId("username"),
            email: screen.getByTestId("email"),
            password: screen.getByTestId("password"),
            rePass: screen.getByTestId("rePass"),
            regBtn: screen.getByRole('button', {
                name: /register/i
            })
        }
    }
    describe(("Should render Register component!"), () => {
        it('should render register title', async () => {
            const headingElement = screen.getByRole('heading', {
                name: /register/i
            });
            expect(headingElement).toBeInTheDocument();
        });
        it('shouldn`t be in the document!', async () => {
            const headingElement = screen.queryByText(/login/i);
            expect(headingElement).not.toBeInTheDocument();
        });
        it(("should show register button and have value Register"), async () => {
            const inputBtnSub = getAllinputsAndRegBtn().regBtn;

            expect(inputBtnSub).toBeInTheDocument();
            expect(inputBtnSub).toHaveValue('Register');
        })
        it(("should fill username,email,password and rePass inputs!"), async () => {
            const usernameInput = screen.getByTestId("username");
            const emailInput = screen.getByTestId("email");
            const passwordInput = screen.getByTestId("password");
            const rePassInput = screen.getByTestId("rePass");

            await act(async () => {
                await user.type(usernameInput, "Gogogog");
                await user.type(emailInput, "gogo@abv.bg");
                await user.type(passwordInput, "1234");
                await user.type(rePassInput, "1234");
            })


            await waitFor(() => {
                expect(usernameInput).toHaveValue("Gogogog");
                expect(emailInput).toHaveValue("gogo@abv.bg");
                expect(passwordInput).toHaveValue("1234");
                expect(rePassInput).toHaveValue("1234");
            })
        })
    });
    describe(("Register form inputs errors"), () => {
        it('should show required username error!', async () => {

            await act(async () => {
                await user.click(getAllinputsAndRegBtn().regBtn);
            });
            await waitFor(() => {
                expect(screen.getByText('Username is required!')).toBeInTheDocument();
            });
        });
        it('should show required email error!', async () => {

            await act(async () => {
                await user.click(getAllinputsAndRegBtn().regBtn);
            })

            await waitFor(() => {
                expect(screen.getByText('Email is required!')).toBeInTheDocument();
            });
        });
        it('should show required password error!', async () => {
            await act(async () => {
                await user.click(getAllinputsAndRegBtn().regBtn);
            })

            await waitFor(() => {
                expect(screen.getByText('Password is required!')).toBeInTheDocument();
            });
        });
        it('should show invalid username error!', async () => {

            await act(async () => {
                await user.type(getAllinputsAndRegBtn().username, 'Koko');
                await user.tab();
            })

            await waitFor(() =>
                expect(screen.getByText('username must be at least 5 characters')).toBeInTheDocument());
        });
        it('should show invalid email error!', async () => {
            await act(async () => {
                await user.type(getAllinputsAndRegBtn().email, 'Koko');
                await user.tab();
            });
            await waitFor(() =>
                expect(screen.getByText('Wrong email')).toBeInTheDocument());
        });
        it('should show invalid password error!', async () => {

            await act(async () => {
                await user.type(getAllinputsAndRegBtn().password, '12');
                await user.tab();
            })

            await waitFor(() =>
                expect(screen.getByText('password must be at least 4 characters')).toBeInTheDocument());
        });
        it('should show invalid rePass error!', async () => {

            await act(async () => {
                await user.type(screen.getByTestId("rePass"), '12345');
                await user.tab();
            });

            await waitFor(() =>
                expect(screen.getByText('Password must match!')).toBeInTheDocument());
        });
    });

    describe(("Click register button!"), () => {
        it(("Should click register button!"), async () => {
            await act(async () => {
                await user.type(screen.getByTestId("username"), 'Johnny');
                await user.type(screen.getByTestId("email"), 'john@someemail.com');
                await user.type(screen.getByTestId("password"), '1234');
                await user.type(screen.getByTestId("rePass"), '1234');
            });

            await act(async () => {
                await user.click(screen.getByRole('button', {
                    name: /register/i
                }));
            })

            await waitFor(() => {
                expect(handleSubmit).toHaveBeenCalledWith({
                    username: 'Johnny',
                    email: 'john@someemail.com',
                    password: '1234',
                    rePass: '1234'
                })
            })

        })
    })

});
