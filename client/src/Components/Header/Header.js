import React from 'react';

import './Header.scss';

import RuText from '../../TextData/Ru/header.json';
import EnText from '../../TextData/En/header.json';
import {observer} from "mobx-react-lite";
import { configure } from "mobx"
import language from '../../Store/LanguageStore';
import user from '../../Store/UserState';

import ruIcon from './language-img/ru.svg'
import enIcon from './language-img/en.svg'

const Header = observer(() => {

    configure({
        enforceActions: "never",
    })

    let text = {}
    language.language === "en" ?
        text = EnText :
        text = RuText;

    user.getUserData().then()

    return (
        <div>
            <div className="Header-block">
                <div className="Header-section">
                    <a href="/" className="Header-headline">TellYourStory</a>
                </div>
                <div className="Header-section Header-center-section">
                    <div className="Header-center-block">
                        <a href="/catalog" className="Header-link">{text.catalog}</a>
                    </div>
                    <div className="Header-center-block">
                        <a href="/questions" className="Header-link">{text.questions}</a>
                    </div>
                </div>
                <div className="Header-section Header-right-section">
                {user.isLogged === "yes" ?
                    <div className="Header-right-block-yes-register">
                                <img className="Header-right-block-avatar" src={
                                    user.avatar === undefined ?
                                        "http://localhost:3030/avatars/default.svg" :
                                        "http://localhost:3030/avatars/" + user.avatar
                                } alt="avatar"/>
                            <div className="Header-right-block-profile">
                                <div className="Header-right-block-profile-link">
                                    <div className="Header-right-block-profile-link-block">
                                        <a href="profile">
                                            {text.profile}
                                        </a>
                                    </div>

                                </div>
                                <div className="Header-right-block-profile-link">
                                    <div className="Header-right-block-profile-link-block">
                                        <a href="/" onClick={() => user.logout()}>
                                            {text.logout}
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div> :
                    user.isLogged === "no" ?
                    <div className="Header-right-block-no-register">
                        <div className="Header-register-block">
                            <a href="/login" className="Header-register-link">{text.login}</a>
                        </div>
                        <div className="Header-register-block">
                            <a href="/register" className="Header-register-link">{text.register}</a>
                        </div>
                    </div> :
                    <div />
                }

                    <div className="Header-right-block Header-language-block">
                        <img className="Header-language-icon" src={enIcon} alt="en" onClick={() => language.changeLanguage("en")}/>
                        <img className="Header-language-icon" src={ruIcon} alt="ru" onClick={() => language.changeLanguage("ru")}/>
                    </div>
                </div>

            </div>
        </div>
    )
});

export default Header;