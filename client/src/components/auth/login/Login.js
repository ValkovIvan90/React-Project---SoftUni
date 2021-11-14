
import './Login.css'

import React from 'react'

export default function Login() {
    return (
        <section className="login">
            <div className="login-box">
                <h1>Login</h1>
                <p className="login-untertitle">Please enter your email and password.</p>
                <form className="login-form" action="#" method="post">
                    <label htmlFor="email">Email</label>
                    <input placeholder="Enter Email" name="email" type="email" />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                    />
                    <input type="submit" className="loginBtn" value="Login" />
                </form>
                <div className="signup">
                    <p>Dont have an account? <a href="/register">Sign up</a>.</p>
                </div>
            </div>
        </section>
    )
}
