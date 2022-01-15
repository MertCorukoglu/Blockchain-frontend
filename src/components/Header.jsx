import { Avatar } from "@mui/material";
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";


const HeaderContainer = styled.div`
  height: 10%;
  width: 100%;
  position: sticky;
  //background-color: transparent;
  background-color: blue;
  top: 0;
  display: flex;
  // justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 3;
  background-color:white;
 // margin: 15px;
`;
const Middle = styled.div`
  flex: 6;
  // margin: 15px;
`;
const Right = styled.p`
  flex: 3;
  background-color:white;

   margin: 15px;
   display: flex;
    align-items: center;
   cursor: pointer;
`;

const Username = styled.p``;


const StyledAvatar = styled(Avatar)`
  margin: 0px 10px 5px 0px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Left>asdsdf</Left>
        <Middle>sadfasdf</Middle>
        <Right>
          <StyledAvatar />
          <Username>{this.props.profileResponse?.username}</Username>
        </Right>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileResponse: state.user.profileResponse,
    postResponse:state.post.postResponse
  };
};

export default connect(mapStateToProps, null)(Header);
