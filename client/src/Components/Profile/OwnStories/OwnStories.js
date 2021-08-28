import React from 'react'
import './OwnStrories.scss'
import {observer} from "mobx-react-lite";
import Story from './Story'
import ProfileState from "../../../Store/ProfileState";
import { configure } from "mobx"

const OwnStories = observer(() => {

    configure({
        enforceActions: "never",
    })

    ProfileState.getOwnStories().then()

    const ownStories = ProfileState.ownStories.map(story => {
        return <Story key={story.id} {...story}/>
    })

    return (
        <div className = "Profile-OwnStories">
            {ownStories}
        </div>
    )
})

export default OwnStories;