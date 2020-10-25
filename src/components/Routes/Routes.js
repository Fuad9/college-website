import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home/Home";

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route to="/home" component={Home} />
                </Switch>
            </Router>
        </div>
    );
};

export default Routes;
