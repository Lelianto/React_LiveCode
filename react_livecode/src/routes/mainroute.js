import React from 'react';
import  { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/homepage';
import Romance from '../pages/romance';
import Action from '../pages/action';
import Fiction from '../pages/fiction';
import Comedy from '../pages/comedy';
import SignIn from '../pages/signin';
import Profile from '../pages/Profile'

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/action' component={Action} />
                <Route exact path='/romance' component={Romance} />
                <Route exact path='/fiction' component={Fiction} />
                <Route exact path='/comedy' component={Comedy} />
                <Route exact path='/login' component={SignIn} />
                <Route exact path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute;