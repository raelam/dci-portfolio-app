import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default class Splashrow extends Component {
  render() {
    return (
      <Row id="splash-row">
        <Image
          id="splash-img"
          src="images/logo-full.svg"
          className="mx-auto p-2 visible"
          alt="RCL.design logo"
        />
      </Row>
    );
  }
}
