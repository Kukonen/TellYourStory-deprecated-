import React from 'react';
import Header from "../Header/Header";
import {BrowserRouter, Route} from "react-router-dom";

import RegisterPage from '../RegisterPage/RegisterPage'

const App = () => {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Route path="/register/" component={RegisterPage}/>
            </BrowserRouter>
        </div>
    )
}

export default App;