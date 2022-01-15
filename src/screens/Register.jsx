import React, { Component } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import { ICON_TYPES, INPUT_TYPES } from "../common/common";
import Button from "../components/Button";
import { registerRequest } from "../redux/actions/userActions";
import { connect } from "react-redux";
import PreLoginScreen from "../components/PreLoginScreen";
import ErrorModal from "../components/ErrorModal";
import PATHS from "../common/paths";

const Header = styled.p`
  font-size: 30px;
`;

const LoginButton = styled.a`
  cursor: pointer;
`;

const LoginContainer = styled.p`
  font-size: 12px;
  color: blue;
`;

class Register extends Component {
  state = {
    email: "",
    password: "",
    rePassword: "",
    isError: false,
    errorText: "",
  };
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    if (this.state.password === this.state.rePassword) {
      this.props.registerRequest({
        username: this.state.email,
        password: this.state.password,
      });
    } else {
      this.setState({
        isError: true,
        errorText: "Şifreler uyuşmamaktadır.",
      });
    }
  };

  handleCloseModal = () => {
    this.setState({
      isError: false,
      errorText: "",
      password: "",
      rePassword: "",
    });
  };

  handleGoLogin = () => {
    this.props.history.push(PATHS.LOGIN);
  };

  componentDidUpdate() {
    if (Object.keys(this.props.registerResponse).length) {
      this.props.history.push(PATHS.LOGIN);
    }
  }

  render() {
    return (
      <PreLoginScreen>
        <Header>Kayıt Ol</Header>
        <TextInput
          name="email"
          onChange={this.handleInputChange}
          showIcon
          label="E-Posta"
          iconType={ICON_TYPES.EMAIL}
        />
        <TextInput
          showIcon
          label="Şifre"
          type={INPUT_TYPES.PASSWORD}
          iconType={ICON_TYPES.PASSWORD_EYE}
          onChange={this.handleInputChange}
          name="password"
        />
        <TextInput
          showIcon
          label="Şifre Tekrar"
          type={INPUT_TYPES.PASSWORD}
          iconType={ICON_TYPES.PASSWORD_EYE}
          onChange={this.handleInputChange}
          name="rePassword"
        />
        <Button onClick={this.handleSubmit} label="KAYIT OL" />
        <LoginButton onClick={this.handleGoLogin}>
          <LoginContainer>Giriş Yap</LoginContainer>
        </LoginButton>
        <ErrorModal
          isOpen={this.state.isError}
          text={this.state.errorText}
          handleClose={this.handleCloseModal}
        />
      </PreLoginScreen>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    registerResponse: state.user.registerResponse,
  };
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
