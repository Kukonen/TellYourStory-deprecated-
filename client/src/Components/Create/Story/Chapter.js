import React from 'react'
import './Stories.scss'
import {observer} from "mobx-react-lite";
import template from '../../../Store/TemplateState'
import deleteImg from '../Img/trash.svg'

const Chapter = observer((props) => {
    if (template.chapter.findIndex(chapter => chapter.id === props.chapterId) === -1)
        template.openOrCreate().then()

    const chapterIdx = template.chapter.findIndex(chapter => chapter.id === props.chapterId) > 0 ?
        template.chapter.findIndex(chapter => chapter.id === props.chapterId) :
        null
    const chapterTitle = chapterIdx !== null ?
        template.chapter[chapterIdx].title :
        null

    if (chapterTitle === null)
        return null

    console.log(props.chapterId)
    template.chapter.forEach(el => console.log(el.id))
    console.log(template.chapter.findIndex(chapter => chapter.id === props.chapterId))
    //console.log(chapterTitle)

    return (
        <div className="Create-story-chapter-block">
            <div className="Create-story-chapter-title">{chapterTitle}</div>
            <img src={deleteImg} alt="delete" className="Create-story-chapter-button" />

        </div>
    )
})

export default Chapter;