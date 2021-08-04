import React, {useState} from 'react'
import './Stories.scss'
import {observer} from "mobx-react-lite";
import './Chapter'
import user from "../../../Store/UserState";
import template from '../../../Store/TemplateState'
import Chapter from "../Chapters/Chapter";

const Story = observer((props) => {

    const localization = user.text

    const [chapters, setChapters] = useState([])

    // const tmpChpaters = props.chapters.map(chapter => {
    //     return <Chapter {...chapter} />
    // })

    //setChapters(tmpChpaters)

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
                         chaptersSectionRef.current.remove()
                         const element = (
                             <div>
                                 some text
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