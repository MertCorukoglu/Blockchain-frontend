import React, { Component } from "react";
import styled from "styled-components";
import { Box } from "@mui/system";
import BaseScreen from "../components/BaseScreen";


const LoginContainer = styled(Box)`
  display: flex;
  width: 350px;
  height: 50vh;
  background: linear-gradient(#4268ff, #f7f7f2);
  border-radius: 3px;
  margin: 0px 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


class PreLoginScreen extends Component {
  render() {
    return (
      <BaseScreen>
        <LoginContainer>
            {this.props.children}
        </LoginContainer>
      </BaseScreen>
    );
  }
}

export default PreLoginScreen;
