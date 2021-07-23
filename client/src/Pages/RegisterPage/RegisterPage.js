import React from 'react';

import {observer} from "mobx-react-lite";
import {configure} from "mobx";
import {useState} from "react";
import auth from "../../Store/AuthState";
import user from "../../Store/UserState"

const RegisterPage = observer(() => {

    configure({
        enforceActions: "never",
    })

    const localization = user.text

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')

    const [noNameError, setNoNameError] = useState(false)
    const [noEmailError, setNoEmailError] = useState(false)
    const [noPasswordError, setNoPasswordError] = useState(false)
    const [noAgainPasswordError, setNoAgainPasswordError] = useState(false)

    const [passwordMatches, setPasswordMatches] = useState(null)

    const InputStyle = "Auth-input"
    const errorInputStyleActive = "Auth-input Auth-input-error"
    const successInputStyleActive = "Auth-input Auth-input-success"

    return (
        <div className="Auth-section">
            <div className="Headline-block">{localization.auth.register.headline}</div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    {localization.auth.register.name}
                </div>
                <div className="Auth-input-block">
                    <input className={noNameError || auth.registerERROR ? errorInputStyleActive : InputStyle} type="text" onChange={value => {
                        setName(value.target.value)
                        auth.registerERROR = false
                        setNoNameError(false)
                    }}
                    placeholder={noNameError ? localization.auth.register.nameError : ""}
                           value={name}
                    />
                </div>
            </div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    {localization.auth.register.email}
                </div>
                <div className="Auth-input-block">
                    <input className={noEmailError || auth.registerERROR ? errorInputStyleActive : InputStyle} type="text" onChange={value => {
                        setEmail(value.target.value)
                        auth.registerERROR = false
                        setNoEmailError(false)
                    }}
                    placeholder={noEmailError ? localization.auth.register.emailError : ""}
                           value={email}
                    />
                </div>
            </div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    {localization.auth.register.password}
                </div>
                <div className="Auth-input-block">
                    <input className={noPasswordError || auth.registerERROR ? errorInputStyleActive : InputStyle} type="password" onChange={value => {
                        setPassword(value.target.value)
                        auth.registerERROR = false
                        setNoPasswordError(false)
                    }}
                    placeholder={noPasswordError ? localization.auth.register.passwordError : ""}
                           value={password}
                    />
                </div>
            </div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    {localization.auth.register.password}
                </div>
                <div className="Auth-input-block">
                    <input className={passwordMatches === "yes" ? successInputStyleActive : noAgainPasswordError || auth.registerERROR || passwordMatches === "no" ? errorInputStyleActive : InputStyle} type="password"
                        onChange={value => {
                            setPasswordAgain(value.target.value)
                            setPasswordMatches(null)
                            setNoAgainPasswordError(false)
                            auth.registerERROR = false
                        }}
                        onBlur={() => {
                            if (password !== passwordAgain) {
                                setPasswordMatches("no")
                            } else if (password !== ''){
                                setPasswordMatches("yes")
                            }
                        }}
                        placeholder={noAgainPasswordError ? localization.auth.register.againPasswordError : passwordMatches === "no" ? localization.auth.register.passwordSameError : ""}
                           value={passwordAgain}
                    />
                </div>
            </div>
            <div className="Auth-error-section">
                <div className={!auth.registerERROR ? "Auth-ERROR-block" : "Auth-ERROR-block Auth-ERROR-block-active"}>
                    {localization.auth.register.error}
                </div>
            </div>
            <div className="Auth-button-section">
                <button className="Auth-button" onClick={() => {
                    if (passwordMatches === "yes" && name !== '' && email !== '' && password !== '' && passwordAgain !== '' && email.indexOf('@') !== -1) {
                        auth.register(name, email, password)
                        setNoNameError(false)
                        setNoEmailError(false)
                        setNoPasswordError(false)
                        setNoAgainPasswordError(false)
                    }
                    else if (name === ''){
                        setNoNameError(true)
                    }
                    else if (email === '' || email.indexOf('@') === -1) {
                        setNoEmailError(true)
                    }
                    else if (password === '') {
                        setNoPasswordError(true)
                        setNoAgainPasswordError(true)
                    }
                    else if (passwordAgain === '') {
                        setNoAgainPasswordError(true)
                    }
                }}>{localization.auth.register.register}</button>
            </div>
        </div>
    )
});

export default RegisterPage;