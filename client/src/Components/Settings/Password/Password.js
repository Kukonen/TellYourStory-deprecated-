import React, {useState} from 'react'
import './Password.scss'
import {observer} from "mobx-react-lite";
import saveImg from "../../../Images/save.svg";
import fillImg from '../../../Images/fillvoidtopas.svg'
import settingsState from "../../../Store/SettingsState";
import localizationState from '../../../Store/LocalizationState'

const Password = observer(() => {
    const localization = localizationState.text
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    return (
        <div>
            <div className="Settings-block">
                <div className="Settings-headline">{localization.settings.main.name}</div>
                <div className="Settings-input-block">
                    <input className="Settings-input" type="password" placeholder={localization.settings.password.oldPassword}
                           onChange={value => setOldPassword(value.target.value)}
                    />
                    <img className="Settings-input-img" src={fillImg} alt="save" onClick={() => settingsState.changePassword(oldPassword, newPassword)}/>
                </div>
                <div className="Settings-input-block">
                    <input className="Settings-input" type="password" placeholder={localization.settings.password.newPassword}
                           onChange={value => setNewPassword(value.target.value)}
                    />
                    <img className="Settings-input-img" src={saveImg} alt="save" onClick={() => settingsState.changePassword(oldPassword, newPassword)}/>
                </div>

            </div>
        </div>
    )
})

export default Password;