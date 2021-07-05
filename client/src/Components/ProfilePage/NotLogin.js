import React from 'react';
import './ProfilePage.scss'
import {observer} from "mobx-react-lite";
import EnText from "../../TextData/En/profile.json";
import RuText from "../../TextData/Ru/profile.json";
import language from "../../Store/LanguageStore";

const NotLogin = observer(() => {

    let text = {}
    language.language === "en" ?
        text = EnText :
        text = RuText;

    return (
        <div className="Profile-not-login-block">
            <div className="Profile-not-login-headline">
                {text.notLogin.headline}
            </div>
            <div className="Profile-not-login-button-section">
                <button className="Profile-not-login-button" onClick={() => window.location.href = "/login"}>
                    {text.notLogin.login}
                </button>
                <button className="Profile-not-login-button" onClick={() => window.location.href = "/"}>
                    {text.notLogin.home}
                </button>
            </div>
        </div>
    )
});

export default NotLogin;