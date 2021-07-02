import React from 'react';
import './LoginPage.scss'
import {observer} from "mobx-react-lite";
import user from "../../Store/UserState";
import language from "../../Store/LanguageStore";
import EnText from "../../TextData/En/login-register.json";
import RuText from "../../TextData/Ru/login-register.json";

const LoginPage = observer(() => {

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

    let loginTextRef = React.createRef();
    let loginInputRef = React.createRef();
    let passwordTextRef = React.createRef();
    let passwordInputRef = React.createRef();
    let rememberTextRef = React.createRef();
    let rememberInputRef = React.createRef();

    return (
        <div className="AuthPage">
            <h1>{text.login}</h1>
            <div className="Auth-section">
                <div className="Auth-block">
                    <div className={textBlockStyle}
                         ref={loginTextRef}
                    >{text.email}
                    </div>
                    <div className="Auth-input-block">
                        <input type="text" className={inputStyle}
                               ref={loginInputRef}
                               onFocus={
                                   e => {
                                       loginTextRef.current.className = textBlockStyleActive
                                       e.target.className = inputStyleActive
                                   }
                               }
                               onBlur={
                                   e => {
                                       loginTextRef.current.className = textBlockStyle
                                       e.target.className = inputStyle
                                   }
                               }
                               onChange={
                                   value => {
                                       user.loginERROR = false
                                       user.loginChangeLogin(value.target.value)
                                   }
                               }
                        />
                    </div>
                </div>
                <div className="Auth-block">
                    <div className={textBlockStyle}
                         ref={passwordTextRef}
                    >
                        {text.password}
                    </div>
                    <div className="Auth-input-block">
                        <input type="password" className={inputStyle}
                               ref={passwordInputRef}
                               onFocus={
                                   e => {
                                       passwordTextRef.current.className = textBlockStyleActive
                                       e.target.className = inputStyleActive
                                   }

                               }
                               onBlur={
                                   e => {
                                       passwordTextRef.current.className = textBlockStyle
                                       e.target.className = inputStyle
                                   }
                               }
                               onChange={
                                   value => {
                                       user.loginERROR = false
                                       user.loginChangePassword(value.target.value)
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
                                   user.loginChangeRemember(remember)
                               }
                               }
                        />
                    </div>
                </div>
                <div className={ user.loginERROR ? errorStyleActive : errorStyle}>
                    {text.error}
                </div>
            </div>
            <button type="button" className="Auth-button" onClick={() => user.login()}>
                {text.send}
            </button>

        </div>
    )
});

export default LoginPage;