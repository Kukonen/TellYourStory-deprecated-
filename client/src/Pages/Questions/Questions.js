import React from 'react';
import './Questions.scss'
import {useState} from "react";
import {observer} from "mobx-react-lite";
import localizationState from "../../Store/LocalizationState";

const Questions = observer(() => {

    const localization = localizationState.text

    const questionType = localization.questions.questionType


    const [questionMode, setQuestionMode] = useState(0)

    const questionTypeStyle = "Questions-sidebar-block"
    const questionTypeStyleActive = "Questions-sidebar-block Questions-sidebar-block-active"

    let questionTypeElements = questionType.map((type, index) => {

        return (
            <div className={index !== 0 ? questionTypeStyle : questionTypeStyleActive} key={index} onClick={ element => {
                const parent = element.target.parentNode
                let childes = parent.childNodes
                childes.forEach(child => child.className = questionTypeStyle)
                element.target.className = questionTypeStyleActive
                parent.parentNode.parentNode.childNodes[1].childNodes
                    .forEach(parentElement => parentElement.childNodes.forEach(childElement => {
                        if (childElement.classList.contains("Question-content-block-text-visible")) {
                            childElement.classList.remove("Question-content-block-text-visible")
                            childElement.classList.add("Question-content-block-text-hidden")
                        }
                    })
                )
                setQuestionMode(index)
            }
            }>
                {type}
            </div>
        )
    })

    const questions = localization.questions.questions

    console.log(questions)

    let questionsElements = [];

    for (let i = 0; i < questions.length; ++i) {
        questionsElements[i] = questions[i].map(question => {
            return (
                <div className="Question-content-block">
                    <div className="Question-content-block-title" onClick={ element => {
                        const parent = element.target.parentNode
                        const child = parent.childNodes[1]
                        if (child.classList.contains("Question-content-block-text-hidden")) {
                            child.classList.remove("Question-content-block-text-hidden")
                            child.classList.add("Question-content-block-text-visible")
                        } else {
                            child.classList.remove("Question-content-block-text-visible")
                            child.classList.add("Question-content-block-text-hidden")
                        }
                    }}>
                        {question.title}
                    </div>
                    <div className="Question-content-block-text-hidden" >
                        {question.text}
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="Questions">
            <div className="Headline-block">{localization.questions.headline}</div>
            <div className="Question-content">
                <div className="Questions-sidebar-sections-primary">
                    <div className="Questions-sidebar-sections-secondary">
                        {questionTypeElements}
                    </div>

                </div>
                <div className="Questions-content-sections">
                    {
                        questionsElements[questionMode]
                    }
                </div>
            </div>
        </div>
    )
})

export default Questions;