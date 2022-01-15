import React, { Component } from "react";
import styled from "styled-components";

const InnerScreenContainer = styled.div`
 
  height: 100%;
  width: 100%;
  background-color: red;
  font-family: 'Josefin Sans', sans-serif;
`;

class InnerScreen extends Component {
  render() {
    return <InnerScreenContainer>{this.props.children}</InnerScreenContainer>;
  }
}

export default InnerScreen;
