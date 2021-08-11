import React from 'react';
import './Chapters.scss'
import {useState} from "react";
import {observer} from "mobx-react-lite";
import arrowDownImg from "../Img/arrowdown.svg";
import saveImg from "../Img/save.svg";
import deleteImg from "../Img/trash.svg";
import Need from './Need'
import user from "../../../Store/UserState";
import template from "../../../Store/TemplateState";
import {v4} from "uuid";
import addImg from '../Img/add.svg'
import Decision from "./Decision";


const Chapter = observer((props) => {
    const localization = user.text
    const [hide, setHide] = useState(true)
    const [title, setTitle] = useState(props.title)
    const [text, setText] = useState(props.text)
    const [addDecisionTitle, setAddDecisionTitle] = useState('')
    const [decision, setDecision] = useState(props.decision)
    let need = props.need

    need = need.map(need => <Need key={need.id} {...need}/>)

    function updateDecision(newDecision) {
        setDecision(newDecision)
    }


    return (
        <div>
            <div key = {props.id}>
                <div className="Create-chapters-section-head">
                    <input type="text" className="Create-chapters-input-title"
                           placeholder={localization.create.chapters.title}
                           value={title}
                           onChange={value => {
                               setTitle(value.target.value)
                           }}
                    />
                    <img src={arrowDownImg} alt="add" className="Create-chapters-input-button" onClick={ element => {
                        if(element.target.src === "http://localhost:3000/static/media/arrowdown.1027ea01.svg") {
                            setHide(false)
                            element.target.src = "http://localhost:3000/static/media/arrowup.5bf18927.svg"
                        }
                        else if (element.target.src === "http://localhost:3000/static/media/arrowup.5bf18927.svg") {
                            setHide(true)
                            element.target.src = "http://localhost:3000/static/media/arrowdown.1027ea01.svg"
                        }
                    }}/>
                    <img src={saveImg} alt="save" className="Create-chapters-input-button" onClick = {() => {
                        template.changeChapter(props.id, title, text, decision)
                    }} />
                    <img src={deleteImg} alt="save" className="Create-chapters-input-button" onClick = {() => {
                        template.deleteChapter(props.id)
                    }} />
                </div>
                <div className={ hide ? "Create-chapters-section-body Create-chapter-hide-section" : "Create-chapters-section-body"}>
                    <textarea
                        value={text}
                        placeholder={localization.create.chapters.text}
                        className="Create-chapters-textarea-text"
                        rows={10}
                        onChange={value => {
                            setText(value.target.value)
                        }}
                    />
                </div>
                <div className={hide ? "Create-chapter-headline-block Create-chapter-hide-section" : "Create-chapter-headline-block"}>
                    {localization.create.chapters.need}
                </div>
                <div className={hide ? "Create-chapters-section-footer Create-chapter-hide-section" : "Create-chapters-section-footer"}>

                    {

                        need.map(need => <Need key={need.id} {...need}/>)
                    }
                </div>
                <div className={hide ? "Create-chapters-section-footer Create-chapter-hide-section" : "Create-chapters-section-footer"}>
                    <div className="Create-chapters-decision-title-block">
                        <input type="text"
                               className="Create-chapters-decision-name"
                               placeholder={localization.create.chapters.decisionPlaceholder}
                               value={addDecisionTitle}
                               onChange={value => setAddDecisionTitle(value.target.value)}
                        />
                        <img src={addImg} alt="save" className="Create-chapters-decision-save" onClick = {() => {
                            let addDecision = decision

                            const counters = template.counter.map(counter => {
                                return{
                                    "name": counter.name,
                                    "count": 0
                                }
                            })

                            const id = v4()

                            addDecision.push({
                                id: id,
                                title: addDecisionTitle,
                                counters: counters
                            })

                            template.createDecision(props.id, id, addDecisionTitle).then()

                            setDecision(addDecision)
                            setAddDecisionTitle('')
                        }}/>
                    </div>
                    {
                        decision.map(decision => {
                            const decisionParams = Object.assign(decision, {"chapterId": props.id})
                            return <Decision key={decision.id} {...decisionParams} updateDecision={updateDecision}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
});

export default Chapter;