import React from 'react';
import {observer} from "mobx-react-lite";
import localizationState from "../../Store/LocalizationState";

const MainPage = observer(() => {

    const localization = localizationState.text

    return (
        <div>
            <div className="Headline-block">{localization.mainPage.headline}</div>
        </div>
    )
});

export default MainPage;