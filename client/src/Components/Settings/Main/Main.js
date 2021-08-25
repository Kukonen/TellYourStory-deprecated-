import React, {useState} from 'react'
import './Main.scss'
import {observer} from "mobx-react-lite";
import localizationState from '../../../Store/LocalizationState'
import saveImg from '../../../Images/save.svg'
import settingsState from '../../../Store/SettingsState'

const Main = observer(() => {
    const localization = localizationState.text
    const [name, setName] = useState('')

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
        </div>
    )
})

export default Main;