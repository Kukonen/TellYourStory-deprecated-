import React from 'react';
import './Chapters.scss'
import {observer} from "mobx-react-lite";
import user from '../../../Store/UserState'
import addImg from '../Img/add.svg'
import saveImg from '../Img/save.svg'
import arrowUpImg from '../Img/arrowup.svg'
import arrowDownImg from '../Img/arrowdown.svg'

const Chapters = observer(() => {
    const localization = user.text

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

    const chapters = [
        {
            title: "title 1",

        },
        {
            title: "title 2",
        }
    ]

    const chaptersElements = chapters.map((chapter, index) => {
        return (
            <div>
                <div className="Create-chapters-section-head">
                    <input type="text" className="Create-chapters-input-title"
                           placeholder={localization.create.chapters.title}
                    value = {chapter.title}
                    />
                    <img src={arrowDownImg} alt="add" className="Create-chapters-input-button" onClick={ element => {
                         if(element.target.src === "http://localhost:3000/static/media/arrowdown.1027ea01.svg") {
                             element.target.src = "http://localhost:3000/static/media/arrowup.5bf18927.svg"
                         }
                         else if (element.target.src === "http://localhost:3000/static/media/arrowup.5bf18927.svg") {
                             element.target.src = "http://localhost:3000/static/media/arrowdown.1027ea01.svg"
                         }
                    }}/>
                    <img src={saveImg} alt="add" className="Create-chapters-input-button" />
                </div>
                <div className="Create-chapters-section-body">
                    <textarea
                        placeholder={localization.create.chapters.text}
                        className="Create-chapters-textarea-text"
                        rows={10}
                    />
                </div>
                <div className="Create-chapters-section-footer">
                    <div className="Create-chapters-decision-title-block">
                        <input type="text"
                               className="Create-chapters-decision-name"
                               placeholder={localization.create.chapters.decisionPlaceholder}
                        />
                        <img src={saveImg} alt="save" className="Create-chapters-decision-save"/>

                    </div>
                    {
                        counters.map(counter => {
                            return (
                                <div className="Create-chapters-decision-counter">
                                    <div className="Create-chapters-decision-counter-name">
                                        {counter.name}
                                    </div>
                                    <input type="number" className="Create-chapters-decision-counter-value"
                                        value={0}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="Create-chapters-add-section">
                <input type="text" className="Create-chapters-add-input-title"
                placeholder={localization.create.chapters.addTitle}

                />
                <img src={addImg} alt="add" className="Create-chapters-add-input-button" />
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