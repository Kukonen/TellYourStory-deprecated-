import React from 'react';
import './ProfilePage.scss'
import {observer} from "mobx-react-lite";
import EnText from "../../TextData/En/profile.json";
import RuText from "../../TextData/Ru/profile.json";
import language from "../../Store/LanguageStore";

const AlreadyLogin = observer(() => {

    let text = {}
    language.language === "en" ?
        text = EnText :
        text = RuText;

    return (
        <div className="Profile-already-login-block">

        </div>
    )
});

export default AlreadyLogin;