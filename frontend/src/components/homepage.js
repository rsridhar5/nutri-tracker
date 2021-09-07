import React, { Component } from 'react';
import "./styles.css"

class Homepage extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                    <a class="navbar-brand" href="/">Home</a>
                    <a class="navbar-brand" href="/login">Login</a>
                    <a class="navbar-brand" href="/signup">Sign Up</a>
                </nav>
                <body className="home-page">
                    <h1>Homepage!</h1>
                </body>

            </div>
        )
    }
}

export default Homepage