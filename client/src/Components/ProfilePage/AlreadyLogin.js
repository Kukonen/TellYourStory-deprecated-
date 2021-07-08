import React from 'react';
import './ProfilePage.scss'
import {observer} from "mobx-react-lite";
import EnText from "../../TextData/En/profile.json";
import RuText from "../../TextData/Ru/profile.json";
import language from "../../Store/LanguageStore";
import user from '../../Store/UserState'
import profile from '../../Store/ProfileStore'

const AlreadyLogin = observer(() => {

    let text = {}
    language.language === "en" ?
        text = EnText :
        text = RuText;

    let bar = null

    if (profile.barMode === "content")
        bar = [
            text.alreadyLogin.barContent.favorite,
            text.alreadyLogin.barContent.ownStory,
            text.alreadyLogin.barContent.favorite
        ].map(text => <div className="Profile-already-login-bar-link">
            {text}
        </div>)
    if (profile.barMode === "settings")
        bar = [
            text.alreadyLogin.barSettings.changeName,
            text.alreadyLogin.barSettings.changePassword
        ].map(text => <div className="Profile-already-login-bar-link">
            {text}
        </div>)



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

                </div>
            </div>
        </div>
    )
});

export default AlreadyLogin;