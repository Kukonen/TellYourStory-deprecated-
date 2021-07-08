import React from 'react';
import './ProfilePage.scss'
import {observer} from "mobx-react-lite";
import EnText from "../../TextData/En/profile.json";
import RuText from "../../TextData/Ru/profile.json";
import language from "../../Store/LanguageState";
import user from '../../Store/UserState'
import profile from '../../Store/ProfileState'
import {useState} from "react";

import ChangePassword from './Settings/ChangePassword'
import ChangeName from './Settings/ChangeName'


const AlreadyLogin = observer(() => {

    let text = {}
    language.language === "en" ?
        text = EnText :
        text = RuText;

    const [mode, setMode] = useState("favorite")

    let bar = null

    if (profile.barMode === "content")
        bar = [
            <div className="Profile-already-login-bar-link">{text.alreadyLogin.barContent.favorite}</div>,
            <div className="Profile-already-login-bar-link">{text.alreadyLogin.barContent.ownStory}</div>,
            <div className="Profile-already-login-bar-link">{text.alreadyLogin.barContent.favorite}</div>
        ]
    if (profile.barMode === "settings")
        bar = [
            <div className="Profile-already-login-bar-link"
                 onClick={() => setMode("changeName")}
            >{text.alreadyLogin.barSettings.changeName}</div>,
            <div className="Profile-already-login-bar-link"
                onClick={() => setMode("changePassword")}
            >{text.alreadyLogin.barSettings.changePassword}</div>
        ]

    return (
        <div className="Profile-already-login-block">
            <div className="Profile-already-login-header-section">
                <img className="Profile-already-login-header-avatar" src={
                    user.avatar === undefined ?
                        "http://localhost:3030/avatars/default.svg" :
                        "http://localhost:3030/avatars/" + user.avatar
                } alt="avatar"
                onClick={() => profile.changeBarMode("content")}
                />
                <div className="Profile-already-login-header-block"
                     onClick={() => profile.changeBarMode("content")}
                >
                    {user.name}
                </div>
                <div className="Profile-already-login-header-block"
                     onClick={() => profile.changeBarMode("settings")}
                >
                    {text.alreadyLogin.settings}
                </div>
            </div>
            <div className="Profile-already-login-main-section">
                <div className="Profile-already-login-main-section-bar">
                    {bar}
                </div>

                <div className="Profile-already-login-main-section-content">
                    <div className="Profile-already-login-settings-block">
                        {
                            mode === "changeName" ?
                                <ChangeName /> :
                                mode === "changePassword" ?
                                    <ChangePassword /> :
                                    null

                        }
                    </div>
                </div>
            </div>
        </div>
    )
});

export default AlreadyLogin;