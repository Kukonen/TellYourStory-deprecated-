import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import User from './user/User';
import Admin from './admin/Admin';


ReactDOM.render(
    <div>
        <BrowserRouter>
            <Route path = "/" component={User}/>
            <Route path = "/admin" component={Admin}/>
        </BrowserRouter>
    </div>,
  document.getElementById('root')
);
