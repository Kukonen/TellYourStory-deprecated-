import React from 'react';
import localizationState from '../../../Store/LocalizationState'
import {observer} from "mobx-react-lite";
import saveImg from "../../../Images/save.svg";
import template from "../../../Store/TemplateState";
import deleteIcon from "../../../Images/trash.svg";

const Counter = observer((props) => {
    const localization = localizationState.text

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

                    template.changeCounter(text, number, props.id).then()
                }
                } />
                <img alt="delete" className="Create-counters-list-button" src={deleteIcon} onClick={el =>
                {
                    template.chapter.forEach(chapter => {
                        chapter.decision.forEach(decision => {
                            decision.counters = decision.counters.filter(counters => {
                                if (counters.name !== props.name)
                                    return counters
                            })
                        })
                    })
                    template.deleteCounter(props.id).then(() => {

                    })
                }
                } />
            </div>
        )
});

export default Counter;