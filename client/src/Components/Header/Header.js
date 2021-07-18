import React from 'react';
import './Header.scss'
import {observer} from "mobx-react-lite";

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
                <div className="Header-profile-block">

                </div>
                <div className="Header-flags-block" />
            </div>
        </div>
    )
});

export default Header;