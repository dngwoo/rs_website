import React, { Component } from 'react';
import styled from 'styled-components';
import ImageBox from './ImageBox';
import ProjectTitle from './ProjectTitle';
import { Container } from 'react-bootstrap';
import SImage1_1 from '../../hoc/public/images/SoftWare/software-1/1.jpg';
import SImage2_1 from '../../hoc/public/images/SoftWare/software-2/1.jpg';
import SImage3_1 from '../../hoc/public/images/SoftWare/software-3/1.jpg';
import SImage4_1 from '../../hoc/public/images/SoftWare/software-4/1.jpg';
import SImage5_1 from '../../hoc/public/images/SoftWare/software-5/1.jpg';
import SImage6_1 from '../../hoc/public/images/SoftWare/software-6/1.jpg';
import SoftProjectInfo from './ProjectInfo/SoftProjectInfo';

const ContentContainer = styled(Container)`
  padding: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default class Project extends Component {
  state = {
    click: false,
    projectTitle: 'RecursiveSoft Project',
    projectSubTitle: [
      { subtitle: 'SoftWare Service' },
      { subtitle: 'Hardware Service' }
    ],
    softwareImage: [
      { image: SImage1_1, text: 'DoSome' },
      { image: SImage2_1, text: 'SmarTic' },
      { image: SImage3_1, text: 'VisiBLE' },
      { image: SImage4_1, text: 'AirSensor' },
      { image: SImage5_1, text: 'VC 디바이스' },
      { image: SImage6_1, text: '부산항대교 통과허용 높이 측정' }
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
        <ProjectTitle
          title={this.state.projectTitle}
          subtitle={this.state.projectSubTitle[0].subtitle}
        ></ProjectTitle>
        <ContentContainer>
          {this.handleImageBox(this.state.softwareImage)}
        </ContentContainer>
        <ContentContainer>
          <SoftProjectInfo
            name={this.state.click}
            index={this.state.projectindex}
          ></SoftProjectInfo>
        </ContentContainer>
      </Container>
    );
  }
}
