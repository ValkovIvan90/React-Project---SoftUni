

import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import user from '@testing-library/user-event';


import Create from '../Create';
import Cars from '../../CategoryModels/Cars';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../../context/UserDataContext';
import { Form, Formik } from 'formik';


describe(("Test create article"), () => {
    beforeEach(async () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Create>
                        <Cars />
                    </Create>
                </AuthProvider>
            </BrowserRouter>
        );
        await selectCarFormOption();
    });

    const selectCarFormOption = () => {
        return user.selectOptions(
            screen.getByTestId('select-options'),
            screen.getByRole('option', { name: 'Cars' }));
    }
    const getAllCarInputs = () => {
        return {
            marke: screen.getByRole('textbox', {
                name: /marke/i
            }),
            model: screen.getByRole('textbox', {
                name: /model/i
            }),
            year: screen.getByLabelText(/year/i),
            city: screen.getByRole('textbox', {
                name: /city/i
            }),
            image_url: screen.getByRole('textbox', {
                name: /image/i
            }),
            price: screen.getByRole('spinbutton', {
                name: /price/i
            }),
            description: screen.getByRole('textbox', {
                name: /description/i
            })
        }
    };

    describe(("Should show  title, select-options"), () => {
        it(("expect create page title to be rendered!"), async () => {
            expect(screen.getAllByText("Create Article")[0]).toBeInTheDocument()
        });
        it(("expect create page select optional to be true!"), async () => {
            expect(screen.getByText(/choose a category:/i)).toBeInTheDocument()
        });
        it('should display the correct number of options', () => {
            expect(screen.getAllByRole("option").length).toBe(4)
        });
        it('should allow user to change select category', () => {
            user.selectOptions(
                screen.getByTestId('select-options'),
                screen.getByRole('option', { name: 'Cars' }),
            )
            expect(screen.getByRole('option', { name: 'Cars' })).toBeInTheDocument();
        })
    });
    describe(("Invalid inputs and errors"), () => {
        it('should show required inputs', async () => {

            await act(async () => {
                await user.click(screen.getByRole('button', {
                    name: /create article/i
                }));
            })

            await waitFor(() => {
                expect(screen.getByText('Marke is required!')).toBeInTheDocument();
                expect(screen.getByText('Model is required!')).toBeInTheDocument();
                expect(screen.getByText('Date is required!')).toBeInTheDocument();
                expect(screen.getByText('City is required!')).toBeInTheDocument();
                expect(screen.getByText('Image is required!')).toBeInTheDocument();
                expect(screen.getByText('Price is required!')).toBeInTheDocument();
                expect(screen.getByText('Description is required!')).toBeInTheDocument();
            })
        });
        it(("should show invalid date > 2022!"), async () => {
            await act(async () => {
                await user.type(getAllCarInputs().year, "2023-03-29");
            })
            await act(async () => {
                await user.tab();

            })

            await waitFor(() => {
                expect(screen.getByText('year field must be at earlier than 2023')).toBeInTheDocument();
            });
        });
        it(("should show invalid date < 1950!"), async () => {

            await act(async () => {
                await user.type(getAllCarInputs().year, "1900-03-29");
            })
            await act(async () => {
                await user.tab();
            })

            await waitFor(() => {
                expect(screen.getByText('year field must be later than 1950')).toBeInTheDocument();
            });
        });
        it(("should show invalid image_url"), async () => {
            await act(async () => {
                await user.type(getAllCarInputs().image_url, "www.@sfsdfsd");
            })
            await act(async () => {
                await user.tab();
            })

            await waitFor(() => {
                expect(screen.getByText(/image must match the following: "\/\^https\?:\\\/\\\/\/"/i)).toBeInTheDocument();
            });
        });
        it(("should show invalid price field!"), async () => {

            await act(async () => {
                await user.type(getAllCarInputs().price, "-1");
            })
            await act(async () => {
                await user.tab();
            });

            await waitFor(() => {
                expect(screen.getByText("price must be greater than or equal to 1")).toBeInTheDocument();
            })
        });
    });
    describe(("Check button and create functionality"), () => {
        it(("should show 'create article' button !"), async () => {
            expect(screen.getByRole('button', {
                name: /create article/i
            })).toBeInTheDocument()
        });
        it(("user should be able to click 'Create article'button!"), async () => {

            const createArt = jest.fn();
            render(
                <Formik initialValues={{}}
                    onSubmit={createArt}>
                    <Form>
                        <input type="submit" className="createArtBtn" value="Create Article" />
                    </Form>
                </Formik>
            );


            await act(async () => {
                await user.click(screen.getAllByRole('button', {
                    name: /create article/i
                })[1])

            });
            await waitFor(() => {
                expect(createArt).toHaveBeenCalledTimes(1);

            });

        });
    });
});