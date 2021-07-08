import React from 'react';
import user from '../../Store/UserState'
import {observer} from "mobx-react-lite";

import './ProfilePage.scss'

import NotLogin from "./NotLogin";
import AlreadyLogin from "./AlreadyLogin";

const ProfilePage = observer(() => {

    user.getUserData().then()

    return (
        <div>
            {
                user.isLogged === "yes" ?
                    <AlreadyLogin /> :
                user.isLogged === "no" ?
                    <NotLogin />
                : <div />
            }
        </div>
    )
});

export default ProfilePage;