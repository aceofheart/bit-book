import React, { Component, Fragment } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Route, Switch } from 'react-router-dom'
import { Footer } from './partials/Footer';
import { FeedPage } from "./feed/FeedPage";
import { PeoplePage } from './feed/people/PeoplePage';
import { PostDetails } from "./feed/PostDetails";
import { ProfilePage } from "./profile/ProfilePage";

import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"



class App extends Component {
  
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/post/:type/:id" component={PostDetails} />
          <Route exact path="/profile/:id" component={ProfilePage} />
          <Route exact path="/profile/" component={ProfilePage} />
          <Route exact path="/people/" component={PeoplePage} />
          <Route exact path="/" component={FeedPage} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}




export { App };
