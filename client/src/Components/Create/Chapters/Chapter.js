import React from 'react';
import './Chapters.scss'
import {useState} from "react";
import {observer} from "mobx-react-lite";
import arrowDownImg from "../Img/arrowdown.svg";
import saveImg from "../Img/save.svg";
import addImg from "../Img/add.svg";
import user from "../../../Store/UserState";
import template from "../../../Store/TemplateState";

const Chapter = observer((props) => {
    const localization = user.text
    const [hide, setHide] = useState(true)
    const [title, setTitle] = useState(props.title)
    const [text, setText] = useState(props.text)
    const [decision, setDecision] = useState(props.decision)

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
                {/*<div className={hide ? "Create-chapters-section-footer Create-chapter-hide-section" : "Create-chapters-section-footer"}>*/}
                {/*    <div className="Create-chapters-decision-title-block">*/}
                {/*        <input type="text"*/}
                {/*               className="Create-chapters-decision-name"*/}
                {/*               placeholder={localization.create.chapters.decisionPlaceholder}*/}
                {/*        />*/}
                {/*        <img src={addImg} alt="save" className="Create-chapters-decision-save"/>*/}

                {/*    </div>*/}
                {/*    {*/}
                {/*        counters.map(counter => {*/}
                {/*            return (*/}
                {/*                <div className="Create-chapters-decision-counter" key = {counter.id}>*/}
                {/*                    <div className="Create-chapters-decision-counter-name">*/}
                {/*                        {counter.name}*/}
                {/*                    </div>*/}
                {/*                    <input type="number" className="Create-chapters-decision-counter-value"*/}
                {/*                           defaultValue={0}*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        })*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        </div>
    )
});

export default Chapter;