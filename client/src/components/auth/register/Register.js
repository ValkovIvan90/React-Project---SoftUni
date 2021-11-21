import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Notification from '../../Notification/Notification';
import { notMatchPassword } from '../../../services/errorHandling';

import './Register.css';
import { register } from '../../../services/user';
import { errors } from '../../../services/errorHandling'

export default function Register() {

    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirm = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        notMatchPassword(passwordRef.current.value, passwordConfirm.current.value);
        try {
            await register(
                userRef.current.value,
                emailRef.current.value,
                passwordRef.current.value,
                passwordConfirm.current.value
            )

        } catch (err) {
            console.log(err.message);
        }
        navigate.push('/');
    }

    return (
        <section className="register">
            <div className="register-box">
                <h1 className="register-box-title">Register</h1>
                <p className="register-untertitle">Please fill in this form to create an account.</p>
                {error.length > 0 ? <Notification key={1} error={errors} /> : ''}
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
