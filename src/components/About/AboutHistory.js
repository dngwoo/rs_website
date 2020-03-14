import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export default class AboutHistory extends Component {
  render() {
    return (
      <Container>
        <Image src={this.props.image}></Image>
      </Container>
    );
  }
}
