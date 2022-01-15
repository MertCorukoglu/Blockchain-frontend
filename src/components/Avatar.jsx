import React, { Component } from "react";

class Avatar extends Component {
  render() {
    return <Avatar alt={this.props.alt} src={this.props.source} />;
  }
}

export default Avatar;
