import React, {useState} from 'react'
import './Stories.scss'
import {observer} from "mobx-react-lite";
import './Chapter'
import user from "../../../Store/UserState";
import template from '../../../Store/TemplateState'
import Chapter from "../Chapters/Chapter";
import addImg from '../Img/add.svg'

const Story = observer((props) => {

    const localization = user.text

    const chaptersOptionsJSON = template.chapter.map(chapter => {
        return ({
            "id": chapter.id,
            "title":  chapter.title
        })
    })
    const chaptersOptions = chaptersOptionsJSON.map(chapter => {
        return (
            <option value={chapter.id} className="Create-story-chapter-option">
                {chapter.title}
            </option>
        )
    })
    console.log(chaptersOptions)

    const [chapters, setChapters] = useState(props.chapters.map(chapter => {
        return <Chapter {...chapter} />
    }))

    if (chapters.length === 0) {
        setChapters((
                <div className="Create-story-chapter-block Create-story-chapter-not-found-block">
                    <span className="Create-story-chapter-not-found-text">{localization.create.story.noChapterFirst}</span>
                    <hr className="Create-story-chapter-not-found-hr"/>
                    <span className="Create-story-chapter-not-found-text">{localization.create.story.noChapterSecond}</span>
                </div>
            ))
    }

    const chaptersSectionRef= React.createRef();

    return (

        <div className="Create-story-level">
            <div className="Create-story-level-title-section">
                <div className="Create-story-level-title-block">
                    {localization.create.story.level + ": " + props.number}
                </div>
                <div className="Create-story-level-title-block"
                     onClick={() => {
                         chaptersSectionRef.current.innerHtml = ''
                         const element = (
                             <div className="Create-story-chapter-block">
                                 <select className="Create-story-chapter-select">
                                     {
                                         chaptersOptions
                                     }
                                 </select>
                                 <img src={addImg} alt="add"className="Create-story-chapter-add-button"/>
                             </div>
                         )
                         setChapters(element)
                     }}
                >
                    {localization.create.story.addChapter}
                </div>
                <div className="Create-story-level-title-block"
                     onClick={() => template.deleteLevel(props.id)}
                >
                    {localization.create.story.deleteLevel}
                </div>
            </div>
            <div
                ref={chaptersSectionRef}
            >
                {chapters}
            </div>
        </div>
    )
})

export default Story;