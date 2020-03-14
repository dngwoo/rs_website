import React, { Component } from "react";
import FooterLogoImage from "../public/images/Logo/logo_white.png";
import styled from "styled-components";
import FooterLogo from "./FooterLogo";
import FooterText from "./FooterText";

const Container = styled.div`
  height: 300px;
  background-color: #2d2d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default class Footer extends Component {
  state = {
    footertext: [
      { text: "(주)리커시브소프트" },
      { text: "Company's Number: 070-4108-0131" },
      { text: "Fax: 070-4108-0133" },
      { text: "E-mail: recursive@recursive@recursivesoft.com" },
      { text: "부산광역시 해운대구 센텀중앙로 90, 1603호" }
    ],
    footerlogo: FooterLogoImage
  };

  handleText = arr => {
    return arr.map((a, index) => {
      return <FooterText key={index} text={a.text} />;
    });
  };
  render() {
    return (
      <Container>
        <FooterLogo logo={this.state.footerlogo}> </FooterLogo>
        <TextContainer> {this.handleText(this.state.footertext)}</TextContainer>
      </Container>
    );
  }
}
