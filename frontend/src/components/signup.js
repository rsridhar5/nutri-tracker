import React, { Component, useState } from 'react';
import axios from "axios"
import "./styles.css"

let BASE_URL = "http://localhost:5000/api/v1/users"

const Signup = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = () => {
        const user = {
            username,
            password
        }
        axios
            .post(BASE_URL + "/add", user)
            .then(() => { console.log("User added!") })
            .catch((e) => console.error(e))
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                <a className="navbar-brand" href="/">Home</a>
                <a className="navbar-brand" href="/login">Login</a>
                <a className="navbar-brand" href="/signup">Sign Up</a>
            </nav>
            <body className="login-page">
                <h1>Nutri-Tracker</h1>
                <input
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    name="username" />
                <input
                    placeholder="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)} />
                <button
                    className="login-button"
                    onClick={handleSignup}>
                    Sign Up
                </button>
            </body>
        </div >
    )

}

export default Signup;

