import React from 'react';

import './Header.scss';

import RuText from '../../TextData/Ru/header.json';
import EnText from '../../TextData/En/header.json';
import {observer} from "mobx-react-lite";
import language from '../../Store/LanguageStore';
import user from '../../Store/UserState';

import ruIcon from './language-img/ru.svg'
import enIcon from './language-img/en.svg'

const Header = observer(() => {

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
                    <div className="Header-right-block">
                        <div>
                            You are logged
                        </div>
                    </div> :
                    user.isLogged === "no" ?
                    <div className="Header-right-block">
                        <div className="Header-register-block">
                            <a href="/login" className="Header-register-link">{text.login}</a>
                        </div>
                        <div className="Header-register-block">
                            <a href="/register" className="Header-register-link">{text.register}</a>
                        </div>
                    </div> :
                    <div>

                    </div>
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