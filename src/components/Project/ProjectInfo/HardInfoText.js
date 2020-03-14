import React, { Component } from 'react';
import styled from 'styled-components';
const TextContainer = styled.div`
  padding: 20px;
`;
const Text = styled.div`
  margin-bottom: 100px;
  width: 400px;
  span {
    margin-bottom: 20px;
    display: block;
    font-size: 25px;
    letter-spacing: 2px;
    line-height: 40px;
    @media all and (max-width: 1400px) {
      font-size: 20px;
    }
  }
  span:nth-child(1) {
    color: #c52025;
    font-weight: bold;
    font-size: 30px;
  }
`;
export default class InfoText extends Component {
  render() {
    return (
      <TextContainer>
        <Text>
          <span>[기능 타이틀]</span>
          <span>{this.props.func}</span>
        </Text>
        <Text>
          <span>[적용기술 및 주요특징]</span>
          <span>{this.props.tech}</span>
        </Text>
      </TextContainer>
    );
  }
}
