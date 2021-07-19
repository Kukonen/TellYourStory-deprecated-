import React from 'react';
import './Header.scss'
import {observer} from "mobx-react-lite";
import user from "../../Store/UserState"
import enFlag from './flags/en.svg'
import ruFlag from './flags/ru.svg'


const Header = observer(() => {
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
                        All Stories
                    </a>
                </div>
                <div className="Header-main-link-block">
                    <a className="Header-main-link" href="/create">
                        Create your story
                    </a>
                </div>
                <div className="Header-main-link-block">
                    <a className="Header-main-link" href="/question">
                        Questions
                    </a>
                </div>
                <div className="Header-main-link-block">
                    <a className="Header-main-link" href="/contact">
                        Contact us
                    </a>
                </div>
            </div>
            <div className="Header-section-Profile">
                {
                    user.isLogged === "no" ?
                        <div className="Header-profile-section">
                            <div className="Header-profile-block">
                                <a href="/login" className="Header-profile-link">login</a>
                            </div>
                            <div className="Header-profile-block">
                                <a href="/register" className="Header-profile-link">register</a>
                            </div>
                        </div> :
                    user.isLogged === "yes" ?
                        <div className="Header-profile-section">
                            <div className="Header-profile-block">
                                <a href="/login" className="Header-profile-link">profile</a>
                            </div>
                            <div className="Header-profile-block">
                                <a href="/register" className="Header-profile-link">logout</a>
                            </div>
                        </div> :
                        <div className="Header-profile-section" />
                }
                <div className="Header-flags-block" >
                    <img src={enFlag} alt="en" className="Header-flag"/>
                    <img src={ruFlag} alt="ru" className="Header-flag"/>
                </div>
            </div>
        </div>
    )
});

export default Header;