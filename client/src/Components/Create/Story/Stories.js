import React, {useState} from 'react';
import './Stories.scss'
import {observer} from "mobx-react-lite";
import template from '../../../Store/TemplateState'
import Story from "./Story";
import localizationState from "../../../Store/LocalizationState";
import saveImg from '../Img/save.svg'

const Stories = observer(() => {

    const localization = localizationState.text
    const [title, setTitle] = useState(template.title)
    const storyElements = template.story.map(story => {
        return <Story key={story.id} {...story}/>
    })

    return (
        <div>
            <div>
                <div className="Create-chapters-section-head">
                    <div className="Create-story-chapter-title">{localization.create.title}</div>
                    <input type="text"
                           className="Create-chapters-input-title"
                           defaultValue={template.title}

                           onChange={value => {
                               setTitle(value.target.value)
                           }}
                    />
                    <img src={saveImg} alt="save" className="Create-story-chapter-button" onClick={() => template.changeTitle(title)}/>
                </div>
            </div>
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