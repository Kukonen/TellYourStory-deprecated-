import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './Content.scss'

import Main from '../../Pages/MainPage/MainPage'
import Register from '../../Pages/RegisterPage/RegisterPage'
import Login from '../../Pages/LoginPage/LoginPage'
import Questions from "../../Pages/Questions/Questions";
import ContactUs from "../../Pages/ContactUsPage/ContactUsPage"
import Create from '../../Pages/CreatePage/CreatePage'
import Profile from "../../Pages/ProfilePage/ProfilePage";
import Setting from "../../Pages/SettingsPage/SettingsPage"
import Story from "../../Pages/StoryPage/StoryPage";

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
                    <Route path="/contact" exact component={ContactUs}/>
                    <Route path="/create" exact component={Create} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/settings" exact component={Setting} />
                    <Route path="/story" component={Story} />
                </BrowserRouter>
            </div>
            <div className="Main-section-side" />
        </div>
    )
}

export default Content;