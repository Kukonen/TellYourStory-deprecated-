import React, {useRef, useState} from 'react'
import './Main.scss'
import {observer} from "mobx-react-lite";
import localizationState from '../../../Store/LocalizationState'
import saveImg from '../../../Images/save.svg'
import settingsState from '../../../Store/SettingsState'

const Main = observer(() => {
    const localization = localizationState.text
    const [name, setName] = useState('')

    const avatarRef = useRef()

    const [avatarTitle, setAvatarTitle] = useState('')

    return (
        <div className="Settings-section">
            <div className="Settings-block">
                <div className="Settings-headline">{localization.settings.main.name}</div>
                <div className="Settings-input-block">
                    <input className="Settings-input" type="text" placeholder={localization.settings.main.newName}
                           onChange={value => setName(value.target.value)}
                    />
                    <img className="Settings-input-img" src={saveImg} alt="save" onClick={() => settingsState.changeName(name)}/>
                </div>

            </div>
            <div className="Settings-block">
                <div className="Settings-headline">{localization.settings.main.avatar}</div>
                <div className="Settings-input-block">
                    <input className="Settings-input-file"
                           type="file"
                           ref={avatarRef}
                           accept="image/*"
                           onChange={() => {
                               if (avatarRef.current.files[0].name)
                                   setAvatarTitle(avatarRef.current.files[0].name)
                           }}
                    />
                    <div className="Settings-input-instead-of-block"
                         onClick={() => avatarRef.current.click()}
                    >
                        {
                            avatarTitle === '' ?
                                localization.settings.main.selectAvatar :
                                avatarTitle
                        }
                    </div>
                    <img className="Settings-input-img" src={saveImg} alt="save"
                         onClick={() => {
                             if (avatarRef.current.files[0]) {
                                 if (avatarRef.current.files[0].size > 0) {
                                     settingsState.changeAvatar(avatarRef.current.files[0])
                                 }
                             }

                         }}
                    />
                </div>

            </div>
        </div>
    )
})

export default Main;