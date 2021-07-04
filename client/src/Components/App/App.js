import React from 'react';
import Header from "../Header/Header";
import {BrowserRouter, Route} from "react-router-dom";

import RegisterPage from '../AuthComponents/RegisterPage/RegisterPage'
import LoginPage from "../AuthComponents/LoginPage/LoginPage";
import ProfilePage from "../ProfilePage/ProfilePage";

const App = () => {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Route path="/register/" component={RegisterPage}/>
                <Route path="/login/" component={LoginPage}/>
                <Route path="/profile/" component={ProfilePage}/>
            </BrowserRouter>
        </div>
    )
}

export default App;