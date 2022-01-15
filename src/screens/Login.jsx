import React, { Component } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import { ICON_TYPES, INPUT_TYPES } from "../common/common";
import Button from "../components/Button";
import { loginRequest, getProfileRequest } from "../redux/actions/userActions";
import { getPostsRequest } from "../redux/actions/postActions"
import { connect } from "react-redux";
import PreLoginScreen from "../components/PreLoginScreen";
import ErrorModal from "../components/ErrorModal";
import PATHS from "../common/paths";

const Header = styled.p`
  font-size: 30px;
`;

const RegisterButton = styled.a`
  cursor: pointer;
`;

const RegisterContainer = styled.p`
  font-size: 12px;
  color: blue;
`;

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.getProfileRequest();
    }
    if (Object.keys(this.props.profileResponse).length) {
      this.props.history.push(PATHS.HOME);
    }
  }

  componentDidUpdate() {
    if (localStorage.getItem("token")) {
      this.props.getProfileRequest();
    }
    if (Object.keys(this.props.profileResponse).length) {
      this.props.history.push(PATHS.HOME);
    }
  }

  handleSubmit = () => {
    this.props.loginRequest({
      username: this.state.email,
      password: this.state.password,
    });
  };

  handleGoRegister = () => {
    this.props.history.push(PATHS.REGISTER);
  };

  render() {
    return (
      <PreLoginScreen>
        <Header>Giriş Yap</Header>

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
        <Button onClick={this.handleSubmit} label="GİRİŞ" />
        <RegisterButton onClick={this.handleGoRegister}>
          <RegisterContainer>Kayıt Ol</RegisterContainer>
        </RegisterButton>
        <ErrorModal open />
      </PreLoginScreen>
    );
  }
}

const mapDispatchToProps = {
  loginRequest,
  getProfileRequest,
  getPostsRequest
};
const mapStateToProps = (state) => {
  return {
    loginResponse: state.user.loginResponse,
    profileResponse: state.user.profileResponse,
    postResponse: state.post.postResponse
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
