import React from 'react';
import './Counters.scss'
import {observer} from "mobx-react-lite";
import user from '../../../Store/UserState'
import {useState} from "react";
import saveImg from '../Img/save.svg'
import addIcon from '../Img/add.svg'
import template from '../../../Store/TemplateState'

const Counters = observer(() => {
    const localization = user.text

    const [name, setName] = useState('')
    const [count, setCount] = useState(0)

    let counters = []

    counters = template.counter

    let counterList = []

    counterList = counters.map(counter => {
            // const [counterName, setCounterName] = useState(counter.name)
            // const [counterNumber, setCounterNumber] = useState(counter.count)
            const counterName = counter.name
            const counterNumber = counter.count
            return (
                <div className="Create-counter-list-input" key = {counter.id}>
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

                        template.changeCounter(text, number, counter.id)
                    }
                    } />
                </div>
            )
        })


    // for (let i = 0; i < counters.length; ++i) {
    //     console.log("here")
    //     const counterName = counters[i].name
    //     const counterNumber = counters[i].count
    //     counterList.push(
    //         <div className="Create-counter-list-input" key = {counters[i].id}>
    //             <input type="text" className="Create-counters-list-input-name"
    //                    //onChange={value => setCounterName(value.target.value)}
    //                    defaultValue={counterName}
    //                    placeholder={localization.create.counters.addName}
    //             />
    //             <input type="number" className="Create-counters-list-input-count"
    //                    //onChange={value => setCounterNumber(value.target.value)}
    //                    defaultValue={counterNumber}
    //                    placeholder={localization.create.counters.addCount}
    //             />
    //             <img alt="save" className="Create-counters-list-button" src={saveImg} onClick={el =>
    //             {
    //                 template.changeCounter(counterName, counterNumber, counters[i].id)
    //             }
    //             } />
    //         </div>
    //     )
    // }


    return (
        <div>
            <div className="Create-counters-add">
                <div className="Create-counters-add-input">
                    <input type="text" className="Create-counters-add-input-name"
                           onChange={value => setName(value.target.value)}
                           value={name}
                           placeholder={localization.create.counters.addName}
                    />
                    <input type="number" className="Create-counters-add-input-count"
                           onChange={value => setCount(value.target.value)}
                           value={count}
                           placeholder={localization.create.counters.addCount}
                    />
                    <img alt="add" className="Create-counters-add-input-button" src={addIcon}
                         onClick={() => template.createCounter(name, count)} />
                </div>
            </div>
            <div className="Create-counter-list">
                <div>
                    <div className="Create-counter-list-headline-block">
                        <div className="Create-counter-list-headline">
                            {localization.create.counters.counterListHeadline}
                        </div>
                    </div>
                    {Array.isArray(counterList) ? counterList : null}
                </div>
            </div>
        </div>
    )
});

export default Counters;