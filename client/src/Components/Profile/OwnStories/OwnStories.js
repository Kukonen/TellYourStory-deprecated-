import React from 'react'
import './OwnStrories.scss'
import {observer} from "mobx-react-lite";
import Story from './Story'
import ProfileState from "../../../Store/ProfileState";

const OwnStories = observer(() => {

    ProfileState.getOwnStories().then()

    const ownStories = ProfileState.ownStories.map(story => {
        return <Story {...story}/>
    })

    return (
        <div className = "Profile-OwnStories">
            {ownStories}
        </div>
    )
})

export default OwnStories;