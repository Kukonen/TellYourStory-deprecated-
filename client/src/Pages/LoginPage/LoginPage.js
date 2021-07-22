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
    const [noEmailInformationError, setNoEmailInformationError] = useState(false)
    const [noPasswordInformationError, setNoPasswordInformationError] = useState(false)

    const errorStyle = "Auth-ERROR-block"
    const errorStyleActive = "Auth-ERROR-block Auth-ERROR-block-active"

    const errorInputStyle = "Auth-input"
    const errorInputStyleActive = "Auth-input Auth-input-error"

    return (
        <div className="Auth-section">
            <div className="Headline-block">Login</div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    email
                </div>
                <div className="Auth-input-block">
                    <input className={noEmailInformationError || auth.loginERROR ? errorInputStyleActive : errorInputStyle} type="text" onChange={email => {
                        auth.loginERROR = false
                        setEmail(email.target.value)
                        setNoEmailInformationError(false)
                    }}
                    placeholder={noEmailInformationError ? "write email" : "" }
                    />
                </div>
            </div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    password
                </div>
                <div className="Auth-input-block">
                    <input className={noPasswordInformationError || auth.loginERROR ? errorInputStyleActive : errorInputStyle} type="password" onChange={password => {
                        auth.loginERROR = false
                        setPassword(password.target.value)
                        setNoPasswordInformationError(false)
                    }}
                    placeholder={noPasswordInformationError ? "write password" : "" }
                    />
                </div>
            </div>
            <div className="Auth-error-section">
                <div className={!auth.loginERROR ? errorStyle : errorStyleActive}>something went wrong</div>
            </div>
            <div className="Auth-button-section">
                <button className="Auth-button" onClick={() => {
                    if (email !== '' && password !== '') {
                        auth.login(email, password)
                    }
                    else if (email === '') {
                        setNoEmailInformationError(true)
                    } else if (password === '') {
                        setNoPasswordInformationError(true)
                    }
                } }>login</button>
            </div>

        </div>
    )
});

export default LoginPage;