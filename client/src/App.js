
import './App.css';
import HomePage from './components/Home/HomePage';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import Details from './components/Details/Details';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';


function App() {
    return (
        <>
            <Header />
            <section className="container">
                <HomePage />
                <Catalog />
                <Login />
                <Register />
                <Details />
                <Create />
                <Edit />
            </section>
        </>

    );
}

export default App;
