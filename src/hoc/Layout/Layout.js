import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
`;

const Layout = props => <Container>{props.children}</Container>;
export default Layout;
