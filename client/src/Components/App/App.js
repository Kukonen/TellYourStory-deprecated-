import React from 'react';
import Header from "../Header/Header";
import {BrowserRouter, Route} from "react-router-dom";

import RegisterPage from '../RegisterPage/RegisterPage'
import LoginPage from "../LoginPage/LoginPage";

const App = () => {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Route path="/register/" component={RegisterPage}/>
                <Route path="/login/" component={LoginPage}/>
            </BrowserRouter>
        </div>
    )
}

export default App;