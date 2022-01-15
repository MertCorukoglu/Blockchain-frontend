import React, { Component } from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import ErrorImage from "../assests/images/error.png";
import { connect } from "react-redux";
import { setError } from "../redux/actions/commonActions";

const StyledIcon = styled(CloseIcon)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
`;

const StyledButton = styled.a`
  cursor: pointer;
`;

const StyledErrorImage = styled.img`
  width: 100px;
  height: 100px;
`;

const StyledSubContainer = styled.div`
  flex-direction: column;
  align-items: space-around;
  margin: 0px 20px 0px;
  width: 300px;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  width: auto;
  border-radius: 3px;
`;

const StyledHeader = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const StyledText = styled.p`
  font-size: 12px;
`;

class ServiceModal extends Component {
  state = {
    isOpen: false,
  };

  handleClose = () => {
    this.props.setError({ isError: false, message: "" });
  };

  render() {
    return (
      <div>
        <Modal open={this.props.isError} disableAutoFocus>
          <Container>
            <StyledButton onClick={this.handleClose}>
              <StyledIcon />
            </StyledButton>
            <StyledErrorImage src={ErrorImage} />
            <StyledSubContainer>
              <StyledHeader>HATA</StyledHeader>
              <StyledText>{this.props.errorMessage}</StyledText>
            </StyledSubContainer>
          </Container>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setError,
};

const mapStateToProps = (state) => {
  return {
    isError: state.common.isError,
    errorMessage: state.common.errorMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceModal);
