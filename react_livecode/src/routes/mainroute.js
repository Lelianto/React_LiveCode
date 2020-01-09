import React from 'react';
import  { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from '../pages/index';
import SignIn from '../pages/signin';
import Profile from '../pages/Profile'

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/profile' component={Profile} />
                <Route path='/category/:category' component={Home} />
                <Route path='/others/:category' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute;