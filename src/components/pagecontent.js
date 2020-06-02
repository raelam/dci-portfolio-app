import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import Portfolio from './portfolio';
import Services from './services';

export default class PageContent extends Component {
  render() {
    return (
      <Container>
        <Services />
        <Portfolio />
      </Container>
    );
  }
}
