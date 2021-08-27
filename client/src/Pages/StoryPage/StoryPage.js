import React from 'react'

import {observer} from "mobx-react-lite";
import Story from '../../Components/Story/Story/Story'

const StoryPage = observer(() => {
    const id = window.location.href.slice(window.location.href.lastIndexOf('/') + 1)

    return (
        <div className="StoryPage">
            <Story props={{id: id}}/>
        </div>

    )
})

export default StoryPage;