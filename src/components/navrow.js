import React, { Component } from 'react';
import classnames from 'classnames';

import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class Navrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const fixed = currentScrollPos > 150;

    this.setState({
      prevScrollpos: currentScrollPos,
      fixed,
    });
  };

  render() {
    return (
      <Row>
        <Navbar
          expand="lg"
          variant="dark"
          className={classnames({
            'navbar--fixed': this.state.fixed,
          })}
        >
          <Nav className="mx-auto" defaultActiveKey="/">
            <Nav.Link href="#services" eventKey="services">
              Services
            </Nav.Link>
            <Nav.Link href="#portfolio" eventKey="portfolio">
              Portfolio
            </Nav.Link>
          </Nav>
        </Navbar>
      </Row>
    );
  }
}
