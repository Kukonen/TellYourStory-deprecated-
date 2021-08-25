import React, {useState} from 'react'
import './SettingsPage.scss'
import {observer} from "mobx-react-lite";
import localizationState from "../../Store/LocalizationState";
import user from "../../Store/UserState";
import Main from '../../Components/Settings/Main/Main'
import Password from '../../Components/Settings/Password/Password'

const SettingsPage = observer(() => {
    const localization = localizationState.text

    const [mode, setMode] = useState(0)

    const menuStyle = "Settings-Menu-Block"
    const activeMenuStyle = "Settings-Menu-Block Settings-Menu-Block-Active";

    return (
        <div>
            {
                user.isLogged === "no" ?
                    <div>
                        <div className="Headline-block">{localization.settings.noLogin.headline}</div>
                        <div className="Create-no-login-links-section">
                            <div className="Create-no-login-links-block">
                                <a href="/login" className="Create-no-login-links">{localization.settings.noLogin.login}</a>
                            </div>
                            <div className="Create-no-login-links-block">
                                <a href="/register" className="Create-no-login-links">{localization.settings.noLogin.register}</a>
                            </div>
                        </div>
                    </div> :
                    user.isLogged === "yes" ?
                        <div className="Settings">
                            <div className="Settings-Menu-Section">
                                <div className={mode === 0 ? activeMenuStyle : menuStyle}
                                     onClick={() => setMode(0)}
                                >{localization.settings.navBar.main}</div>
                                <div className={mode === 1 ? activeMenuStyle : menuStyle}
                                     onClick={() => setMode(1)}
                                >{localization.settings.navBar.password}</div>

                            </div>
                            <div className="Settings-Content">
                                {
                                    mode === 0 ?
                                        <Main /> :
                                        mode === 1 ?
                                            <Password /> :
                                                null
                                }
                            </div>
                        </div>:
                        null
            }
        </div>
    )
})

export default SettingsPage;