import React from 'react';
import {useState} from "react";
import {observer} from "mobx-react-lite";
import language from "../../../Store/LanguageState";
import EnText from "../../../TextData/En/profile.json";
import RuText from "../../../TextData/Ru/profile.json";
import profile from '../../../Store/ProfileState';

const changeName = observer(() => {
    let text = {}
    language.language === "en" ?
        text = EnText :
        text = RuText;

    const [name, setName] = useState('')

    const textBlockStyle = "Profile-already-login-content-settings-text-block"
    const textBlockStyleActive = "Profile-already-login-content-settings-text-block Profile-already-login-content-settings-text-block-active"
    const inputStyle = "Profile-already-login-content-settings-input"
    const inputStyleActive = "Profile-already-login-content-settings-input Profile-already-login-content-settings-input-active"
    const errorStyle = "Profile-already-login-settings-error"
    const errorStyleActive = "Profile-already-login-settings-error Profile-already-login-settings-error-active"
    const successStyle = "Profile-already-login-settings-success"
    const successStyleActive = "Profile-already-login-settings-success Profile-already-login-settings-success-active"

    let nameTextRef = React.createRef();
    let nameInputRef = React.createRef();

    return (
        <div className="Profile-already-login-content-settings-section">
            <h1>{text.alreadyLogin.changeName.title}</h1>
            <div className="Profile-already-login-content-settings-block">
                <div className={textBlockStyle}
                     ref={nameTextRef}
                >{text.alreadyLogin.changeName.newName}
                </div>
                <div className="Profile-already-login-content-settings-input-block">
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
                                   profile.changeNameERROR = false
                                   profile.changeNameSuccess = false
                                   setName(value.target.value)
                               }
                           }
                    />
                </div>

            </div>
            <div className={ profile.changeNameERROR ? errorStyleActive : errorStyle}>
                {text.alreadyLogin.changeName.error}
            </div>
            <div className={ profile.changeNameSuccess ? successStyleActive : successStyle}>
                {text.alreadyLogin.changeName.success}
            </div>
            <button className="Profile-already-login-settings-send-button"
                onClick={() => profile.changeName(name)}
            >{text.alreadyLogin.changeName.send}</button>
        </div>
    )
});

export default changeName;