import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import saveImg from '../../../Images/save.svg'
import template from '../../../Store/TemplateState'

const Need = observer((props) => {
    const [count, setCount] = useState(props.count)
    return (
        <div className="Create-chapters-decision-counters-block">
            <div className="Create-chapters-decision-counter-name">{props.name}</div>
            <input type="number" className="Create-chapters-decision-counter-value"
                   value={count}
                   onChange={value => {
                       setCount(value.target.value)
                   }}
            />
            <img src={saveImg} alt="save" className="Create-chapter-decision-button"
                 onClick={() => {
                     template.changeNeed(props.chapterId, props.id, count)
                 }}
            />
        </div>
    )
});

export default Need;