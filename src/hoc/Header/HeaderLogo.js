import React, { Component } from "react";

export default class HeaderLogo extends Component {
  render() {
    return <img src={this.props.logo} alt="RecursiveSoft brand logo"></img>;
  }
}
