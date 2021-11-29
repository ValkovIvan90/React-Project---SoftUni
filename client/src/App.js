import { useState } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserContext from './context/UserDataContext';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Catalog from './components/Catalog';
import UserProfile from './components/UserProfile';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';



function App() {
    const [userData, setUserData] = useState([]);

    return (
        <>
            <UserContext.Provider value={{ userData, setUserData }}>
                <Header />
                <section className="container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/edit/:artId" element={<Edit />} />
                        <Route path="details/:artId" element={<Details />} />
                    </Routes>
                </section>
            </UserContext.Provider>
        </>

    );
}

export default App;
