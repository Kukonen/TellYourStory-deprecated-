import React from 'react';
import './CreatePage.scss'
import {observer} from "mobx-react-lite";
import {useState} from "react";
import user from '../../Store/UserState'

import Chapters from '../../Components/Create/Chapters'
import Counters from '../../Components/Create/Counters'
import Story from '../../Components/Create/Story'


const CreatePage = observer(() => {
    const localization = user.text

    const [mode, setMode] = useState(0)

    const menuStyle = "Create-menu-block"
    const menuStyleActive = "Create-menu-block Create-menu-block-active"


    return (
        <div className="Create">
            <div className="Create-menu">
                <div>
                    <div className={mode === 0 ? menuStyleActive : menuStyle} onClick={() => setMode(0)}>{localization.create.story}</div>
                    <div className={mode === 1 ? menuStyleActive : menuStyle} onClick={() => setMode(1)}>{localization.create.chapters}</div>
                    <div className={mode === 2 ? menuStyleActive : menuStyle} onClick={() => setMode(2)}>{localization.create.counters}</div>
                </div>
            </div>
            <div className="Create-content">
                {
                    mode === 0 ? <Story /> :
                    mode === 1 ? <Chapters /> :
                    mode === 2 ? <Counters /> :
                                 null
                }
            </div>
        </div>
    )
});

export default CreatePage;