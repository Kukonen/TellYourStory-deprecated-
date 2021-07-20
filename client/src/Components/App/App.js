import React from 'react';
import './App.scss'
import {observer} from "mobx-react-lite";
import user from '../../Store/UserState'

import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

const App = observer(() => {
    user.getInformation().then()

    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    )
});

export default App;