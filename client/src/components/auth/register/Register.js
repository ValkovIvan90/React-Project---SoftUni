import React from 'react'
import './Register.css'


import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <section className="register">
            <div className="register-box">
                <h1>Register</h1>
                <p className="register-untertitle">Please fill in this form to create an account.</p>
                <form className="register-form">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                    />

                    <label htmlFor="repeatPassword">Confirm your password</label>
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        name="repeatPass"
                        required
                    />
                    <input type="submit" className="registerbtn" value="Register" />
                </form>
                <div className="signin">
                    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
                </div>
            </div>
        </section>
    )
}
