import React, { Component } from 'react';
import styled from 'styled-components';
import ImageBox from './ImageBox';
import ProjectTitle from './ProjectTitle';
import { Container } from 'react-bootstrap';
import HImage1_1 from '../../hoc/public/images/HardWare/hardware-1/1.jpg';
import HImage2_1 from '../../hoc/public/images/HardWare/hardware-2/1.jpg';
import HImage3_1 from '../../hoc/public/images/HardWare/hardware-3/1.jpg';
import HImage4_1 from '../../hoc/public/images/HardWare/hardware-4/1.jpg';
import HImage5_1 from '../../hoc/public/images/HardWare/hardware-5/1.jpg';
import HImage6_1 from '../../hoc/public/images/HardWare/hardware-6/1.jpg';
import HImage7_1 from '../../hoc/public/images/HardWare/hardware-7/1.jpg';
import HardProjectInfo from './ProjectInfo/HardProjectInfo';

const ContentContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export default class Project extends Component {
  state = {
    click: false,
    projectTitle: 'RecursiveSoft Project',
    projectSubTitle: [
      { subtitle: 'SoftWare Service' },
      { subtitle: 'Hardware Service' }
    ],
    hardwareImage: [
      { image: HImage1_1, text: 'ArtMon' },
      { image: HImage2_1, text: 'Solar Beacon' },
      { image: HImage3_1, text: 'Bluetooth LE Relay' },
      { image: HImage4_1, text: 'Bluetooth LE IoT Living Lab Kit' },
      {
        image: HImage5_1,
        text: '잠수사의 건강상태 모니터링 웨어러블 IoT 제품'
      },
      {
        image: HImage6_1,
        text: '지능형 로봇 IoT 플랫폼'
      },
      {
        image: HImage7_1,
        text: '터널 환경 모니터링 통합 IoT 제품'
      }
    ],
    projectindex: parseInt('')
  };

  handleState = data => {
    this.setState({ click: data });
  };

  handleImageBox = arr => {
    return arr.map((a, index) => {
      return (
        <ImageBox
          onClick={() => {
            this.setState({ projectindex: index });
          }}
          key={index}
          image={a.image}
          text={a.text}
          handleState={this.handleState}
        />
      );
    });
  };

  render() {
    return (
      <Container>
        {/* HardWare */}
        <ProjectTitle
          title={this.state.projectTitle}
          subtitle={this.state.projectSubTitle[1].subtitle}
        ></ProjectTitle>
        <ContentContainer>
          {this.handleImageBox(this.state.hardwareImage)}
        </ContentContainer>
        <FlexContainer>
          <HardProjectInfo
            name={this.state.click}
            index={this.state.projectindex}
          ></HardProjectInfo>
        </FlexContainer>
      </Container>
    );
  }
}
