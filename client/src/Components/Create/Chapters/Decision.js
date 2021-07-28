import React, {useState} from 'react';

import {observer} from "mobx-react-lite";

const Decision = observer((props) => {
    const [title, setTitle] = useState(props.title)
    const [count, setCount] = useState(props.count)

    return (
        <div className="Create-chapters-decision-counter">
            <input className="Create-chapters-decision-counter-name"
                   value={title}
                   onChange={value => setTitle(value.target.value)}
            />
            <input type="number" className="Create-chapters-decision-counter-value"
                   value={count}
                   onChange={value => setCount(value.target.value)}
            />
        </div>
    )
});

export default Decision;