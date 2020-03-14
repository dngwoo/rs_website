import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 50px;
  span:nth-child(1) {
    margin-bottom: 40px;
    @media all and (min-width: 850px) and (max-width: 1400px) {
      font-size: 0.9em;
    }
    @media all and (max-width: 849px) {
      font-size: 0.8em;
    }
  }
  span:nth-child(2) {
    font-size: 40px;
    @media all and (max-width: 1400px) {
      font-size: 30px;
    }
  }
`;

const Title = styled.span`
  font-weight: bold;
  color: #0b1d36;
  letter-spacing: 5px;
  margin-bottom: 5px;
  text-align: center;
  margin-bottom: 10px;
`;

export default class ProjectTitle extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.title} </Title>
        <Title>{this.props.subtitle}</Title>
      </Container>
    );
  }
}
