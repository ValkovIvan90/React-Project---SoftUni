import { useState } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserContext from './context/UserDataContext';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Catalog from './components/Catalog';

import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import Create from './components/Create/Create';
import Details from './components/Details/Details';



function App() {
    const [userData, setUserData] = useState([]);

    return (
        <>
            <UserContext.Provider value={{userData, setUserData}}>
                <Header />
                <section className="container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="details/:artId" element={<Details />} />
                        {/* <Route path="/logout" render={(props) => {
                        console.log('Log out!!');
                        return <Redirect to="/" />
                    }} /> */}
                    </Routes>
                </section>
            </UserContext.Provider>
        </>

    );
}

export default App;
