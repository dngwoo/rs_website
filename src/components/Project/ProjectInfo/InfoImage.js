import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  display: block;
  margin-bottom: 30px;
  -webkit-box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.5);
  width: 350px;
`;
export default class InfoImage extends Component {
  render() {
    return <Image src={this.props.image}></Image>;
  }
}
