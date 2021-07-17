import React from 'react';
import './Header.scss'
import {observer} from "mobx-react-lite";
import Navbar from "./Navbar/Navbar";
import HeaderTitle from "./HeaderTitle/HeaderTitle";

const Header = observer(() => {
    return (
        <div>
            <HeaderTitle />
            <Navbar />
        </div>
    )
});

export default Header;