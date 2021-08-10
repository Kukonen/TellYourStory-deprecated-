import React, {useState} from 'react'
import './Stories.scss'
import {observer} from "mobx-react-lite";
import './Chapter'
import user from "../../../Store/UserState";
import template from '../../../Store/TemplateState'
import Chapter from "./Chapter";
import addImg from '../Img/add.svg'
import {configure} from "mobx";

const Story = observer((props) => {

    configure({
        enforceActions: "never",
    })

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

    const [chapters, setChapters] = useState(props.chapters.map(chapter => {
        return <Chapter {...chapter} deleteFunc={deleteFunc} />
    }))

    if (chapters.length === 0) {
        setChapters([(
                <div className="Create-story-chapter-block Create-story-chapter-not-found-block">
                    <span className="Create-story-chapter-not-found-text">{localization.create.story.noChapterFirst}</span>
                    <hr className="Create-story-chapter-not-found-hr"/>
                    <span className="Create-story-chapter-not-found-text">{localization.create.story.noChapterSecond}</span>
                </div>
            )])
    }

    const chaptersSectionRef= React.createRef();

    /*
    this function (deleteFunc) crush!!
    can't removeChild by the hooks
    can't resolve problem with try / catch, because code is async
     */

    // function deleteFunc(levelId, chapterId) {
    //     try {
    //         const idx = template.story.findIndex(story => story.id === levelId)
    //         if (template.story[idx].chapters.length <= 1) {
    //             setChapters([(
    //                 <div className="Create-story-chapter-block Create-story-chapter-not-found-block">
    //                     <span
    //                         className="Create-story-chapter-not-found-text">{localization.create.story.noChapterFirst}</span>
    //                     <hr className="Create-story-chapter-not-found-hr"/>
    //                     <span
    //                         className="Create-story-chapter-not-found-text">{localization.create.story.noChapterSecond}</span>
    //                 </div>
    //             )])
    //         } else {
    //
    //             const tmpChapters = chapters.filter(tmpChapter =>
    //                 tmpChapter.props.chapterId !== chapterId && tmpChapter.type !== 'div'
    //             )
    //             setChapters(tmpChapters)
    //         }
    //     } catch (e) {
    //
    //     }
    // }

    function deleteFunc(levelId, chapterId) {
        window.location.reload(); // !!! this solve was taken for top mistake !!!
    }
    
    return (

        <div className="Create-story-level">
            <div className="Create-story-level-title-section">
                <div className="Create-story-level-title-block">
                    {localization.create.story.level + ": " + props.number}
                </div>
                <div className="Create-story-level-title-block"
                     onClick={targetElement => {
                         const chaptersSection = targetElement.target.parentNode.parentNode.getElementsByClassName('Create-story-chapters-section')[0]
                         if (chaptersSection.getElementsByClassName('Create-story-chapter-not-found-block').length > 0)
                         {
                             chaptersSection.removeChild(chaptersSection.getElementsByClassName('Create-story-chapter-not-found-block')[0])

                         }
                        if (chaptersSection.getElementsByClassName('Create-story-chapter-block-add').length > 0)
                            return
                         const element = (
                             <div className="Create-story-chapter-block Create-story-chapter-block-add">
                                 <select className="Create-story-chapter-select">
                                     {
                                         chaptersOptions
                                     }
                                 </select>
                                 <img src={addImg} alt="add" className="Create-story-chapter-button"
                                      onClick={el => {
                                          const targetChapterId = el.target.parentNode.getElementsByTagName('select')[0].value
                                          const createdElement = <Chapter {...{levelId : props.id, chapterId: targetChapterId}} deleteFunc={deleteFunc}/>
                                          let tmpNewChapters = chapters
                                          tmpNewChapters.push(createdElement)
                                          const idx = template.story.findIndex(st => st.id === props.id)
                                          template.story[idx].chapters = tmpNewChapters
                                          if(chaptersSection.getElementsByClassName('Create-story-chapter-block-add').length > 0)
                                            chaptersSection.removeChild(chaptersSection.getElementsByClassName('Create-story-chapter-block-add')[0])
                                          setChapters(tmpNewChapters)
                                          template.addChapterToStoryLevel(props.id, targetChapterId)
                                      }}
                                 />
                             </div>
                         )

                         let tmpChapters = chapters
                         tmpChapters.push(element)
                         const idx = template.story.findIndex(st => st.id === props.id)
                         template.story[idx].chapters = tmpChapters
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
                className="Create-story-chapters-section"
                ref={chaptersSectionRef}
            >
                {chapters}
            </div>
        </div>
    )
})

export default Story;