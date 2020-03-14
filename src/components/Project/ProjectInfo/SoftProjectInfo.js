import React, { Component } from 'react';
import styled from 'styled-components';
import InfoImage from './InfoImage';
import SoftInfoText from './SoftInfoText';
import InfoTitle from './InfoTitle';
import SImage1_1 from '../../../hoc/public/images/SoftWare/software-1/1.jpg';
import SImage1_2 from '../../../hoc/public/images/SoftWare/software-1/2.jpg';
import SImage1_3 from '../../../hoc/public/images/SoftWare/software-1/3.jpg';
import SImage2_1 from '../../../hoc/public/images/SoftWare/software-2/1.jpg';
import SImage2_2 from '../../../hoc/public/images/SoftWare/software-2/2.jpg';
import SImage2_3 from '../../../hoc/public/images/SoftWare/software-2/3.jpg';
import SImage3_1 from '../../../hoc/public/images/SoftWare/software-3/1.jpg';
import SImage3_2 from '../../../hoc/public/images/SoftWare/software-3/2.jpg';
import SImage3_3 from '../../../hoc/public/images/SoftWare/software-3/3.jpg';
import SImage4_1 from '../../../hoc/public/images/SoftWare/software-4/1.jpg';
import SImage4_2 from '../../../hoc/public/images/SoftWare/software-4/2.jpg';
import SImage5_1 from '../../../hoc/public/images/SoftWare/software-5/1.jpg';
import SImage5_2 from '../../../hoc/public/images/SoftWare/software-5/2.jpg';
import SImage6_1 from '../../../hoc/public/images/SoftWare/software-6/1.jpg';
import SImage6_2 from '../../../hoc/public/images/SoftWare/software-6/2.jpg';

const ImageContainer = styled.div`
  margin-right: 30px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default class ProjectInfo extends Component {
  state = {
    dosome: [
      { image: SImage1_1 },
      { image: SImage1_2 },
      { image: SImage1_3 },
      { title: 'Dosome', func: 'Dynamic UI MEMO / MUSIC / ALARM APP' }
    ],
    smartic: [
      { image: SImage2_1 },
      { image: SImage2_2 },
      { image: SImage2_3 },
      {
        title: 'SmarTic',
        func:
          'HW / SW Collaboration. Hardware : 고령자들을 위한 스마트 지팡이 - 심박 / 보행수 체크기능 APP : 낙상 또는 비상 시 보호자 통지 및 위치 전송기능. Amazon Cloud Service 연동'
      }
    ],
    visible: [
      { image: SImage3_1 },
      { image: SImage3_2 },
      { image: SImage3_3 },
      {
        title: 'VisiBLE',
        func:
          'SK Telecom & 필룩스 비콘 조명 어플리케이션. Beacon 기능. 개별 및 그룹 조명의 조도 및 색상 설정 가능. 스케줄링 및 전화 알림기능 등 스페인 바르셀로나 MWC 2015에서 SK Telecom 부스에서 전시 및 시연'
      }
    ],
    airsensor: [
      { image: SImage4_1 },
      { image: SImage4_2 },
      { title: 'AirSensor', func: '미세먼지/휘발성 유기화합물 실시간 모니터링' }
    ],
    vc: [
      { image: SImage5_1 },
      { image: SImage5_2 },
      { title: 'VC 디바이스', func: '비타민 C 이온토포레시스 컨트롤 앱' }
    ],
    busan: [
      { image: SImage6_1 },
      { image: SImage6_2 },
      {
        title: '부산항대교',
        func:
          '부산항만공사 및 LX 한국국토정보공사와 협업, 부산항대교 통과허용 높이 측정'
      }
    ]
  };

  handleImage = arr => {
    return arr.map((a, index) => {
      return <InfoImage key={index} image={a.image} />;
    });
  };

  render() {
    if (this.props.name === true) {
      switch (this.props.index) {
        case 0:
          return (
            <>
              <InfoTitle title={this.state.dosome[3].title}></InfoTitle>
              <FlexContainer>
                <ImageContainer>
                  {this.handleImage(this.state.dosome)}
                </ImageContainer>
                <SoftInfoText func={this.state.dosome[3].func}></SoftInfoText>
              </FlexContainer>
            </>
          );

        case 1:
          return (
            <>
              <InfoTitle title={this.state.smartic[3].title}></InfoTitle>
              <FlexContainer>
                <ImageContainer>
                  {this.handleImage(this.state.smartic)}
                </ImageContainer>
                <SoftInfoText func={this.state.smartic[3].func}></SoftInfoText>
              </FlexContainer>
            </>
          );

        case 2:
          return (
            <>
              <InfoTitle title={this.state.visible[3].title}></InfoTitle>
              <FlexContainer>
                <ImageContainer>
                  {this.handleImage(this.state.visible)}
                </ImageContainer>
                <SoftInfoText func={this.state.visible[3].func}></SoftInfoText>
              </FlexContainer>
            </>
          );

        case 3:
          return (
            <>
              <InfoTitle title={this.state.airsensor[2].title}></InfoTitle>
              <FlexContainer>
                <ImageContainer>
                  {this.handleImage(this.state.airsensor)}
                </ImageContainer>
                <SoftInfoText
                  func={this.state.airsensor[2].func}
                ></SoftInfoText>
              </FlexContainer>
            </>
          );

        case 4:
          return (
            <>
              <InfoTitle title={this.state.vc[2].title}></InfoTitle>
              <FlexContainer>
                <ImageContainer>
                  {this.handleImage(this.state.vc)}
                </ImageContainer>
                <SoftInfoText func={this.state.vc[2].func}></SoftInfoText>
              </FlexContainer>
            </>
          );

        case 5:
          return (
            <>
              <InfoTitle title={this.state.busan[2].title}></InfoTitle>
              <FlexContainer>
                <ImageContainer>
                  {this.handleImage(this.state.busan)}
                </ImageContainer>
                <SoftInfoText func={this.state.busan[2].func}></SoftInfoText>
              </FlexContainer>
            </>
          );
        default:
          return null;
      }
    } else {
      return null;
    }
  }
}
