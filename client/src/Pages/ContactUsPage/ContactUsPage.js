import React from 'react';
import './ContactUsPage.scss'
import {useState} from "react";
import {observer} from "mobx-react-lite";
import user from '../../Store/UserState'

const ContactUsPage = observer(() => {

    const localization = user.text

    const [titleProblem, setTitleProblem] = useState('')
    const [textProblem, setTextProblem] = useState('')

    const inputStyle = "Contact-input"
    const inputStyleError = "Contact-input Contact-input-error"

    const [titleError, setTitleError] = useState(false)
    const [textError, setTextError] = useState(false)

    return (
        <div>
            <div className="Headline-block">
                {localization.contactUs.headline}
            </div>
            <div className="Contact-section">
                <div className="Contact-text-section">
                    <div className="Contact-text-block">
                        {localization.contactUs.title}
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
                           value={titleProblem}
                    />
                </div>
            </div>
            <div className="Contact-section">
                <div className="Contact-text-section">
                    <div className="Contact-text-block">
                        {localization.contactUs.explanation}
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
                              value={textProblem}
                    />
                </div>
            </div>
            <div className={user.problemError ? "Contact-error-section" : "Contact-error-section Contact-error-section-hide"}>
                <div className="Contact-error-block">
                    {localization.contactUs.error}
                </div>
            </div>
            <div className="Contact-button-section Contact-button-section-active">
                <button className="Contact-button" onClick={ () => {
                    if (titleProblem !== '' && textProblem !== '') {
                        user.sendProblem(titleProblem, textProblem).then(() => {
                            setTitleProblem('')
                            setTextProblem('')
                        })

                    }
                    else if (titleProblem === '') {
                        setTitleError(true)
                    } else if (textProblem === '') {
                        setTextError(true)
                    }
                }}>
                    {localization.contactUs.send}
                </button>
            </div>
        </div>
    )
})

export default ContactUsPage;