import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 100%;
  width: 200px;
  height: 200px;
  background-color: #0b1d36;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  margin-bottom: 100px;
`;

const FieldsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Field = styled.span`
  font-size: 25px;
  color: white;
  text-align: center;
`;

export default class AboutField extends Component {
  render() {
    return (
      <Container>
        <FieldsContainer>
          <Field>{this.props.field}</Field>
        </FieldsContainer>
      </Container>
    );
  }
}
