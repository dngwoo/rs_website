import React, { Component } from 'react';
import styled from 'styled-components';
import InfoImage from './InfoImage';
import HardInfoText from './HardInfoText';
import InfoTitle from './InfoTitle';
import HImage1_1 from '../../../hoc/public/images/HardWare/hardware-1/1.jpg';
import HImage1_2 from '../../../hoc/public/images/HardWare/hardware-1/2.jpg';
import HImage2_1 from '../../../hoc/public/images/HardWare/hardware-2/1.jpg';
import HImage2_2 from '../../../hoc/public/images/HardWare/hardware-2/2.jpg';
import HImage2_3 from '../../../hoc/public/images/HardWare/hardware-2/3.jpg';
import HImage3_1 from '../../../hoc/public/images/HardWare/hardware-3/1.jpg';
import HImage3_2 from '../../../hoc/public/images/HardWare/hardware-3/2.jpg';
import HImage3_3 from '../../../hoc/public/images/HardWare/hardware-3/3.jpg';
import HImage4_1 from '../../../hoc/public/images/HardWare/hardware-4/1.jpg';
import HImage4_2 from '../../../hoc/public/images/HardWare/hardware-4/2.jpg';
import HImage4_3 from '../../../hoc/public/images/HardWare/hardware-4/3.jpg';
import HImage5_1 from '../../../hoc/public/images/HardWare/hardware-5/1.jpg';
import HImage5_2 from '../../../hoc/public/images/HardWare/hardware-5/2.jpg';
import HImage6_1 from '../../../hoc/public/images/HardWare/hardware-6/1.jpg';
import HImage6_2 from '../../../hoc/public/images/HardWare/hardware-6/2.jpg';
import HImage7_1 from '../../../hoc/public/images/HardWare/hardware-7/1.jpg';
import HImage7_2 from '../../../hoc/public/images/HardWare/hardware-7/2.jpg';

