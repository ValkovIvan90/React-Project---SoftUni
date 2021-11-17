
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import Catalog from './components/Catalog/Catalog';

import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import Create from './components/Create/Create';


function App() {


    return (
        <>
            <Header />
            <section className="container">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/catalog" component={Catalog} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/create" component={Create} />
                </Switch>
            </section>
        </>

    );
}

export default App;
