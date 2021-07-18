import React from 'react';
import './App.scss'
import {observer} from "mobx-react-lite";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const App = observer(() => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
});

export default App;