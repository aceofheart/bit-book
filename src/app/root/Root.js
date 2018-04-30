import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { App }  from "../App";
import { StartPage } from "../login/StartPage";
import UserRoute from '../../route/UserRoute';
import GuestRoute from '../../route/GuestRoute';


export class RootComponent extends Component {


    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/login" component={GuestRoute(StartPage)} />
                    <Route path="/" component={UserRoute(App)} />
                </Switch>
            </Fragment>

        )
    }
}