import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';

export default class Footer extends Component {
  render() {
    return (
      <Row>
        <div id="footer" className="mt-4 px-4 pt-4">
          &copy; 2020 RCL.design | Built using React.js
        </div>
      </Row>
    );
  }
}
