import React from 'react';
import './Footer.scss'
import {observer} from "mobx-react-lite";
import localizationState from "../../Store/LocalizationState";

const Footer = observer(() => {

    const localization = localizationState.text

    return (
        <div className="Footer">
            <div className="Footer-block">
                {localization.footer.author}
            </div>
        </div>
    )
})

export default Footer;