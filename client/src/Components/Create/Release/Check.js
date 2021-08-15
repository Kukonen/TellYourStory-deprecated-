import React from 'react'
import './Release.scss'
import {observer} from "mobx-react-lite";
import localizationState from '../../../Store/LocalizationState'
import template from '../../../Store/TemplateState'

const Check = observer(() => {
    const localization = localizationState.text

    return (
        <div>
            <div className="Headline-block">{localization.create.release.chek.headline}</div>
            <div className="Headline-block">{localization.create.release.chek.prepare}</div>
            <div className="Create-release-button-section">
                <div className="Create-release-button"
                     onClick={() => template.checkTemplate()}
                >{localization.create.release.chek.button}</div>
            </div>
        </div>
    )
})

export default Check;