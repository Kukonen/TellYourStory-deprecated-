import React from 'react';
import user from '../../Store/UserState'
import {observer} from "mobx-react-lite";

import './ProfilePage.scss'
import language from "../../Store/LanguageStore";
import EnText from "../../TextData/En/profile.json";
import RuText from "../../TextData/Ru/profile.json";

const ProfilePage = observer(() => {

    let text = {}
    language.language === "en" ?
        text = EnText :
        text = RuText;

    user.getUserData().then()

    return (
        <div>
            {
                user.isLogged === "yes" ?
                    <div>
                        You are login!
                    </div> :
                user.isLogged === "no" ?
                    // :
                    <div className="Profile-not-login-block">
                        <div className="Profile-not-login-headline">
                            {text["not-login-headline"]}
                        </div>
                        <div className="Profile-not-login-button-section">
                            <button className="Profile-not-login-button" onClick={() => window.location.href = "/login"}>
                                {text["not-login-login"]}
                            </button>
                            <button className="Profile-not-login-button" onClick={() => window.location.href = "/"}>
                                {text["not-login-home"]}
                            </button>
                        </div>
                    </div>
                :
                <div />
            }
        </div>
    )
});

export default ProfilePage;