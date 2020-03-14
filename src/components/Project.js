import React, { Component } from "react";
import styled from "styled-components";
import ImageBox from "./Project/ImageBox";
import ProjectTitle from "./Project/ProjectTitle";
import SImage1_1 from "../hoc/public/images/SoftWare/software-1/1.jpg";
import SImage2_1 from "../hoc/public/images/SoftWare/software-2/1.jpg";
import SImage3_1 from "../hoc/public/images/SoftWare/software-3/1.jpg";
import SImage4_1 from "../hoc/public/images/SoftWare/software-4/1.jpg";
import SImage5_1 from "../hoc/public/images/SoftWare/software-5/1.jpg";
import SImage6_1 from "../hoc/public/images/SoftWare/software-6/1.jpg";
import HImage1_1 from "../hoc/public/images/HardWare/hardware-1/1.jpg";
import HImage2_1 from "../hoc/public/images/HardWare/hardware-2/1.jpg";
import HImage3_1 from "../hoc/public/images/HardWare/hardware-3/1.jpg";
import HImage4_1 from "../hoc/public/images/HardWare/hardware-4/1.jpg";
import HImage5_1 from "../hoc/public/images/HardWare/hardware-5/1.jpg";
import HImage6_1 from "../hoc/public/images/HardWare/hardware-6/1.jpg";
import HImage7_1 from "../hoc/public/images/HardWare/hardware-7/1.jpg";

const Container = styled.div`
  padding-top: 80px;
`;

const ContentContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default class Project extends Component {
  state = {
    projectTitle: "RecurSiveSoft ProJect",
    projectSubTitle: [
      { subtitle: "SoftWare Service" },
      { subtitle: "Hardware Service" }
    ],
    softwareImage: [
      { image: SImage1_1, text: "DoSome" },
      { image: SImage2_1, text: "SmarTic" },
      { image: SImage3_1, text: "VisiBLE" },
      { image: SImage4_1, text: "AirSensor" },
      { image: SImage5_1, text: "VC 디바이스" },
      { image: SImage6_1, text: "부산항대교 수면상 높이" }
    ],
    hardwareImage: [
      { image: HImage1_1, text: "ArtMon" },
      { image: HImage2_1, text: "Solar Beacon" },
      { image: HImage3_1, text: "Bluetooth LE Relay" },
      { image: HImage4_1, text: "Bluetooth LE IoT Living Lab Kit" },
      {
        image: HImage5_1,
        text: "잠수사의 건강상태를 지속적으로 체크하는 제품"
      },
      {
        image: HImage6_1,
        text: "가속도, 자이로, 지자기 등 여러 센서들을 내장한 지능형 로봇"
      },
      {
        image: HImage7_1,
        text: "터널 내 환경 및 위치 데이터 제공 저전력 안전 보완 시스템"
      }
    ],
    page: 0
  };
  handleImageBox = arr => {
    return arr.map((a, index) => {
      return <ImageBox key={index} image={a.image} text={a.text} />;
    });
  };

  render() {
    return (
      <Container>
        <ProjectTitle
          title={this.state.projectTitle}
          subtitle={this.state.projectSubTitle[0].subtitle}
        ></ProjectTitle>
        <ContentContainer>
          {this.handleImageBox(this.state.softwareImage)}
        </ContentContainer>
        <ProjectTitle
          subtitle={this.state.projectSubTitle[1].subtitle}
        ></ProjectTitle>
        <ContentContainer>
          {this.handleImageBox(this.state.hardwareImage)}
        </ContentContainer>
      </Container>
    );
  }
}
