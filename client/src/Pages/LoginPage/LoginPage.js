import React from 'react';
import './LoginPage.scss'
import {observer} from "mobx-react-lite";

const LoginPage = observer(() => {
    return (
        <div className="Auth-section">
            <h1>Login</h1>
            <div className="Auth-block">
                email
                <input className="Auth-input" type="text"/>
            </div>
            <div>
                password
                <input className="Auth-input" type="password"/>
            </div>
            <button className="Auth-button">login</button>
        </div>
    )
});

export default LoginPage;