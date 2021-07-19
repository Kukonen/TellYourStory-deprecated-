import React from 'react';
import './LoginPage.scss'
import {observer} from "mobx-react-lite";

const LoginPage = observer(() => {
    return (
        <div className="Auth-section">
            <h1>Login</h1>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    email
                </div>
                <div className="Auth-input-block">
                    <input className="Auth-input" type="text"/>
                </div>
            </div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    password
                </div>
                <div className="Auth-input-block">
                    <input className="Auth-input" type="password"/>
                </div>
            </div>
            <button className="Auth-button">login</button>
        </div>
    )
});

export default LoginPage;