const ImageContainer = styled.div`
  margin-right: 30px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default class ProjectInfo extends Component {
  state = {
    artmon: [
      {
        image: HImage1_1
      },
      {
        image: HImage1_2
      },
      {
        title: 'ArtMon',
        func:
          '9축 센서를 이용한 도로 노면 상태 모니터링 및 스마트 블랙박스 시스템',
        tech:
          '지자기, 자이로, 가속도 센서를 포함하는 9축 센서 모듈을 이용하여 차량의 주행 상황을 실시간으로 사용자의 스마트폰에 전송하는 한편, 스마트폰을 통해 서버에서 수집되는 빅데이터를 기반으로 운전자들의 운전 습관 및 도로의 각 구간별 노면 상태, 그리고 차량의 상태를 확인할 수 있는 시스템이다.'
      }
    ],
    solar: [
      { image: HImage2_1 },
      { image: HImage2_2 },
      { image: HImage2_3 },
      {
        title: 'Solar Beacon',
        func: '초소형 블루투스 LE 모듈을 이용한 태양광 블루투스 비콘',
        tech:
          '태양광 패널을 이용하여 빛이 있는 환경에서 배터리 충전 없이 반 영구적으로 사용이 가능하고, 주변의 온도, 습도 및 기압을 실시간으로 측정하여 정보를 제공하는 모듈이다.'
      }
    ],
    relay: [
      { image: HImage3_1 },
      { image: HImage3_2 },
      { image: HImage3_3 },
      {
        title: 'Bluetooth LE Relay',
        func: 'Caravan Bluetooth LE Relay Control Panel',
        tech:
          '블루투스 LE 5.0 모듈을 이용한 카라반 전원 컨트롤 릴레이다. 고급 캠핑카 내부의 다양한 전자기기들의 전원을 컨트롤할 수 있는 제품이며, LCD 터치 패널 및 스마트폰과 연결할 수 있다. 온습도 및 현재 차량 배터리의 전압 상태 및 물탱크의 수위 상태를 알 수 있다'
      }
    ],
    lab: [
      { image: HImage4_1 },
      { image: HImage4_2 },
      { image: HImage4_3 },
      {
        title: 'Bluetooth LE IoT Living Lab Kit',
        func: 'Busan Bluetooth LE IoT Living Lab Kit',
        tech:
          '블루투스 LE 5.0 와 와이파이 모듈과, 온/습도, CO2, TVOC,  미세먼지 센서로 구성된 테스트용 키트이다. 아두이노 스케치로 프로그래밍하며, 키트를 활용하여 IoT 개발 실습과, IoT 개발 플랫폼 연계한 스마트 서비스 구현할 수 있다.'
      }
    ],
    healthcheck: [
      { image: HImage5_1 },
      { image: HImage5_2 },
      {
        title: '잠수사의 건강상태를 지속적으로 체크하는 제품',
        func: '심박/수압/체온을 체크하여 알람',
        tech:
          '잠수사 또는 수중 레저 스포츠를 즐기는 사람들의 건강 및 위험 상태를 파악하기 위해 제작한 디바이스로써, 심박과 체온 체크 이외에도 잠수 상태에서 수면으로 올라오기전 수압 적용을 위한 타이밍을 알려주는 기능이 있다.'
      }
    ],
    intellect: [
      { image: HImage6_1 },
      { image: HImage6_2 },
      {
        title: '가속도, 자이로, 지자기 등 여러 센서들을 내장한 지능형 로봇',
        func:
          '가속도, 자이로, 지자기, 온도, 습도, 기압 센서 들을 내장한 지능형 로봇',
        tech:
          '서브모터 세 개를 사용한 반응형 로봇의 메인보드로서 블루투스 LE로 스마트폰과 연결되며, 스마트폰의 앱에서 재생되는 음악에 맞춰 다양한 춤 동작을 취할 수 있다. 또한, 온도와 습도 기압에 따라 앱에서 표현되는 로봇의 색깔 등이 달라지며, 가속도, 자이로, 지자기 센서로 움직임을 모니터링하여 그에 따른 반응을 팔 다리의 움직임으로 보여줄 수 있다.'
      }
    ],
    tunnel: [
      { image: HImage7_1 },
      { image: HImage7_2 },
      {
        title: 'ArtMon',
        func: '터널 내 환경 및 위치 데이터 제공 저전력 안전 보완 시스템',
        tech:
          'LX한국구토정보공사와 협력하여, 터널 내의 지적 정보를 제공받고, 이를 센서 데이터에 패깃화. 국내외 도로 터널 환경 데이터 확보 및 교통사고 발생시 빠른 위치 인지 후 신고를 위한 기술 확보. 자율 운행 자동차 시대에 맞춰 GPS 신호 수신이 불가한 터널 내에서 위치 데이터 파악.'
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
              <InfoTitle title={this.state.artmon[2].title}></InfoTitle>
              <FlexContainer>
                <ImageContainer>
                  {this.handleImage(this.state.artmon)}
                </ImageContainer>
                <HardInfoText
                  func={this.state.artmon[2].func}
                  tech={this.state.artmon[2].tech}
                ></HardInfoText>
              </FlexContainer>
            </>
          );

        case 1:
          return (
            <>
              <InfoTitle title={this.state.solar[3].title}></InfoTitle>
              <FlexContainer>
                <ImageContainer>
                  {this.handleImage(this.state.solar)}
                </ImageContainer>
                <HardInfoText
                  func={this.state.solar[3].func}
                  tech={this.state.solar[3].tech}
                ></HardInfoText>
              </FlexContainer>
            </>
          );

        case 2:
          return (
            <>
              <InfoTitle title={this.state.relay[3].title}></InfoTitle>
              <FlexContainer>
                <ImageContainer>
                  {this.handleImage(this.state.relay)}
                </ImageContainer>
                <HardInfoText
                  func={this.state.relay[3].func}
                  tech={this.state.relay[3].tech}
                ></HardInfoText>
              </FlexContainer>
            </>
          );

        case 3:
          return (
            <>
              <InfoTitle title={this.state.lab[3].title}></InfoTitle>
              <FlexContainer>
                <ImageContainer>
                  {this.handleImage(this.state.lab)}
                </ImageContainer>
                <HardInfoText
                  func={this.state.lab[3].func}
                  tech={this.state.lab[3].tech}
                ></HardInfoText>
              </FlexContainer>
            </>
          );

        case 4:
          return (
            <>
              <InfoTitle title={this.state.healthcheck[2].title}></InfoTitle>
              <FlexContainer>
                <ImageContainer>
                  {this.handleImage(this.state.healthcheck)}
                </ImageContainer>
                <HardInfoText
                  func={this.state.healthcheck[2].func}
                  tech={this.state.healthcheck[2].tech}
                ></HardInfoText>
              </FlexContainer>
            </>
          );

        case 5:
          return (
            <>
              <InfoTitle title={this.state.intellect[2].title}></InfoTitle>
              <FlexContainer>
                <ImageContainer>
                  {this.handleImage(this.state.intellect)}
                </ImageContainer>
                <HardInfoText
                  func={this.state.intellect[2].func}
                  tech={this.state.intellect[2].tech}
                ></HardInfoText>
              </FlexContainer>
            </>
          );

        case 6:
          return (
            <>
              <InfoTitle title={this.state.tunnel[2].title}></InfoTitle>
              <FlexContainer>
                <ImageContainer>
                  {this.handleImage(this.state.tunnel)}
                </ImageContainer>
                <HardInfoText
                  func={this.state.tunnel[2].func}
                  tech={this.state.tunnel[2].tech}
                ></HardInfoText>
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
