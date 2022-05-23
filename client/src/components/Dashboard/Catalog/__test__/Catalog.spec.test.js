import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const { REACT_APP_BASE_URL } = process.env;
import { AuthProvider } from '../../../../context/UserDataContext';
import { BrowserRouter } from 'react-router-dom';

import Catalog from '../Catalog';

const server = setupServer(
    rest.get(`${REACT_APP_BASE_URL}/products`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                article: [
                    {
                        category: "cars",
                        city: "Berlin",
                        comments: [],
                        createdAt: "2022-04-03",
                        description: "Die Inzahlungnahme Ihres Gebrauchtfahrzeuges ist möglich.\nDas Fahrzeug ist leasing und kreditfähig und kann über unsere Partnerbank finanziert werden.\nIrrtümer",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QNTOeBUTxx0-lUhcXNwYtPkPMjMPtLwr0Q&usqp=CAU",
                        liked: (4)['6249ee28fbc27b1a14cda6f8', '6249eaf0fbc27b1a14cda6b6', '625d5f9f8cbe1b001614ea7d', '62618f7c5a984b0016708e73'],
                        marke: "BMV",
                        model: "320D",
                        owner: "6249e549fbc27b1a14cda667",
                        price: 15000,
                        year: "2012-03-03",
                        __v: 6,
                        _id: "6249e5d2fbc27b1a14cda66c"
                    },
                    {
                        category: "cars",
                        city: "Moscow",
                        comments: [],
                        createdAt: "2022-04-03",
                        description: "Die Inzahlungnahme Ihres Gebrauchtfahrzeuges ist möglich.\nDas Fahrzeug ist leasing und kreditfähig und kann über unsere Partnerbank finanziert werden.\nIrrtümer",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QNTOeBUTxx0-lUhcXNwYtPkPMjMPtLwr0Q&usqp=CAU",
                        liked: [],
                        marke: "Seat",
                        model: "Ibiza",
                        owner: "6249e549fbc27b1a14cda667",
                        price: 15000,
                        year: "2012-03-03",
                        __v: 6,
                        _id: "6249e5d2fbc27b1a14cda661231"
                    }
                ]
            })
        )
    })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe(("Test Catalog page"), () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <Catalog />
                </AuthProvider>
            </BrowserRouter>
        );
    })
    describe(("Should render Title , Cards and details button!"), () => {
        it(("should show component title"), async () => {
            await waitFor(() => {
                expect(screen.getByRole('heading', {
                    name: /all added articles/i
                })).toBeInTheDocument();
            })
        });
        it(("should render cards"), async () => {
            await waitFor(() => {
                expect(screen.getByText("Berlin")).toBeInTheDocument();
                expect(screen.getByText("Moscow")).toBeInTheDocument();
            })
        });
        it(("should show details button"), async () => {
            await waitFor(() => {
                expect(screen.getAllByRole('link', { name: /details/i })[0]).toBeInTheDocument();
            })
        });

    })



})

