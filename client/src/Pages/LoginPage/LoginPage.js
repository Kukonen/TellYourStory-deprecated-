import React from 'react';
import './LoginPage.scss'
import {observer} from "mobx-react-lite";
import {useState} from "react";
import auth from '../../Store/AuthState'
import { configure } from "mobx"
import localizationState from "../../Store/LocalizationState";

const LoginPage = observer(() => {

    configure({
        enforceActions: "never",
    })

    const localization = localizationState.text

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
            <div className="Headline-block">{localization.auth.login.headline}</div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    {localization.auth.login.email}
                </div>
                <div className="Auth-input-block">
                    <input className={noEmailInformationError || auth.loginERROR ? errorInputStyleActive : errorInputStyle} type="text" onChange={email => {
                        auth.loginERROR = false
                        setEmail(email.target.value)
                        setNoEmailInformationError(false)
                    }}
                    placeholder={noEmailInformationError ? localization.auth.login.emailError : "" }
                    />
                </div>
            </div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    {localization.auth.login.password}
                </div>
                <div className="Auth-input-block">
                    <input className={noPasswordInformationError || auth.loginERROR ? errorInputStyleActive : errorInputStyle} type="password" onChange={password => {
                        auth.loginERROR = false
                        setPassword(password.target.value)
                        setNoPasswordInformationError(false)
                    }}
                    placeholder={noPasswordInformationError ? localization.auth.login.passwordError : "" }
                    />
                </div>
            </div>
            <div className="Auth-error-section">
                <div className={!auth.loginERROR ? errorStyle : errorStyleActive}>{localization.auth.login.error}</div>
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
                } }>{localization.auth.login.login}</button>
            </div>

        </div>
    )
});

export default LoginPage;