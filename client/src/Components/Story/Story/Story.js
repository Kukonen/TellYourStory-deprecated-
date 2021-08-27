import React from 'react'
import './Story.scss'
import {observer} from "mobx-react-lite";
import Content from '../Content/Content'
import localizationState from '../../../Store/LocalizationState'
import storyState from '../../../Store/StoryState'
import { configure } from "mobx"

const Story = observer((props) => {
    configure({
        enforceActions: "never",
    })

    const localization = localizationState.text
    const id = props.props.id

    storyState.getStory(id).then()

    return (
        <div>
            <div className="Headline-block">
                {storyState.struct.title}
            </div>
            <Content />
        </div>
    )
})

export default Story;