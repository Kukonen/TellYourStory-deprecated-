import React from 'react'
import './Level.scss'
import {observer} from "mobx-react-lite";
import storyState from '../../../../Store/StoryState'

const Level = observer((props) => {
    
    let chapters = JSON.parse(JSON.stringify(storyState.struct.chapter))
    
    chapters.sort((a, b) => {
        let aNeed = a.need

        let bNeed = b.need

        if (aNeed > bNeed)
            return 1
        if (aNeed < bNeed)
            return -1
        return 0
    })

    let counters = JSON.parse(JSON.stringify(storyState.counters))

    counters = counters.length > 0 ? counters.reduce((allValues, currentValue) => {
        allValues = Number(allValues.count)
        currentValue = Number(currentValue.count)
        return allValues + currentValue
    }) : []
    
    let chapter = null

    let delta = 999, itemId = -1;
    for (let key in chapters) {
        if (Math.abs(chapters[key].need - counters) < delta) {
            itemId = key;
            delta = Math.abs(chapters[key].need - counters);
        }
    }

     chapter = chapters[itemId];

    const text = chapter !== undefined ?
        chapter.text :
        null
    
    return (
        <div>
            {
                text
            }
        </div>
    )
})

export default Level;