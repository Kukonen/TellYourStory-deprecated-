import React from 'react';

import {observer} from "mobx-react-lite";

import './RegisterPage.scss'
import RuText from '../../TextData/Ru/login-register.json';
import EnText from '../../TextData/En/login-register.json';
import language from "../../Store/LanguageStore";

const RegisterPage = observer(() => {

    let text = {}
    language.language === "en" ?
        text = EnText :
        text = RuText;

    return (
        <div className="AuthPage">
            <h1>{text.register}</h1>
            <div className="Auth-section">
                <div className="Auth-block">
                    <div className="Auth-text-block">
                        {text.name}
                    </div>
                    <div className="Auth-input-block">
                        <input type="text" className="Auth-input"/>
                    </div>
                </div>
                <div className="Auth-block">
                    <div className="Auth-text-block">
                        {text.email}
                    </div>
                    <div className="Auth-input-block">
                        <input type="text" className="Auth-input"/>
                    </div>
                </div>
                <div className="Auth-block">
                    <div className="Auth-text-block">
                        {text.password}
                    </div>
                    <div className="Auth-input-block">
                        <input type="password" className="Auth-input"/>
                    </div>
                </div>
                <div className="Auth-block">
                    <div className="Auth-text-block">
                        {text.password}
                    </div>
                    <div className="Auth-input-block">
                        <input type="password" className="Auth-input"/>
                    </div>
                </div>
                <div className="Auth-block">
                    <div className="Auth-text-block">
                        {text.remember}
                    </div>
                    <div className="Auth-input-block">
                        <input type="checkbox" className="Auth-checkbox"/>
                    </div>
                </div>
            </div>
            <input type="button" value={text.send}/>
        </div>
    )
});

export default RegisterPage;