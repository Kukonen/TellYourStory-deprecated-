import React from 'react';
import './Chapters.scss'
import {useState} from "react";
import {observer} from "mobx-react-lite";
import arrowDownImg from "../Img/arrowdown.svg";
import saveImg from "../Img/save.svg";
import addImg from "../Img/add.svg";
import user from "../../../Store/UserState";

const Chapter = observer((props) => {
    const localization = user.text
    const [hide, setHide] = useState(true)
    return (
        <div>
            <div key = {props.id}>
                <div className="Create-chapters-section-head">
                    <input type="text" className="Create-chapters-input-title"
                           placeholder={localization.create.chapters.title}
                           defaultValue={props.title}
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
                    <img src={saveImg} alt="add" className="Create-chapters-input-button" />
                </div>
                <div className={ hide ? "Create-chapters-section-body Create-chapter-hide-section" : "Create-chapters-section-body"}>
                    <textarea
                        placeholder={localization.create.chapters.text}
                        className="Create-chapters-textarea-text"
                        rows={10}
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