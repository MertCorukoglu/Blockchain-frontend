import React, { Component } from "react";
import styled from "styled-components";
import BackgroundImage from "../assests/images/login-background.jpg";

const BaseScreenContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  z-index: 0;
`;

const Layer = styled.div`
  background-color: rgba(4, 102, 43, 0.4);
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

class BaseScreen extends Component {
  render() {
    return <BaseScreenContainer><Layer>{this.props.children}</Layer></BaseScreenContainer>;
  }
}

export default BaseScreen;
