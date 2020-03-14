import React, { Component } from "react";
import styled from "styled-components";
import InfoImage from "./InfoImage";
import InfoText from "./InfoText";
import InfoTitle from "./InfoTitle";

const Container = styled.div`
  padding: 80px 50px 0 50px;
  margin: 0 auto;
  width: 50%;
`;

const ImageContainer = styled.div`
  margin-right: 30px;
`;

const FlexContainer = styled.div`
  display: flex;
`;
export default class ProjectInfo extends Component {
  render() {
    return (
      <Container>
        <InfoTitle></InfoTitle>
        <FlexContainer>
          <ImageContainer>
            <InfoImage></InfoImage>
          </ImageContainer>
          <InfoText></InfoText>
        </FlexContainer>
      </Container>
    );
  }
}
