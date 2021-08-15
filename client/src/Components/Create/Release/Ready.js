import React from 'react'
import './Release.scss'
import {observer} from "mobx-react-lite";
import localizationState from '../../../Store/LocalizationState'
import template from '../../../Store/TemplateState'

const Ready = observer(() => {
    const localization = localizationState.text

    return (
        <div>
            <div className="Create-release-headline-success">{localization.create.release.ready.headline}</div>
            <div className="Create-release-button-section">
                <div className="Create-release-button">
                    {localization.create.release.ready.toHome}
                </div>
            </div>
        </div>
    )
})

export default Ready;