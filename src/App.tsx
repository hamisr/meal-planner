import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Homepage from "./views/Homepage/Homepage";
import Dashboard from "./views/Dashboard/Dashboard";
import Recipes from "./views/Recipes/Recipes"
import "./App.css";
export class App extends Component {
  routes = [
    {
      path: "/",
      component: Homepage,
    },
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/recipes",
      component: Recipes,
    },
  ];
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/recipes"></Route>
            <Route path="/shopping-list"></Route> */}
            {this.routes.map((route) => (
              <Route
                path={route.path}
                component={route.component}
                exact={true}
              />
            ))}
            <Route path="*" component={Homepage}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
