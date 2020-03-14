import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-right: 50px;
  margin-bottom: 50px;
  &:hover div {
    display: flex;
  }
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  -webkit-box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.5);
`;

const Overlay = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  margin-right: 50px;
  margin-bottom: 50px;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.6s;
  cursor: pointer;
  &:hover {
    background-color: rgb(0, 0, 0, 0.5);
  }
  span {
    color: white;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }
`;
export default class ImageBox extends Component {
  render() {
    return (
      <Container
        onClick={() => {
          // 상위 컴포넌트에게 true값을 준다
          this.props.handleState(true);
        }}
      >
        <Overlay onClick={this.props.onClick}>
          <span>{this.props.text}</span>
        </Overlay>
        <Image src={this.props.image} />
      </Container>
    );
  }
}
