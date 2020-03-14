import React, { Component } from "react";
import styled from "styled-components";
const Image = styled.img`
  width: 150px;
  height: 30px;
  src: ${props => props.src};
  opacity: 0.8;
`;

export default class FooterLogo extends Component {
  render() {
    return <Image src={this.props.logo}></Image>;
  }
}
