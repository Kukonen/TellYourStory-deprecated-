import React from 'react';

import {observer} from "mobx-react-lite";
import {configure} from "mobx";
import {useState} from "react";
import auth from "../../Store/AuthState";


const RegisterPage = observer(() => {

    configure({
        enforceActions: "never",
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')

    const [passwordMatches, setPasswordMatches] = useState(true)

    return (
        <div className="Auth-section">
            <div className="Headline-block">Register</div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    name
                </div>
                <div className="Auth-input-block">
                    <input className="Auth-input" type="text" onChange={value => {
                        setName(value.target.value)
                        auth.registerERROR = false
                    }}/>
                </div>
            </div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    email
                </div>
                <div className="Auth-input-block">
                    <input className="Auth-input" type="text" onChange={value => {
                        setEmail(value.target.value)
                        auth.registerERROR = false
                    }}/>
                </div>
            </div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    password
                </div>
                <div className="Auth-input-block">
                    <input className="Auth-input" type="password" onChange={value => {
                        setPassword(value.target.value)
                        auth.registerERROR = false
                    }}/>
                </div>
            </div>
            <div className="Auth-block">
                <div className="Auth-text-block">
                    password
                </div>
                <div className="Auth-input-block">
                    <input className={passwordMatches ? "Auth-input" : "Auth-input Auth-input-error"} type="password"
                        onChange={value => {
                            setPasswordAgain(value.target.value)
                            setPasswordMatches(true)
                            auth.registerERROR = false
                        }}
                        onBlur={() => {
                            if (password !== passwordAgain) {
                                setPasswordMatches(false)
                            }
                        }}
                    />
                    <div className={passwordMatches ? "Auth-input-error-block" : "Auth-input-error-block Auth-input-error-block-active"}>
                        passwords are not the same
                    </div>
                </div>
            </div>
            <div>
                <div className={!auth.registerERROR ? "Auth-ERROR-block" : "Auth-ERROR-block Auth-ERROR-block-active"}>
                    something went wrong
                </div>
            </div>

            <button className="Auth-button" onClick={() => {
                if (passwordMatches)
                    auth.register(name, email, password)
            }}>register</button>
        </div>
    )
});

export default RegisterPage;