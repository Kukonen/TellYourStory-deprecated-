import React, {useState} from 'react';

import {observer} from "mobx-react-lite";
import template from '../../../Store/TemplateState'
import Counters from './Counters'

const Decision = observer((props) => {
    const [title, setTitle] = useState(props.title)

    let counter = props.counters || []

    let counters = counter.map(counterMap => {
        return <Counters {...{
            name: counterMap.name,
            count: counterMap.count
        }} />
    })

    return (
        <div className="Create-chapters-decision-counter">
            <input className="Create-chapters-decision-counter-name"
                   value={title}
                   onChange={value => setTitle(value.target.value)}
            />
            <div>
                {counters}
            </div>

        </div>
    )
});

export default Decision;