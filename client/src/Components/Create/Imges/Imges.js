import React, {useRef, useState} from 'react'
import './Imgs.scss'
import {observer} from "mobx-react-lite";
import localizationState from "../../../Store/LocalizationState";
import template from '../../../Store/TemplateState'
import saveImg from '../../../Images/save.svg'
import questionImg from '../../../Images/question.svg'
import okeyImg from '../../../Images/okey.svg'

const Images = observer(() => {
    const localization = localizationState.text

    const buttonFoundStyle = "Create-images-button Create-images-button-found"
    const buttonNotFoundStyle = "Create-images-button Create-images-button-not-found"
    const buttonHidden = "Create-images-button-hidden"

    const avatarRef = useRef()
    const [avatarTitle, setAvatarTitle] = useState('')

    const backgroundRef = useRef()
    const [backgroundTitle, setBackgroundTitle] = useState('')
    
    return (
        <div>
            <div className="Headline-block">{localization.create.images.headline}</div>
            <div className="Create-images-section">
                <div className="Create-images-block">
                    {localization.create.images.avatar}
                </div>
                <input type="file" className="Create-images-input"
                       ref={avatarRef}
                       accept="image/*"
                       onChange={() => {
                           if (avatarRef.current.files[0].name)
                            setAvatarTitle(avatarRef.current.files[0].name)
                       }}
                />
                <div className="Create-images-input-block"
                     onClick={() => avatarRef.current.click()}
                >
                    {
                        avatarTitle === '' ?
                            localization.create.images.selectFile :
                                avatarTitle
                    }
                </div>
                <img src={saveImg} alt="save" className="Create-images-button"
                     onClick={() => {
                         if (avatarRef.current.files[0]) {
                             if (avatarRef.current.files[0].size > 0) {
                                 template.changeImage("avatar", avatarRef.current.files[0])
                             }
                         }

                     }}
                />
                <img alt="status"
                     src={questionImg}
                     className={template.images.avatar ? buttonHidden : buttonNotFoundStyle}
                />
                <img alt="status"
                     src={okeyImg}
                     className={template.images.avatar ? buttonFoundStyle : buttonHidden}
                />
            </div>
            <div className="Create-images-section">
                <div className="Create-images-block">
                    {localization.create.images.background}
                </div>
                <input type="file" className="Create-images-input"
                       ref={backgroundRef}
                       accept="image/*"
                       onChange={() => {
                           if (backgroundRef.current.files[0].name)
                               setBackgroundTitle(backgroundRef.current.files[0].name)
                       }}
                />
                <div className="Create-images-input-block"
                     onClick={() => backgroundRef.current.click()}
                >
                    {
                        backgroundTitle === '' ?
                            localization.create.images.selectFile :
                                backgroundTitle
                    }
                </div>
                <img src={saveImg} alt="save" className="Create-images-button"
                     onClick={() => {
                         if (backgroundRef.current.files[0]) {
                             if (backgroundRef.current.files[0].size > 0) {
                                 template.changeImage("background", backgroundRef.current.files[0])
                             }
                         }

                     }}
                />
                <img alt="status"
                     src={questionImg}
                     className={template.images.background ? buttonHidden : buttonNotFoundStyle}
                />
                <img alt="status"
                     src={okeyImg}
                     className={template.images.background ? buttonFoundStyle : buttonHidden}
                />
            </div>
        </div>
    )
})

export default Images;