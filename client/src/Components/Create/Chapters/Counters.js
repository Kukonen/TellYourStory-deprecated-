import React from 'react'

import {observer} from "mobx-react-lite";
import {useState} from "react";

const Counters = observer((props) => {
    const [name, setName] = useState(props.name)
    const [count, setCount] = useState(props.count)
    
    return (
        <div>
            <div className="Create-chapters-decision-counter-name">{name}</div>
            <input type="number" className="Create-chapters-decision-counter-value"
                   value={count}
                //onChange={value => setCount(value.target.value)}
            />
        </div>
    )
})

export default Counters;