import React, { Component } from "react";
import styled from "styled-components";

const Text = styled.span`
  font-size: 16px;
  color: #6a6a6a;
  margin-bottom: 15px;
`;
export default class FooterText extends Component {
  render() {
    return <Text>{this.props.text}</Text>;
  }
}
