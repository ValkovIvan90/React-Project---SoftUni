import React, { Suspense } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/UserDataContext';
import { ArticleProvider } from './context/ArticleContext';

const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));

const HomePage = React.lazy(() => import('./components/HomePage'));
const Catalog = React.lazy(() => import('./components/catalog/Catalog'));

const Login = React.lazy(() => import('./components/auth/Login'));
const Register = React.lazy(() => import('./components/auth/Register'));

const Create = React.lazy(() => import('./components/Create'));
const Details = React.lazy(() => import('./components/Details'));
const Edit = React.lazy(() => import('./components/Edit'));

const UserProfile = React.lazy(() => import('./components/UserProfile'));
const Messages = React.lazy(() => import('./components/UserProfile/Messages/Messages'));
const Discussion = React.lazy(() => import('./components/UserProfile/Messages/MessageCard/Discussion'));

const AuthRoute = React.lazy(() => import('./components/Guards/AuthRoute'));
const IsOwner = React.lazy(() => import('./components/Guards/IsOwner'));

const NotFoundPage = React.lazy(() => import('./components/NotFoundPage'));

function App() {
    return (
        <>
            <Suspense fallback>
                <AuthProvider>
                    <ArticleProvider>
                        <Header />
                        <section className="container">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/catalog" element={<Catalog />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="details/:artId" element={<Details />} />
                                <Route element={<AuthRoute />}>
                                    <Route path="/create" element={<Create />} />
                                    <Route path="/profile" element={<UserProfile />} />
                                    <Route path="/messages/:userId" element={<Messages />} />
                                    <Route path="/messages/:userId/:artId/:senderId" element={<Discussion />} />
                                    <Route element={<IsOwner />}>
                                        <Route path="/edit/:artId" element={<Edit />} />
                                    </Route>
                                </Route>
                                <Route path="*" element={<NotFoundPage />} />
                            </Routes>
                        </section>
                        <Footer />
                    </ArticleProvider>
                </AuthProvider>
            </Suspense>
        </>

    );
}

export default App;
