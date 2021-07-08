import React from 'react';
import {useState} from "react";
import {observer} from "mobx-react-lite";
import language from "../../../Store/LanguageState";
import EnText from "../../../TextData/En/profile.json";
import RuText from "../../../TextData/Ru/profile.json";
import profile from '../../../Store/ProfileState';

const changePassword = observer(() => {
    let text = {}
    language.language === "en" ?
        text = EnText :
        text = RuText;

    const [lastPassword, setLastPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const textBlockStyle = "Profile-already-login-content-settings-text-block"
    const textBlockStyleActive = "Profile-already-login-content-settings-text-block Profile-already-login-content-settings-text-block-active"
    const inputStyle = "Profile-already-login-content-settings-input"
    const inputStyleActive = "Profile-already-login-content-settings-input Profile-already-login-content-settings-input-active"
    const errorStyle = "Profile-already-login-settings-error"
    const errorStyleActive = "Profile-already-login-settings-error Profile-already-login-settings-error-active"
    const successStyle = "Profile-already-login-settings-success"
    const successStyleActive = "Profile-already-login-settings-success Profile-already-login-settings-success-active"


    let lastPasswordTextRef = React.createRef();
    let lastPasswordInputRef = React.createRef();
    let newPasswordTextRef = React.createRef();
    let newPasswordInputRef = React.createRef();

    return (
        <div className="">
            <h1>{text.alreadyLogin.changeName.title}</h1>
            <div className="Profile-already-login-content-settings-block">
                <div className={textBlockStyle}
                     ref={lastPasswordTextRef}
                >{text.alreadyLogin.changePassword.newPassword}
                </div>
                <div className="Profile-already-login-content-settings-input-block">
                    <input type="text" className={inputStyle}
                           ref={lastPasswordInputRef}
                           onFocus={
                               e => {
                                   lastPasswordTextRef.current.className = textBlockStyleActive
                                   e.target.className = inputStyleActive
                               }
                           }
                           onBlur={
                               e => {
                                   lastPasswordTextRef.current.className = textBlockStyle
                                   e.target.className = inputStyle
                               }
                           }
                           onChange={
                               value => {
                                   profile.changePasswordERROR = false
                                   profile.changePasswordSuccess = false
                                   setNewPassword(value.target.value)
                               }
                           }
                    />
                </div>
            </div>
            <div className="Profile-already-login-content-settings-block">
                <div className={textBlockStyle}
                     ref={newPasswordTextRef}
                >{text.alreadyLogin.changePassword.lastPassword}
                </div>
                <div className="Profile-already-login-content-settings-input-block">
                    <input type="text" className={inputStyle}
                           ref={newPasswordInputRef}
                           onFocus={
                               e => {
                                   newPasswordTextRef.current.className = textBlockStyleActive
                                   e.target.className = inputStyleActive
                               }
                           }
                           onBlur={
                               e => {
                                   newPasswordTextRef.current.className = textBlockStyle
                                   e.target.className = inputStyle
                               }
                           }
                           onChange={
                               value => {
                                   profile.changePasswordERROR = false
                                   setLastPassword(value.target.value)
                               }
                           }
                    />
                </div>

            </div>
            <div className={ profile.changePasswordERROR ? errorStyleActive : errorStyle}>
                {text.alreadyLogin.changePassword.error}
            </div>
            <div className={ profile.changePasswordSuccess ? successStyleActive : successStyle}>
                {text.alreadyLogin.changePassword.success}
            </div>
            <button className="Profile-already-login-settings-send-button"
                onClick={() => profile.changePassword(newPassword, lastPassword)}
            >{text.alreadyLogin.changeName.send}</button>
        </div>
    )
});

export default changePassword;