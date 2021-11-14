
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
                <section>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quos illum nulla deserunt sequi, at nesciunt, saepe harum libero quisquam neque sint suscipit quam quae officia eaque maxime obcaecati eius!</p>
                </section>
            </section>
        </>

    );
}

export default App;
