

import { act, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import user from '@testing-library/user-event';


import { AuthProvider } from '../../../context/UserDataContext';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Header'
import App from '../../../App';


describe(("Test Header component"), () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Header />
                    <App />
                </AuthProvider>
            </BrowserRouter>)
    })



    describe('Links && Dropdown menu', () => {
        it('should show category dropdown menu', async () => {

            await waitFor(() => {
                user.click(screen.getAllByRole('link', {
                    name: /catalog/i
                })[0])
            })
            await waitFor(() => {
                expect(screen.getAllByRole('button', {
                    name: /category/i
                })[0]).toBeInTheDocument()
            })

        });
        it('should show Catalog,Login and Register links', () => {
            expect(screen.getAllByRole('link', {
                name: /catalog/i
            })[0]).toBeInTheDocument()
            expect(screen.getAllByRole('link', {
                name: /login/i
            })[0]).toBeInTheDocument()
            expect(screen.getAllByRole('link', {
                name: /register/i
            })[0]).toBeInTheDocument()
        });
        it('should show Catalog page', async () => {
            const catalogPage = screen.getAllByRole('link', {
                name: /catalog/i
            })[0];

            await act(async () => {
                user.click(catalogPage);
            })
            await waitFor(() => {
                expect(screen.getAllByRole('heading', {
                    name: /all added articles/i
                })[0]).toBeInTheDocument();
            });
        });
        it('user should click and go to Login page', async () => {
            const catalogPage = screen.getAllByRole('link', {
                name: /login/i
            })[0]
            user.click(catalogPage);


            await waitFor(() => {
                expect(screen.getByRole('heading', {
                    name: /login/i
                })).toBeInTheDocument();
            });
        });
        it('user should click and go to Register page', async () => {
            const catalogPage = screen.getAllByRole('link', {
                name: /register/i
            })[0]
            user.click(catalogPage);


            await waitFor(() => {
                expect(screen.getByRole('heading', {
                    name: /register/i
                })).toBeInTheDocument();
            });
        });
        it(("show allow user to select category!"), async () => {

            await user.click(screen.getAllByRole('link', {
                name: /catalog/i
            })[0]);

            await user.click(screen.getAllByRole('button', {
                name: /category/i
            })[0])

            expect(screen.getAllByRole('link', {
                name: /cars/i
            })[0]).toBeInTheDocument();
            expect(screen.getAllByRole('link', {
                name: /animals/i
            })[0]).toBeInTheDocument();
            expect(screen.getAllByRole('link', {
                name: /clothing/i
            })[0]).toBeInTheDocument();
        })

    })
})
