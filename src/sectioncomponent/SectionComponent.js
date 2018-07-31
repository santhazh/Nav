import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import './SectionComponent.css';


const SectionComponent = () => (
    <div id="SectionComponent">
    <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home"><img src="./sectioncomponent/logo.jpg" className="img"/></a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
  </Nav>
</Navbar>
  </div>
  );

export default SectionComponent;