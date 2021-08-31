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
    const id = storyState.id

    let undefinedError = false

    storyState.getStory(id).then()
    
    return (
        <div>
            {
                storyState.notFoundError ?
                    <div>
                        <div className="Headline-block">
                            {localization.story.notFound.headline}
                        </div>
                    </div> :
                    <div>
                        <div className="Headline-block">
                            {storyState.struct.title}
                        </div>
                        {
                            undefinedError ?
                                <Content /> :
                                null
                        }
                        <Content />
                    </div>
            }

        </div>
    )
})

export default Story;