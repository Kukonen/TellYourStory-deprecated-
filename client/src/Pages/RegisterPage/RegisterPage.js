import React from 'react';

import {observer} from "mobx-react-lite";

const RegisterPage = observer(() => {
    return (
        <div className="Auth-section">
            <h1>Register</h1>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    name
                </div>
                <div className="Auth-input-block">
                    <input className="Auth-input" type="text"/>
                </div>
            </div>
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

export default RegisterPage;