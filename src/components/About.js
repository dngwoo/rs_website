import React, { Component } from "react";
import styled from "styled-components";
import AboutTitle from "./About/AboutTitle";
import AboutField from "./About/AboutField";
import AboutSummary from "./About/AboutSummary";
import AboutPatent from "./About/AboutPatent";
import AboutPatentImg from "./About/AboutPatentImg";
import PatentImage1 from "../hoc/public/images/Patent/1.jpeg";
import PatentImage2 from "../hoc/public/images/Patent/2.jpeg";
import PatentImage3 from "../hoc/public/images/Patent/3.jpeg";
import PatentImage4 from "../hoc/public/images/Patent/4.jpeg";
import PatentImage5 from "../hoc/public/images/Patent/5.jpeg";
import AboutHistory from "./About/AboutHistory";
import HistoryImage from "../hoc/public/images/History/history.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  flex-wrap: wrap;
`;

const CenterContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const Space = styled.div`
  margin-top: 200px;
  margin-bottom: ${props => props.marginbottom};
`;

export default class About extends Component {
  state = {
    fields: [
      { text: "Bluetooth LE Module" },
      { text: "Mesh Network" },
      { text: "Beacon" },
      { text: "IoT Device" },
      { text: "Mobile App" },
      { text: "Motion Sensor Fusion" }
    ],
    title: [
      {
        text: "개요",
        subtext: "ABOUT US"
      },
      {
        text: "사업분야",
        subtext: "MAJOR BUSINESS"
      },
      {
        text: "특허등록",
        subtext: "PATENT REGISTRATION"
      },
      {
        text: "특허출원",
        subtext: "PATENT APPLICATION"
      },
      {
        text: "회사연혁",
        subtext: "COMPANY HISTORY"
      }
    ],
    patent: [
      {
        explanation:
          "센서 모듈의 데이터 송수신을 이용한 모션 캡쳐 시스템 및 이를 이용한 모션 캡쳐 방법",
        subexplanation: "(등록일자: 2016.08.30, 출원번호: 10-2015-0083702)"
      },
      {
        explanation:
          "유저 설정 방식의 범위 설정형 모니터링 시스템 및 시스템 구동방법",
        subexplanation: "(등록일자: 2016.08.30, 출원번호: 10-2015-0122238)"
      },
      {
        explanation: "9축 센서 모듈을 이용한 차량 블랙박스 시스템",
        subexplanation: "(등록일자: 2016.11.29, 출원번호: 10-2015-0111792)"
      },
      {
        explanation: "입력센서를 이용한 고저데이터반영 입체지도 맵핑 방법",
        subexplanation: "(등록일자: 2018.05.18, 출원번호: 10-2016-0124488)"
      },
      {
        explanation:
          "멀티 웨어러블 센서 기반의 싱크로나이제이션 체크를 통한 골프 스윙자세 교정 디바이스 및 시스템, 그리고 이의제어방법",
        subexplanation: "(등록일자: 2018.10.02, 출원번호: 10-2017-0041877)"
      }
    ],
    patentApp: [
      {
        explanation: "신호 정보를 반영한 최적 경로 안내 시스템",
        subexplanation: "(출원번호: 10-2015-0115042)"
      },
      {
        explanation: "신호등 신호감지에 의한 신호변경 운전자 알림 시스템",
        subexplanation: "(출원번호: 10-2015-0115032)"
      },
      {
        explanation:
          "다수의 신호 송출기 및 신호 탐색기 기반의 위치특정 시스템 및 이를 이용한 위치 특정 방법",
        subexplanation: "(출원번호: 10-2015-0083582)"
      }
    ],
    patentimage: [
      { img: PatentImage1 },
      { img: PatentImage2 },
      { img: PatentImage3 },
      { img: PatentImage4 },
      { img: PatentImage5 }
    ],
    historyimage: HistoryImage
  };

  handleField = arr => {
    return arr.map((a, index) => {
      return <AboutField key={index} field={a.text} />;
    });
  };
  handlePatent = arr => {
    return arr.map((a, index) => {
      return (
        <AboutPatent
          key={index}
          explanation={a.explanation}
          subexplanation={a.subexplanation}
        />
      );
    });
  };

  handlePatentImage = arr => {
    return arr.map((a, index) => {
      return <AboutPatentImg key={index} image={a.img} />;
    });
  };

  render() {
    return (
      <Container>
        <Space>
          <AboutTitle
            title={this.state.title[0].text}
            subtitle={this.state.title[0].subtext}
          ></AboutTitle>
          <AboutSummary></AboutSummary>
        </Space>
        <Space>
          <AboutTitle
            title={this.state.title[1].text}
            subtitle={this.state.title[1].subtext}
          ></AboutTitle>
          <FlexContainer>{this.handleField(this.state.fields)}</FlexContainer>
        </Space>
        <Space>
          <AboutTitle
            title={this.state.title[2].text}
            subtitle={this.state.title[2].subtext}
          ></AboutTitle>
          <CenterContainer>
            {this.handlePatent(this.state.patent)}
          </CenterContainer>
          <FlexContainer>
            {this.handlePatentImage(this.state.patentimage)}
          </FlexContainer>
        </Space>
        <Space>
          <AboutTitle
            title={this.state.title[3].text}
            subtitle={this.state.title[3].subtext}
          ></AboutTitle>
          <CenterContainer>
            {this.handlePatent(this.state.patentApp)}
          </CenterContainer>
        </Space>
        <Space marginbottom="200px">
          <AboutTitle
            title={this.state.title[4].text}
            subtitle={this.state.title[4].subtext}
          ></AboutTitle>
          <AboutHistory image={this.state.historyimage}></AboutHistory>
        </Space>
      </Container>
    );
  }
}
