import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import PATHS from "../common/paths";

class PrivateRoute extends Component {
  state = {
    token: localStorage.getItem("token"),
    isAuthenticated: true,
  };

  componentDidMount() {
    if (this.state.token) {
      let tokenExpiration = jwtDecode(this.state.token).exp;
      let dateNow = new Date();

      if (tokenExpiration < dateNow.getTime() / 1000) {
        this.setState({ isAuthenticated: false }, () => {
          localStorage.removeItem("token");
        });
      } else {
        this.setState({ isAuthenticated: true });
      }
    } else {
      this.setState({ isAuthenticated: false });
    }
  }

  render() {
    return (
      <>
        {this.state.isAuthenticated ? (
          <Route
            component={this.props.component}
            path={this.props.path}
            exact={this.props.exact}
          />
        ) : (
          <Redirect to={PATHS.LOGIN} />
        )}
      </>
    );
  }
}

export default PrivateRoute;
