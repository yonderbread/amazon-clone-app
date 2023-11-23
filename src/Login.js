import React from "react"
import { Link } from "react-router-dom"
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <Link>
                <img
                    className="login-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon logo"
                ></img>
            </Link>
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email"></input>
                    <h5>Password</h5>
                    <input type="password"></input>
                    <button className="login-btnSignIn" type="submit">
                        Sign In
                    </button>
                </form>
                <p className="login-termsNotice">
                    By signing in, you agree to the terms and conditions.
                </p>
                <button className="login-btnRegister">
                    Create new Account
                </button>
            </div>
        </div>
    )
}

export default Login
