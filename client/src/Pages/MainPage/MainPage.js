import React from 'react';
import user from '../../Store/UserState'
import {observer} from "mobx-react-lite";

const MainPage = observer(() => {

    const localization = user.text

    return (
        <div>
            <div className="Headline-block">{localization.mainPage.headline}</div>
        </div>
    )
});

export default MainPage;