import React from 'react'
import './Chapters.scss'
import {observer} from "mobx-react-lite";
import {useState} from "react";

const Counters = observer((props) => {
    const [name, setName] = useState(props.name)
    const [count, setCount] = useState(props.count)

    const update = (count) => {
        props.update({name: name, count: count})
    }

    return (
        <div className="Create-chapters-decision-counters-block">
            <div className="Create-chapters-decision-counter-name">{name}</div>
            <input type="number" className="Create-chapters-decision-counter-value"
                   value={count}
                   onChange={value => {
                       setCount(value.target.value)
                       update(value.target.value)
                   }}
            />
        </div>
    )
})

export default Counters;