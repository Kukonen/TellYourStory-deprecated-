import React from 'react';

import {observer} from "mobx-react-lite";

import './RegisterPage.scss'
import RuText from '../../TextData/Ru/login-register.json';
import EnText from '../../TextData/En/login-register.json';
import language from "../../Store/LanguageStore";
import user from '../../Store/UserState'

const RegisterPage = observer(() => {

    let text = {}
    language.language === "en" ?
        text = EnText :
        text = RuText;

    const textBlockStyle = "Auth-text-block"
    const textBlockStyleActive = "Auth-text-block Auth-text-block-active"
    const inputStyle = "Auth-input"
    const inputStyleActive = "Auth-input Auth-input-active"
    const checkboxStyle = "Auth-checkbox"
    const checkboxStyleActive = "Auth-checkbox Auth-checkbox-active"
    const errorStyle = "Auth-error"
    const errorStyleActive = "Auth-error Auth-error-active"

    let nameTextRef = React.createRef();
    let nameInputRef = React.createRef();
    let emailTextRef = React.createRef();
    let emailInputRef = React.createRef();
    let passwordOneTextRef = React.createRef();
    let passwordOneInputRef = React.createRef();
    let passwordTwoTextRef = React.createRef();
    let passwordTwoInputRef = React.createRef();
    let rememberTextRef = React.createRef();
    let rememberInputRef = React.createRef();

    return (
        <div className="AuthPage">
            <h1>{text.register}</h1>
            <div className="Auth-section">
                <div className="Auth-block">
                    <div className={textBlockStyle}
                         ref={nameTextRef}
                    >
                        {text.name}
                    </div>
                    <div className="Auth-input-block">
                        <input type="text" className={inputStyle}
                               ref={nameInputRef}
                               onFocus={
                                   e => {
                                       nameTextRef.current.className = textBlockStyleActive
                                       e.target.className = inputStyleActive
                                   }
                               }
                               onBlur={
                                   e => {
                                       nameTextRef.current.className = textBlockStyle
                                       e.target.className = inputStyle
                                   }
                               }
                               onChange={
                                   value => {
                                       user.registerERROR = false
                                       user.registerChangeName(value.target.value)
                                   }
                               }
                        />
                    </div>
                </div>
                <div className="Auth-block">
                    <div className={textBlockStyle}
                         ref={emailTextRef}
                    >
                        {text.email}
                    </div>
                    <div className="Auth-input-block">
                        <input type="text" className={inputStyle}
                               ref={emailInputRef}
                               onFocus={
                                   e => {
                                       emailTextRef.current.className = textBlockStyleActive
                                       e.target.className = inputStyleActive
                                   }

                               }
                               onBlur={
                                   e => {
                                       emailTextRef.current.className = textBlockStyle
                                       e.target.className = inputStyle
                                   }
                               }
                               onChange={
                                   value => {
                                       user.registerERROR = false
                                       user.registerChangeEmail(value.target.value)
                                   }
                               }
                        />
                    </div>
                </div>
                <div className="Auth-block">
                    <div className={textBlockStyle}
                         ref={passwordOneTextRef}
                    >
                        {text.password}
                    </div>
                    <div className="Auth-input-block">
                        <input type="password" className={inputStyle}
                               ref={passwordOneInputRef}
                               onFocus={
                                   e => {
                                       passwordOneTextRef.current.className = textBlockStyleActive
                                       e.target.className = inputStyleActive
                                   }

                               }
                               onBlur={
                                   e => {
                                       passwordOneTextRef.current.className = textBlockStyle
                                       e.target.className = inputStyle
                                   }
                               }
                               onChange={
                                   value => {
                                       user.registerERROR = false
                                       user.registerChangePassword(value.target.value)
                                   }
                               }
                        />
                    </div>
                </div>
                <div className="Auth-block">
                    <div className={textBlockStyle}
                         ref={passwordTwoTextRef}
                    >
                        {text.password}
                    </div>
                    <div className="Auth-input-block">
                        <input type="password" className={inputStyle}
                               ref={passwordTwoInputRef}
                               onFocus={
                                   e => {
                                       passwordTwoTextRef.current.className = textBlockStyleActive
                                       e.target.className = inputStyleActive
                                   }

                               }
                               onBlur={
                                   e => {
                                       passwordTwoTextRef.current.className = textBlockStyle
                                       e.target.className = inputStyle
                                   }
                               }
                               onChange={
                                   value => {
                                       user.registerERROR = false
                                       user.registerChangePasswordAgain(value.target.value)
                                   }
                               }
                        />
                    </div>
                </div>
                <div className="Auth-block">
                    <div className={textBlockStyle}
                        ref={rememberTextRef}
                    >
                        {text.remember}
                    </div>
                    <div className="Auth-input-block">
                        <input type="checkbox" className="Auth-checkbox"
                               ref={rememberInputRef}
                               onChange={e => {
                                        let remember = e.target.checked
                                        if (remember) {
                                            e.target.className = checkboxStyleActive
                                            rememberTextRef.current.className = textBlockStyleActive

                                        }
                                        else {
                                            e.target.className = checkboxStyle
                                            rememberTextRef.current.className = textBlockStyle
                                        }
                                        user.registerChangeRemember(remember)
                                    }
                               }
                        />
                    </div>
                </div>
                <div className={ user.registerERROR ? errorStyleActive : errorStyle}>
                    {text.error}
                </div>
            </div>
            <button type="button" className="Auth-button" onClick={() => user.register()}>
                {text.send}
            </button>

        </div>
    )
});

export default RegisterPage;