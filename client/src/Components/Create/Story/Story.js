import React from 'react'
import './Stories.scss'
import {observer} from "mobx-react-lite";
import user from "../../../Store/UserState";


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
                <div>

                </div>
            </div>
        </div>
    )
})

export default Story;