import React, {useState} from 'react';
import './Chapters.scss'
import {observer} from "mobx-react-lite";
import user from '../../../Store/UserState'
import addImg from '../Img/add.svg'
import saveImg from '../Img/save.svg'
import arrowUpImg from '../Img/arrowup.svg'
import arrowDownImg from '../Img/arrowdown.svg'
import template from "../../../Store/TemplateState";
import Chapter from "./Chapter"

const Chapters = observer(() => {
    const localization = user.text

    const counters = template.counter

    const [addTitle, setAddTitle] = useState('')

    const chapters = template.chapter

    const chaptersElements = chapters.map((chapter, index) => {

        return <Chapter {...{
            id: chapter.id,
            title: chapter.title
        }}/>
    })

    return (
        <div>
            <div className="Create-chapters-add-section">
                <input type="text" className="Create-chapters-add-input-title"
                placeholder={localization.create.chapters.addTitle}
                       value={addTitle}
                       onChange={value => {
                           setAddTitle(value.target.value)
                       }}
                />
                <img src={addImg} alt="add" className="Create-chapters-add-input-button" onClick={() => {
                    template.createChapter(addTitle).then()
                    setAddTitle('')
                }}/>
            </div>
            <div>
                <div className="Create-chapter-headline-section">
                    <div className="Create-chapter-headline-block">
                        {localization.create.chapters.savedHeadline}
                    </div>
                </div>
                <div>
                    {chaptersElements}
                </div>
            </div>
        </div>
    )
});

export default Chapters;