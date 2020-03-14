import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 50px;
  display: flex;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    transform: scaleX(1.1);
    color: #c52025;
  }
`;

export default class HeaderOption extends Component {
  render() {
    return (
      <Container
        onClick={() => {
          this.props.showPage(this.props.index); //key 값으로 받아올려고 했으나 받아올수가없음.
          this.props.handleBg(this.props.title);
        }}
      >
        <div>{this.props.title}</div>
      </Container>
    );
  }
}
