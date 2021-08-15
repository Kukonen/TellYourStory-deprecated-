import React from 'react'
import './Release.scss'
import {observer} from "mobx-react-lite";
import template from  '../../../Store/TemplateState'
import Ready from "./Ready";
import Errors from "./Errors";
import Check from './Check'

const Release = observer(() => {
    return (
        <div>
            {
                template.Errors === undefined ?
                    <Check /> :
                        template.Errors.status === false ?
                            <Ready /> :
                                template.Errors.status === true ?
                                    <Errors /> :
                                        null
            }
        </div>
    )
})

export default Release;