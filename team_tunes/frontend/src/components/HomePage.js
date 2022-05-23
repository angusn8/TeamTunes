import React, {Component} from 'react';
import {render} from "react-dom";
import JoinRoomPage from "./JoinRoomPage";
import CreateRoomPage from "./CreateRoomPage"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <h1>This is the Home Page</h1>
          </Route>
          <Route path='/join' component={JoinRoomPage} />
          <Route path='/create' component={CreateRoomPage} />
        </Switch>
      </Router>
    );
  }
}
