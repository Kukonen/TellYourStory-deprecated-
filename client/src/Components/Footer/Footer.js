import React from 'react';
import './Footer.scss'
import {observer} from "mobx-react-lite";
import user from '../../Store/UserState'

const Footer = observer(() => {

    const localization = user.text

    return (
        <div className="Footer">
            <div className="Footer-block">
                {localization.footer.author}
            </div>
        </div>
    )
})

export default Footer;