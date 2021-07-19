import React from 'react';
import './App.scss'
import {observer} from "mobx-react-lite";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

const App = observer(() => {
    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    )
});

export default App;