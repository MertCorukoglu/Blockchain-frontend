import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PATHS from "../common/paths";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import PrivateRoute from "./PrivateRoute";

class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path={PATHS.HOME} exact component={Home} />
        <Route path={PATHS.LOGIN} component={Login} />
        <Route path={PATHS.REGISTER} component={Register} />
      </Switch>
    );
  }
}

export default withRouter(AppRoutes);
