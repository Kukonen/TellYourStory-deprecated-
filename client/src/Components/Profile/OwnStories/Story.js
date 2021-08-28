import React from 'react'
import './OwnStrories.scss'
import {observer} from "mobx-react-lite";

const Story = observer((props) => {
    let URL = "http://localhost:8080/story/avatar/default.svg"
    if (props.avatar !== null)
        URL = "http://localhost:8080/story/avatar/" + props.avatar


    return (
        <div className="Profile-OwnStories-block" onClick={() => {
            window.location.href = "http://localhost:3000/story/" + props.id
        }}>
            <img src={URL} alt="avatar" className="Profile-OwnStories-avatar" />
            <div className="Profile-OwnStories-title">{props.title}</div>
        </div>
    )
})

export default Story;