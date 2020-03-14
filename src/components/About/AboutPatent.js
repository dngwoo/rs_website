import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Explanation = styled.div`
  font-size: 25px;
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 20px;
    background-color: #0a1d35;
  }
  @media all and (max-width: 1400px) {
    font-size: 20px;
  }
`;
const SubExplanation = styled.div`
  font-size: 20px;
  @media all and (max-width: 1400px) {
    font-size: 15px;
  }
`;

const NewContainer = styled(Container)`
  margin-bottom: 50px;
`;

export default class AboutPatent extends Component {
  render() {
    return (
      <NewContainer>
        <Explanation>{this.props.explanation}</Explanation>
        <SubExplanation>{this.props.subexplanation}</SubExplanation>
      </NewContainer>
    );
  }
}
