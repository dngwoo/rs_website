import React, { Component } from "react";
import styled from "styled-components";
const TextContainer = styled.div`
  padding: 20px;
`;
const Text = styled.div`
  margin-bottom: 100px;
  width: 400px;
  span {
    margin-bottom: 20px;
    display: block;
    font-size: 30px;
    letter-spacing: 2px;
    line-height: 40px;
  }
  span:nth-child(1) {
    color: #c52025;
    font-weight: bold;
    font-size: 35px;
  }
`;
export default class InfoText extends Component {
  render() {
    return (
      <TextContainer>
        <Text>
          <span>[기능 타이틀]</span>
          <span>ArtMon</span>
        </Text>
        <Text>
          <span>[적용기술 및 주요특징]</span>
          <span>
            지자기, 자이로, 가속도 센서를 포함하는 9축 센서 모듈을 이용하여
            차량의 주행 상황을 실시간으로 사용자의 스마트폰에 전송하는 한편,
            스마트폰을 통해 서버에서 수집되는 빅데이터를 기반으로 운전자들의
            운전 습관 및 도로의 각 구간별 노면 상태, 그리고 차량의 상태를 확인할
            수 있는 시스템이다.
          </span>
        </Text>
      </TextContainer>
    );
  }
}
