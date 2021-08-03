import React from 'react';
import './Stories.scss'
import {observer} from "mobx-react-lite";
import user from '../../../Store/UserState'
import template from '../../../Store/TemplateState'
import Story from "./Story";

const Stories = observer(() => {

    const localization = user.text

    const storyElements = template.story.map(story => {
        return <Story {...story}/>
    })

    return (
        <div>
            <div className="Create-story-options-section">
                <div className="Create-story-options-block"
                     onClick={() => template.createStoryLevel()}
                >{localization.create.story.addLevel}</div>
                <div className="Create-story-options-block">{localization.create.story.deleteAll}</div>
            </div>
            <div className="Create-story-content-section">
                {storyElements}
            </div>
        </div>
    )
});

export default Stories;