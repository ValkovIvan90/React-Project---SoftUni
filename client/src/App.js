
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Catalog from './components/Catalog';

import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import Create from './components/Create/Create';
import Details from './components/Details/Details';



function App() {


    return (
        <>
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
        </>

    );
}

export default App;
