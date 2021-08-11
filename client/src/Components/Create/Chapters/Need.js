import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import saveImg from '../Img/save.svg'
import template from '../../../Store/TemplateState'

const Need = observer((props) => {
    const [count, setCount] = useState(props.props.count)
    console.log(props)
    return (
        <div className="Create-chapters-decision-counters-block">
            <div className="Create-chapters-decision-counter-name">{props.props.name}</div>
            <input type="number" className="Create-chapters-decision-counter-value"
                   value={count}
                   onChange={value => {
                       setCount(value.target.value)
                   }}
            />
            <img src={saveImg} alt="save" className="Create-chapter-decision-button"

            />
        </div>
    )
});

export default Need;