import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default class Navrow extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onContentChange(e.target.attributes['data-rb-event-key'].value);
  }

  render() {
    return (
      <Row>
        <Navbar className="customNav" expand="sm" variant="dark">
          <Nav
            defaultActiveKey="about"
            className="customNav justify-content-center"
          >
            <Nav.Link eventKey="about" onClick={this.handleClick}>
              About
            </Nav.Link>
            <Nav.Link eventKey="portfolio" onClick={this.handleClick}>
              Portfolio
            </Nav.Link>
            <Nav.Link
              eventKey="linkedin"
              href="https://www.linkedin.com/in/rachel-lammer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
          </Nav>
        </Navbar>
      </Row>
    );
  }
}
