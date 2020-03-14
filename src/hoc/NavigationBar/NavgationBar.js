import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../public/images/Logo/logo_red.png';

const Styles = styled.div`
  .navbar {
    background-color: transparent;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    text-decoration: none;
    font-size: 20px;
    &:hover {
      color: #c52025;
    }
  }
`;

const NavigationBar = () => (
  <Styles>
    <Navbar expand='lg'>
      <Navbar.Brand href='/'>
        <img src={Logo} alt='logo'></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link as={NavLink} to='/' exact>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to='/about'>
            About
          </Nav.Link>
          <NavDropdown title='Project' id='basic-nav-dropdown'>
            <NavDropdown.Item href='/software'>SOFTWARE</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/hardware'>HARDWARE</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/contact'>
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavigationBar;
