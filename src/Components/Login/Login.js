import React, { Component } from 'react';

import "./Login.css"


class Login extends Component {
    render() {
        return (

            <div className="Wrapper">
                <form className="loginForm">
                    <h1>Login</h1>
                    <div className="eachDiv">
                        <label className="labelWrapper">Email:</label>
                        <input className="inputsWrapper" type="text"/>
                    </div>
                    <div className="eachDiv">
                        <label className="labelWrapper">Password:</label>
                        <input className="inputsWrapper" type="text"/>
                    </div>

                    <input className="submitButton" type="submit" />
                </form>


            </div>
        );
    }
}

export default Login;