import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import CardMember from '../../app/CardMember';
import LandingPage from '../../app/LandingPage';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/card" component={CardMember}/>
            </Switch>
        );
    }
}

export default Router;