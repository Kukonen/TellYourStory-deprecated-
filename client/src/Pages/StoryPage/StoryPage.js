import React from 'react'

import {observer} from "mobx-react-lite";
import Story from '../../Components/Story/Story/Story'
import storyState from '../../Store/StoryState'

const StoryPage = observer(() => {
    const path = window.location.href
    const regexp = new RegExp("(?<=story\\/)[^\\/]{1,}", ""); // find id after story/ and behind / (closed id)
    const id = path.match(regexp)

    storyState.id = id

    return (
        <div className="StoryPage">
            <Story/>
        </div>

    )
})

export default StoryPage;