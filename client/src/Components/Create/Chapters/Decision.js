import React, {useState} from 'react';

import {observer} from "mobx-react-lite";
import template from '../../../Store/TemplateState'
import Counters from './Counters'
import saveImg from '../../../Images/save.svg'
import deleteImg from '../../../Images/trash.svg'

const Decision = observer((props) => {
    const [title, setTitle] = useState(props.title)

    const [counter, setCounter] = useState(props.counters || [])

    function update(counters) {
        let tmpCounter = counter
        for (let i = 0; i < tmpCounter.length; ++i) {
            if (tmpCounter[i].name === counters.name)
                tmpCounter[i].count = counters.count
        }
        setCounter(tmpCounter)
    }

    function updateDecision (newDecision) {
        props.updateDecision(newDecision)
    }

    let counters = counter.map((counterMap, index) => {
        return <Counters key={index} {...{
            name: counterMap.name,
            count: counterMap.count
        }} update = {update}/>
    })

    return (
        <div className="Create-chapters-decision-counter">
            <div className="Create-chapter-decision-title-block">
                <input className="Create-chapters-decision-counter-title"
                       value={title}
                       onChange={value => setTitle(value.target.value)}
                />
                <img src={saveImg} alt="save" className="Create-chapter-decision-button" onClick={ element => {
                    template.changeDecision(props.id, title, counter).then()
                }}/>
                <img src={deleteImg} alt="delete" className="Create-chapter-decision-button" onClick={ element => {

                    template.deleteDecision(props.id).then(() => {
                        let newDecision = []

                        const chapterIndex = template.chapter.findIndex(chapter => chapter.id === props.chapterId)

                        for (let i = 0; i < template.chapter[chapterIndex].decision.length; ++i) {
                            if (template.chapter[chapterIndex].decision[i].id !== props.id) {
                                newDecision.push(template.chapter[chapterIndex].decision[i])
                            }
                        }

                        updateDecision(newDecision)
                    })
                }}/>
            </div>

            <div className="Create-chapters-decision-counters-section">
                {counters}
            </div>

        </div>
    )
});

export default Decision;