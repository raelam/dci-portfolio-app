import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default class Services extends Component {
  render() {
    return (
      <Row className="pt-5" id="services">
        <Col sm={8}>
          <h1>Marketing and Web Services</h1>
          <h4>About RCL Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
            pulvinar sapien et ligula ullamcorper. Quam quisque id diam vel quam
            elementum pulvinar. Sapien faucibus et molestie ac. Ornare arcu odio
            ut sem nulla pharetra diam sit. Sed ullamcorper morbi tincidunt
            ornare massa eget egestas purus viverra. Dapibus ultrices in iaculis
            nunc sed augue. Convallis a cras semper auctor neque. Tincidunt
            augue interdum velit euismod in pellentesque massa placerat. Fames
            ac turpis egestas maecenas pharetra convallis posuere morbi leo.
            Proin libero nunc consequat interdum varius sit amet mattis
            vulputate.
          </p>
          <p>
            Amet justo donec enim diam vulputate ut. Adipiscing elit
            pellentesque habitant morbi tristique senectus et netus. Rhoncus
            aenean vel elit scelerisque mauris. Purus viverra accumsan in nisl.
            Sapien faucibus et molestie ac feugiat. Ullamcorper eget nulla
            facilisi etiam dignissim diam quis enim. Semper eget duis at tellus
            at. Justo donec enim diam vulputate ut pharetra. Fames ac turpis
            egestas integer eget aliquet. Lorem ipsum dolor sit amet consectetur
            adipiscing elit.
          </p>
          <p>
            Laoreet sit amet cursus sit amet dictum sit. Tortor at auctor urna
            nunc id cursus metus aliquam. Nunc congue nisi vitae suscipit tellus
            mauris a diam. Mauris sit amet massa vitae tortor condimentum. Ut
            etiam sit amet nisl purus in. Aliquet lectus proin nibh nisl. Vitae
            aliquet nec ullamcorper sit. Condimentum vitae sapien pellentesque
            habitant morbi tristique. Amet nisl purus in mollis nunc. Aliquam
            purus sit amet luctus venenatis lectus magna. Eget lorem dolor sed
            viverra ipsum nunc. Fermentum iaculis eu non diam phasellus
            vestibulum lorem sed risus. Nunc congue nisi vitae suscipit.
            Molestie a iaculis at erat pellentesque adipiscing. Turpis in eu mi
            bibendum neque egestas congue. Magna fermentum iaculis eu non diam
            phasellus vestibulum lorem sed. Velit ut tortor pretium viverra
            suspendisse potenti nullam. Purus semper eget duis at tellus.
          </p>
        </Col>
        <Col sm={4}>
          <Image
            id="about-img"
            src="images/headshot.jpg"
            alt="Headshot"
            roundedCircle
          />
        </Col>
      </Row>
    );
  }
}
