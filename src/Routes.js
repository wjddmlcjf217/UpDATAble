import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Home from "./Home";
import history from "./history";
import PatientForm from "./PatientForm";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch >
                    <Route path="/" exact component={Home} />
                    <Route path="/App" component={App} />
                    <Route path="/PatientForm" component={PatientForm} />
                </Switch>
            </Router>
        )
    }
}
