
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import Catalog from './components/Catalog/Catalog';

import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import Create from './components/Create/Create';
import Details from './components/Details/Details';



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
                    <Route path="/details/:articleId" component={Details} />
                    <Route path="/logout" render={(props) => {
                        console.log('Log out!!');
                        return <Redirect to="/" />
                    }} />
                </Switch>
            </section>
        </>

    );
}

export default App;
