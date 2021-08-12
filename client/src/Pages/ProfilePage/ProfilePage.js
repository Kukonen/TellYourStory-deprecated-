import React from 'react'
import './ProfilePage.scss'
import {observer} from "mobx-react-lite";
import user from '../../Store/UserState'
import Profile from '../../Components/Profile/Profile'

const ProfilePage = observer(() => {
    const localization = user.text

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
                    <Profile /> :
                    null
            }
        </div>
    )
})

export default ProfilePage;