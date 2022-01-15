import React, { Component } from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import ErrorImage from "../assests/images/error.png";

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

class ErrorModal extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <div>
        <Modal open={this.props.isOpen} disableAutoFocus>
          <Container>
            <StyledButton onClick={this.props.handleClose}>
              <StyledIcon />
            </StyledButton>
            <StyledErrorImage src={ErrorImage} />
            <StyledSubContainer>
              <StyledHeader>HATA</StyledHeader>
              <StyledText>{this.props.text}</StyledText>
            </StyledSubContainer>
          </Container>
        </Modal>
      </div>
    );
  }
}

export default ErrorModal;
