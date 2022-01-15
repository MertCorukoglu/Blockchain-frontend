import React, { Component } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { ICON_TYPES, INPUT_TYPES, MATERIAL_TYPES } from "../common/common";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const StyledTextField = styled(TextField)`
  background-color: white;
  width: 300px !important;
  margin: 10px !important;
`;

class TextInput extends Component {
  state = {
    showPassword: false,
  };

  handleIcon = () => {
    if (this.props.showIcon) {
      if (this.props.iconType === ICON_TYPES.EMAIL) {
        return {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        };
      } else if (this.props.iconType === ICON_TYPES.PASSWORD_EYE) {
        return {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={this.handleClickShowPassword}
                onMouseDown={this.handleMouseDownPassword}
                edge="end"
              >
                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        };
      }
    }
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleType = () => {
    if (this.props.type) {
      if (this.props.type === INPUT_TYPES.PASSWORD && this.state.showPassword) {
        return;
      }

      return this.props.type;
    }
  };

  handleInputBorders = () => {
    if (this.props.inputBorder) {
      return this.props.inputBorder;
    } else {
      return MATERIAL_TYPES.OUTLINED;
    }
  };

  render() {
    return (
      <StyledTextField
        label={this.props.label}
        InputProps={this.handleIcon()}
        color="success"
        size="small"
        variant={this.handleInputBorders()}
        type={this.handleType()}
        onChange={this.props.onChange}
        name = {this.props.name}
      />
    );
  }
}

export default TextInput;
