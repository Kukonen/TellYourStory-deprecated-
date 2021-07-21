import React from 'react';
import './Questions.scss'
import {useState} from "react";

const Questions = () => {

    const questionType = [
        "Question type 1",
        "Question type 2"
    ]


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
                setQuestionMode(index)
            }
            }>
                {type}
            </div>
        )
    })

    const questions = [
        [
            {
                "title": "title 1",
                "text": "text by 1"
            },
            {
                "title": "title 2",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi asperiores at corporis dicta dignissimos dolore ea enim error facere itaque maxime necessitatibus nisi perspiciatis, praesentium repudiandae veniam vitae, voluptatum!"
            }
        ],
        [
            {
                "title": "title 2/1",
                "text": "text by 2"
            },
            {
                "title": "title 2/2",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi asperiores at corporis dicta dignissimos dolore ea enim error facere itaque maxime necessitatibus nisi perspiciatis, praesentium repudiandae veniam vitae, voluptatum!"
            }
        ]
    ]

    let questionsElements = [];

    for (let i = 0; i < questions.length; ++i) {
        questionsElements[i] = questions[i].map(question => {
            return (
                <div className="Question-content-block">
                    <div className="Question-content-block-title" onClick={ element => {
                        const parent = element.target.parentNode
                        const child = parent.childNodes[1]
                        console.log(child.classList.contains("Question-content-block-text-hidden"))
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

    console.log(questionsElements)

    return (
        <div className="Questions">
            <div className="Question-headline">Questions</div>
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
}

export default Questions;