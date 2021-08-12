import React from 'react';
import './Header.scss'
import {observer} from "mobx-react-lite";
import user from "../../Store/UserState"
import enFlag from './flags/en.svg'
import ruFlag from './flags/ru.svg'

const Header = observer(() => {

    const localization = user.text

    return (
        <div className="Header">
            <div className="Header-section-Headline">
                <a className="Header-headline" href="/">
                    TellYourStory
                </a>

            </div>
            <div className="Header-section-Main">
                <div className="Header-main-link-block">
                    <a className="Header-main-link" href="/list">
                        {localization.header.allStories}
                    </a>
                </div>
                <div className="Header-main-link-block">
                    <a className="Header-main-link" href="/create">
                        {localization.header.createYourStory}
                    </a>
                </div>
                <div className="Header-main-link-block">
                    <a className="Header-main-link" href="/questions">
                        {localization.header.questions}
                    </a>
                </div>
                <div className="Header-main-link-block">
                    <a className="Header-main-link" href="/contact">
                        {localization.header.contactUs}
                    </a>
                </div>
            </div>
            <div className="Header-section-Profile">
                {
                    user.isLogged === "no" ?
                        <div className="Header-profile-section-not-login">
                            <div className="Header-profile-block">
                                <a href="/login" className="Header-profile-link">{localization.header.login}</a>
                            </div>
                            <div className="Header-profile-block">
                                <a href="/register" className="Header-profile-link">{localization.header.register}</a>
                            </div>
                        </div> :
                    user.isLogged === "yes" ?
                        <div className="Header-profile-section-login">
                            <div className="Header-profile-avatar-block">
                                <img src={
                                    user.avatar === undefined ?
                                        "http://localhost:8080/avatars/default.svg" :
                                        "http://localhost:8080/avatars/" + user.avatar
                                } alt={user.name} className="Header-profile-avatar"
                                onClick={() => window.location.href = "/profile"}
                                />
                            </div>
                            <div className="Header-profile-links-block">
                                <div className="Header-profile-block">
                                    <a href="/profile" className="Header-profile-link">{localization.header.profile}</a>
                                </div>
                                <div className="Header-profile-block">
                                    <a href="/" className="Header-profile-link"
                                    onClick={() => user.logout()}
                                    >{localization.header.logout}</a>
                                </div>
                            </div>
                        </div> :
                        <div className="Header-profile-section-no-information" />
                }
                <div className="Header-flags-block" >
                    <img src={enFlag} alt="en" className="Header-flag" onClick={() => user.changeLanguage("en")}/>
                    <img src={ruFlag} alt="ru" className="Header-flag" onClick={() => user.changeLanguage("ru")}/>
                </div>
            </div>
        </div>
    )
});

export default Header;