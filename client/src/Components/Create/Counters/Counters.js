import React from 'react';
import './Counters.scss'
import {observer} from "mobx-react-lite";
import user from '../../../Store/UserState'
import {useState} from "react";
import saveImg from './save.svg'
import addIcon from './add.svg'


const Counters = observer(() => {
    const localization = user.text

    const [name, setName] = useState('')
    const [count, setCount] = useState(0)

    const counters = [
        {
            "id": "32-ue-32",
            "name": "some name",
            "counter": 3
        },
        {
            "id": "42-ry-42",
            "name": "first",
            "counter": 0
        }
    ]

    const counterList = counters.map(counter => {
        return (
            <div className="Create-counter-list-input">
                <input type="text" className="Create-counters-list-input-name"
                       onChange={value => setName(value.target.value)}
                       value={counter.name}
                       placeholder={localization.create.counters.addName}
                />
                <input type="number" className="Create-counters-list-input-count"
                       onChange={value => setCount(value.target.value)}
                       value={counter.counter}
                       placeholder={localization.create.counters.addCount}
                />
                <img alt="save" className="Create-counters-list-button" src={saveImg} onClick={el =>
                {
                    const parent = el.target.parentNode
                    const childes = parent.childNodes
                    const text = childes[0].value
                    const number = childes[1].value
                }
                } />
            </div>
        )
    })
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
                    <img alt="add" className="Create-counters-add-input-button" src={addIcon}></img>
                </div>
            </div>
            <div className="Create-counter-list">
                <div>
                    <div className="Create-counter-list-headline-block">
                        <div className="Create-counter-list-headline">
                            {localization.create.counters.counterListHeadline}
                        </div>
                    </div>
                    {counterList}
                </div>
            </div>
        </div>
    )
});

export default Counters;