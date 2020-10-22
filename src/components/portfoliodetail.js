import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import ObjectList from './objectlist';

import portfolio from './data/portfolio.json';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onContentChange('portfolio');
  }

  render() {
    const content = this.props.activeContent;

    const pageObject = portfolio[content];

    let pageTitle = pageObject.title;
    let detailText = pageObject.detail;

    return (
      <Row className="pt-0" id={content}>
        <Navbar expand="lg">
          <Nav>
            <Nav.Link className="pr-3" onClick={this.handleClick}>
              <FontAwesomeIcon icon={faArrowLeft} onClick={this.handleClick} />
            </Nav.Link>
            <Navbar.Text>
              <h3>{pageTitle}</h3>
            </Navbar.Text>
          </Nav>
        </Navbar>
        <Row className="mx-1 px-2">
          <Col sm={12} lg={12} className="mr-2">
            <p>{detailText}</p>
          </Col>
          <Col sm={6} lg={6}>
            <h3>Work Examples</h3>
            <ObjectList objectList={pageObject.projects} objectType="project" />
          </Col>
          <Col sm={6} lg={6}>
            <h3>Related Certifications</h3>
            <ObjectList
              objectList={pageObject.certificates}
              objectType="certification"
            />
          </Col>
        </Row>
      </Row>
    );
  }
}
