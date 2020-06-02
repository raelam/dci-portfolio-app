import React, { Component } from 'react';
import classnames from 'classnames';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default class Splashrow extends Component {
  render() {
    return (
      <Row id="splash-row">
        <Image
          id="splash-img"
          src="images/logo-full.svg"
          className="mx-auto p-4 visible"
          alt="RCL.design logo"
        />
      </Row>
    );
  }
}
