import React from 'react';
import './LoginPage.scss'
import {observer} from "mobx-react-lite";
import {useState} from "react";
import auth from '../../Store/AuthState'
import { configure } from "mobx"

const LoginPage = observer(() => {

    configure({
        enforceActions: "never",
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const ERRORstyle = "Auth-ERROR-block"
    const ERRORstyleActive = "Auth-ERROR-block Auth-ERROR-block-active"

    return (
        <div className="Auth-section">
            <div className="Headline-block">Login</div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    email
                </div>
                <div className="Auth-input-block">
                    <input className="Auth-input" type="text" onChange={email => {
                        auth.loginERROR = false
                        setEmail(email.target.value)
                    }}/>
                </div>
            </div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    password
                </div>
                <div className="Auth-input-block">
                    <input className="Auth-input" type="password" onChange={password => {
                        auth.loginERROR = false
                        setPassword(password.target.value)
                    }}/>
                </div>
            </div>
            <div>
                <div className={!auth.loginERROR ? ERRORstyle : ERRORstyleActive}>something went wrong</div>
            </div>

            <button className="Auth-button" onClick={() => auth.login(email, password) }>login</button>
        </div>
    )
});

export default LoginPage;