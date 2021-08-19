import React, {useRef, useState} from 'react'
import './Imgs.scss'
import {observer} from "mobx-react-lite";
import localizationState from "../../../Store/LocalizationState";
import template from '../../../Store/TemplateState'
import saveImg from '../Img/save.svg'
import questionImg from '../Img/question.svg'
import okeyImg from '../Img/okey.svg'

const Images = observer(() => {
    const localization = localizationState.text

    const buttonFoundStyle = "Create-images-button Create-images-button-found"
    const buttonNotFoundStyle = "Create-images-button Create-images-button-not-found"

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
                <img src={saveImg} alt="save" className="Create-images-button"/>
                <img alt="status"
                     src={template.images.avatar ? okeyImg : questionImg}
                     className={template.images.avatar ? buttonFoundStyle : buttonNotFoundStyle}
                />
            </div>
            <div className="Create-images-section">
                <div className="Create-images-block">
                    {localization.create.images.background}
                </div>
                <input type="file" className="Create-images-input"
                       ref={backgroundRef}
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
                <img src={saveImg} alt="save" className="Create-images-button"/>
                <img alt="status"
                     src={template.images.avatar ? okeyImg : questionImg}
                     className={template.images.avatar ? buttonFoundStyle : buttonNotFoundStyle}
                />
            </div>
        </div>
    )
})

export default Images;