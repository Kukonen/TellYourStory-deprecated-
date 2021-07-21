import React from 'react';
import './ContactUsPage.scss'
import {useState} from "react";
import user from '../../Store/UserState'

const ContactUsPage = () => {

    const [titleProblem, setTitleProblem] = useState('')
    const [textProblem, setTextProblem] = useState('')

    const inputStyle = "Contact-input"
    const inputStyleError = "Contact-input Contact-input-error"

    const [titleError, setTitleError] = useState(false)
    const [textError, setTextError] = useState(false)

    return (
        <div>
            <div className="Headline-block">
                Contact Us
            </div>
            <div className="Contact-section">
                <div className="Contact-text-section">
                    <div className="Contact-text-block">
                        Title question
                    </div>
                </div>
                <div className="Contact-input-block">
                    <input className={titleError ? inputStyleError : inputStyle} type="text"
                        onChange={element => {
                            setTitleProblem(element.target.value)
                            user.problemError = false
                            setTitleError(false)
                        }}
                        placeholder={titleError ? "write title of question" : ""}
                    />
                </div>
            </div>
            <div className="Contact-section">
                <div className="Contact-text-section">
                    <div className="Contact-text-block">
                        Explain problem
                    </div>
                </div>
                <div className="Contact-input-block">
                    <textarea className={textError ? inputStyleError : inputStyle}
                           rows="4"
                           onChange={ element => {
                               setTextProblem(element.target.value)
                               user.problemError = false
                               setTextError(false)
                           }}
                           placeholder={textError ? "write explanation problem" : ""}
                    />
                </div>
            </div>
            <div className={user.problemError ? "Contact-error-section" : "Contact-error-section Contact-error-section-hide"}>
                <div className="Contact-error-block">
                    something went wrong
                </div>
            </div>
            <div className="Contact-button-section Contact-button-section-active">
                <button className="Contact-button" onClick={ () => {
                    alert("here")
                    if (titleProblem !== '' && textProblem !== '') {
                        alert("here 1")
                        user.sendProblem(titleProblem, textProblem).then()
                    }
                    else if (titleProblem === '') {
                        alert("here 2")
                        setTitleError(true)
                    } else if (textProblem === '') {
                        alert("here 3")
                        setTextError(true)
                    }
                }}>
                    Send problem
                </button>
            </div>
        </div>
    )
}

export default ContactUsPage;