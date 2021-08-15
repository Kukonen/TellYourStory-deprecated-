import React from 'react'
import './Release.scss'
import {observer} from "mobx-react-lite";
import localizationState from '../../../Store/LocalizationState'
import template from '../../../Store/TemplateState'

const Errors = observer(() => {
    const localization = localizationState.text

    return (
        <div>
            <div className="Create-release-headline-error">{localization.create.release.errors.headline}</div>
            <div className="Create-release-error-section">
                {
                    template.Errors.description.story ?
                        <div className="Create-error-block">{localization.create.release.errors.story}</div> :
                            null
                }
                {
                    template.Errors.description.chapter ?
                        <div className="Create-error-block">{localization.create.release.errors.chapter}</div> :
                        null
                }
                {
                    template.Errors.description.counter ?
                        <div className="Create-error-block">{localization.create.release.errors.counter}</div> :
                        null
                }
            </div>
        </div>
    )
})

export default Errors;