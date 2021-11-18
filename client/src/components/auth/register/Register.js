import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Register.css';
import { register } from '../../../services/user'

export default function Register() {

    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirm = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirm.current.value) {
            return setError('Password don`t match!C')
        };
        try {
            setError('');
            setLoading(true);

            await register(
                userRef.current.value,
                emailRef.current.value,
                passwordRef.current.value,
                passwordConfirm.current.value
            );

            history.push('/');
        } catch (err) {
            setError('Failed to create an account!')
        }

        setLoading(false);
    }

    return (
        <section className="register">
            <div className="register-box">
                <h1 className="register-box-title">Register</h1>
                <p className="register-untertitle">Please fill in this form to create an account.</p>
                {<h1>{error}</h1>}
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        ref={userRef}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        ref={emailRef}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        ref={passwordRef}
                        required
                    />

                    <label htmlFor="repeatPassword">Confirm your password</label>
                    <input
                        type="password"
                        placeholder="Repeat password"
                        ref={passwordConfirm}
                        required
                    />
                    <input type="submit" disabled={loading} className="registerbtn" value="Register" />
                </form>
                <div className="signin">
                    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
                </div>
            </div>
        </section>
    )
}
