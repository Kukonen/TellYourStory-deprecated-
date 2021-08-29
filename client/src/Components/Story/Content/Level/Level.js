import React from 'react'
import './Level.scss'
import {observer} from "mobx-react-lite";
import storyState from '../../../../Store/StoryState'

const Level = observer((props) => {
    
    let chapters = storyState.struct.chapter.map(chapter => {
        for (let i = 0; i < props.chapters.length; ++i) {
            if (props.chapters[i].chapterId === chapter.id) {
                return JSON.parse(JSON.stringify(chapter))
            }
        }
    })

    chapters.sort((a, b) => {
        let aNeed = 0
        for (let i = 0; i < a.need.length; ++i) {
            aNeed += a.need[i].count
        }

        let bNeed = 0
        for (let i = 0; i < b.need.length; ++i) {
            bNeed += b.need[i].count
        }

        if (aNeed > bNeed)
            return 1
        if (aNeed < bNeed)
            return -1
        return 0
    })

    const reducer = (accumulator, currentValue) => {
        accumulator = Number(accumulator.count)
        currentValue = Number(currentValue.count)
        return accumulator + currentValue
    }

    const counters = storyState.counters.reduce(reducer)
    
    const chapter = chapters.find(it => Math.abs(it - counters) === Math.min(...chapters.map(it => Math.abs(it - counters))))

    return (
        <div>

        </div>
    )
})

export default Level;