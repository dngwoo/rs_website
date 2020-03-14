import React, { Component } from "react";
import styled from "styled-components";

const Image = styled.img`
  margin-right: 100px;
  margin-bottom: 100px;
  width: 200px;
  height: 300px;
  -webkit-box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.5);
`;

export default class AboutPatentImg extends Component {
  render() {
    return <Image src={this.props.image}></Image>;
  }
}
