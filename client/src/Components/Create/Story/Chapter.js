import React from 'react'
import './Stories.scss'
import {observer} from "mobx-react-lite";
import template from '../../../Store/TemplateState'
import deleteImg from '../Img/trash.svg'

const Chapter = observer((props) => {

    const chapterIdx = template.chapter.findIndex(chapter => chapter.id === props.chapterId) >= 0 ?
        template.chapter.findIndex(chapter => chapter.id === props.chapterId) :
        null

    const chapterTitle = chapterIdx !== null ?
        template.chapter[chapterIdx].title :
        null

    if (chapterTitle === null)
        return null



    return (
        <div className="Create-story-chapter-block">
            <div className="Create-story-chapter-title">{chapterTitle}</div>
            <img src={deleteImg} alt="delete" className="Create-story-chapter-button"
                 onClick={deleteChapter => {
                    template.deleteChapterInStoryLevel(props.levelId, props.chapterId).then(() => {
                        props.deleteFunc(props.levelId, props.chapterId)
                    })
                 }}
            />

        </div>
    )
})

export default Chapter;