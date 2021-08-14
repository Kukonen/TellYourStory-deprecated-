import React from 'react'
import './Release.scss'
import {observer} from "mobx-react-lite";
import template from  '../../../Store/TemplateState'
import Ready from "./Ready";
import Errors from "./Errors";

const Release = observer(() => {
    return (
        <div>
            {
                template.Errors === undefined ?
                    null :
                    template.Errors === 0 ?
                        <Ready /> :
                            template.Errors > 0 ?
                                <Errors /> :
                                    null
            }
        </div>
    )
})

export default Release;