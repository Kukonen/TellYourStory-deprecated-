import React from 'react'
import './Content.scss'
import {observer} from "mobx-react-lite";
import storyState from '../../../Store/StoryState'
import Level from './Level/Level'

const Content = observer(() => {
    const struct = JSON.parse(JSON.stringify(storyState.struct))

    const levels = Array.isArray(struct.story) ? struct.story.map(story => {
        return <Level chapters={story.chapters} />
    }) : null

    return (
        <div>
            {levels !== null ? levels[0] : null}
        </div>
    )
})

export default Content;