import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const FlexContainer = styled(Container)`
  font-size: 24px;
  text-align: center;
  @media all and (min-width: 850px) and (max-width: 1400px) {
    font-size: 20px;
  }
  @media all and (max-width: 849px) {
    font-size: 18px;
  }
`;

export default class AboutSummary extends Component {
  render() {
    return (
      <FlexContainer>
        해운대구 센텀시티에서 소재한 StartUp으로서, IoT 디바이스 및 자사의
        Mobile App을 개발 및 서비스한다. <br></br>
        <br></br>특히 모션센서 통합 블루투스 LE 모듈을 자체 개발하여 다양한
        모니터링 솔루션을 만들고 있다.
      </FlexContainer>
    );
  }
}
