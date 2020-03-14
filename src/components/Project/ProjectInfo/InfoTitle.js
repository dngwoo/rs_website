import React, { Component } from 'react';
import styled from 'styled-components';
const Title = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  span {
    font-size: 40px;
    font-weight: bold;
  }
`;
export default class InfoTitle extends Component {
  render() {
    return (
      <Title>
        <span>{this.props.title}</span>
      </Title>
    );
  }
}
