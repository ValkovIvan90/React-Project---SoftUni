
import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import Catalog from './components/Catalog/Catalog';

import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import Details from './components/Details/Details';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';


function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        '/home': <HomePage />,
        '/catalog': <Catalog />,
        '/login': <Login />,
        '/register': <Register />,
        '/edit': <Edit />,
        '/create': <Create />,
        '/details': <Details />
    }

    const navChangeHandler = (path) => {
        setPage(path);
    }
    return (
        <>
            <Header
                navChangeHandler={navChangeHandler}
            />
            <section className="container">
                {routes[page] || <h2>No page found</h2>}
            </section>
        </>

    );
}

export default App;
