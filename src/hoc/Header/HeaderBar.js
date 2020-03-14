import React, { Component } from "react";
import styled from "styled-components";
import HeaderOption from "./HeaderOption";
import HeaderLogo from "./HeaderLogo";
import HeaderLogoImage from "../public/images/Logo/logo_red.png";

const Container = styled.div`
  width: 100vw;
  height: 80px;
  background-color: transparent;
  position: fixed;
  z-index: 1;
`;

const OptionsContainer = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OptionsColumn = styled.div`
  display: flex;
  color: white;
`;

export default class HeaderBar extends Component {
  state = {
    logo: HeaderLogoImage, // 리액트에서는 상대경로로 경로를 정하게 되면 엑박이 뜨게된다. import해서 사용해줘야 오류가 해결된다.
    options: [
      { title: "HOME" },
      { title: "ABOUT" },
      { title: "PROJECT" },
      { title: "CONTACT" }
    ]
  };
  handleBg = title => {
    if (title === "HOME") {
      this.bg.style.backgroundColor = "transparent";
    } else {
      this.bg.style.backgroundColor = "black";
      console.log(this.bg);
    }
  };
  headerOptions = arr => {
    return arr.map((a, index) => {
      return (
        <HeaderOption
          title={a.title}
          key={index}
          index={index}
          showPage={this.props.showPage}
          handleBg={this.handleBg}
        />
      );
    });
  };

  bg;
  render() {
    return (
      <Container
        ref={c => {
          this.bg = c;
        }}
      >
        <OptionsContainer>
          <HeaderLogo logo={this.state.logo} />
          <OptionsColumn>
            {this.headerOptions(this.state.options)}
          </OptionsColumn>
        </OptionsContainer>
      </Container>
    );
  }
}
