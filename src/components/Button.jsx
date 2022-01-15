import React, { Component } from "react";
import Button from "@mui/material/Button";
import { MATERIAL_TYPES } from "../common/common";
import styled from 'styled-components';


const StyledButton = styled(Button)`
    width: 300px;
    height: 40px;
`;

class ButtonComponent extends Component {
  handleButtonBorders = () => {
    if (this.props.buttonBorder) {
      return this.props.buttonBorder;
    } else {
      return MATERIAL_TYPES.OUTLINED;
    }
  };

  render() {
    return (
      <StyledButton onClick={this.props.onClick} variant={this.handleButtonBorders()}>{this.props.label}</StyledButton>
    );
  }
}

export default ButtonComponent;
