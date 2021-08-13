import React, {useState} from 'react'
import './ProfilePage.scss'
import {observer} from "mobx-react-lite";
import user from '../../Store/UserState'
import localizationState from "../../Store/LocalizationState";
import SavedStories from "../../Components/Profile/SavedStories/SavedStories";
import OwnStories from "../../Components/Profile/OwnStories/OwnStories";
import Settings from "../../Components/Profile/Settings/Settings";

const ProfilePage = observer(() => {
    const localization = localizationState.text

    const [mode, setMode] = useState(0)

    const menuStyle = "Profile-Menu-Block"
    const activeMenuStyle = "Profile-Menu-Block Profile-Menu-Block-Active";

    return (
        <div>
            {
                user.isLogged === "no" ?
                    <div>
                        <div className="Headline-block">{localization.profile.noLogin.headline}</div>
                        <div className="Create-no-login-links-section">
                            <div className="Create-no-login-links-block">
                                <a href="/login" className="Create-no-login-links">{localization.profile.noLogin.login}</a>
                            </div>
                            <div className="Create-no-login-links-block">
                                <a href="/register" className="Create-no-login-links">{localization.profile.noLogin.register}</a>
                            </div>
                        </div>
                    </div> :
                user.isLogged === "yes" ?
                    <div className="Profile">
                        <div className="Profile-Menu-Section">
                            <div className={mode === 0 ? activeMenuStyle : menuStyle}
                                 onClick={() => setMode(0)}
                            >{localization.profile.navBar.savedStories}</div>
                            <div className={mode === 1 ? activeMenuStyle : menuStyle}
                                 onClick={() => setMode(1)}
                            >{localization.profile.navBar.ownStories}</div>
                            <div className={mode === 2 ? activeMenuStyle : menuStyle}
                                 onClick={() => setMode(2)}
                            >{localization.profile.navBar.Settings}</div>

                        </div>
                        <div className="Profile-Content">
                            {
                                mode === 0 ?
                                    <SavedStories /> :
                                mode === 1 ?
                                    <OwnStories /> :
                                mode === 2 ?
                                    <Settings /> :
                                    null
                            }
                        </div>
                    </div>:
                    null
            }
        </div>
    )
});

export default ProfilePage;