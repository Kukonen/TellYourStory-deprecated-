import React from 'react'
import './Stories.scss'
import {observer} from "mobx-react-lite";
import user from "../../../Store/UserState";
import template from '../../../Store/TemplateState'

const Story = observer((props) => {

    const localization = user.text

    return (
        <div className="Create-story-level">
            <div className="Create-story-level-title-section">
                <div className="Create-story-level-title-block">
                    {localization.create.story.level + ": " + props.number}
                </div>
                <div className="Create-story-level-title-block">
                    {localization.create.story.addChapter}
                </div>
                <div className="Create-story-level-title-block"
                     onClick={() => template.deleteLevel(props.id)}
                >
                    {localization.create.story.deleteLevel}
                </div>
            </div>
        </div>
    )
})

export default Story;