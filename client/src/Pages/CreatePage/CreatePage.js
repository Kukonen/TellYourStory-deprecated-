import React from 'react';
import './CreatePage.scss'
import {observer} from "mobx-react-lite";
import {useState} from "react";
import user from '../../Store/UserState'

import Chapters from '../../Components/Create/Chapters/Chapters'
import Counters from '../../Components/Create/Counters/Counters'
import Story from '../../Components/Create/Story'


const CreatePage = observer(() => {
    const localization = user.text

    const [mode, setMode] = useState(0)

    const menuStyle = "Create-menu-block"
    const menuStyleActive = "Create-menu-block Create-menu-block-active"

    return (
        <div>
        {
        user.isLogged === "yes" ?
        <div className="Create">
            <div className="Create-menu">
                <div>
                    <div className={mode === 0 ? menuStyleActive : menuStyle}
                         onClick={() => setMode(0)}>{localization.create.menu.story}</div>
                    <div className={mode === 1 ? menuStyleActive : menuStyle}
                         onClick={() => setMode(1)}>{localization.create.menu.chapters}</div>
                    <div className={mode === 2 ? menuStyleActive : menuStyle}
                         onClick={() => setMode(2)}>{localization.create.menu.counters}</div>
                </div>
            </div>
            <div className="Create-content">
                {
                    mode === 0 ? <Story/> :
                        mode === 1 ? <Chapters/> :
                            mode === 2 ? <Counters/> :
                                null
                }
            </div>
        </div> : user.isLogged === "no" ?
        <div>
            <div className="Headline-block">{localization.create.noLogin.headline}</div>
            <div className="Create-no-login-links-section">
                <div className="Create-no-login-links-block">
                    <a href="/login" className="Create-no-login-links">{localization.create.noLogin.login}</a>
                </div>
                <div className="Create-no-login-links-block">
                    <a href="/register" className="Create-no-login-links">{localization.create.noLogin.register}</a>
                </div>
            </div>
        </div> :
            null
        }
    </div>
    )
});

export default CreatePage;