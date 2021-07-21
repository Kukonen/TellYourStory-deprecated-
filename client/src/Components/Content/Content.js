import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './Content.scss'

import Main from '../../Pages/MainPage/MainPage'
import Register from '../../Pages/RegisterPage/RegisterPage'
import Login from '../../Pages/LoginPage/LoginPage'
import Questions from "../../Pages/Questions/Questions";

const Content = () => {
    return (
        <div className="Main">
            <div className="Main-section-side" />
            <div className="Main-section-content">
                <BrowserRouter >
                    <Route path="/" exact component={Main} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/questions" exact component={Questions} />
                </BrowserRouter>
            </div>
            <div className="Main-section-side" />
        </div>
    )
}

export default Content;