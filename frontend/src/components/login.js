import React, { Component } from 'react';
import "./styles.css"

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin() {

    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                    <a class="navbar-brand" href="/">Home</a>
                    <a class="navbar-brand" href="/login">Login</a>
                    <a class="navbar-brand" href="/signup">Sign Up</a>
                </nav>
                <body className="login-page">
                    <h1>Nutri-Tracker</h1>
                    <input placeholder="username"></input>
                    <input placeholder="password"></input>
                    <button className="login-button">Login</button>
                </body>
            </div>
        )
    }
}

export default Login