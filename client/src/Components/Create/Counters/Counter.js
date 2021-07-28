import React from 'react';

import {observer} from "mobx-react-lite";
import saveImg from "../Img/save.svg";
import template from "../../../Store/TemplateState";
import deleteIcon from "../Img/trash.svg";
import user from "../../../Store/UserState";

const Counter = observer((props) => {
    const localization = user.text
    // const [counterName, setCounterName] = useState(counter.name)
    // const [counterNumber, setCounterNumber] = useState(counter.count)
    const counterName = props.name
    const counterNumber = props.count
    return (
            <div className="Create-counter-list-input" key = {props.id}>
                <input type="text" className="Create-counters-list-input-name"
                       defaultValue={counterName}
                       placeholder={localization.create.counters.addName}
                />
                <input type="number" className="Create-counters-list-input-count"
                       defaultValue={counterNumber}
                       placeholder={localization.create.counters.addCount}
                />
                <img alt="save" className="Create-counters-list-button" src={saveImg} onClick={el =>
                {
                    //without state
                    const parent = el.target.parentNode
                    const childes = parent.childNodes
                    const text = childes[0].value
                    const number = childes[1].value
                    //const id = parent.key

                    template.changeCounter(text, number, props.id).then()
                }
                } />
                <img alt="delete" className="Create-counters-list-button" src={deleteIcon} onClick={el =>
                {
                    template.deleteCounter(props.id).then()
                }
                } />
            </div>
        )
});

export default Counter;