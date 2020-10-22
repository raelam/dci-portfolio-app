import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onContentChange(e.target.attributes['data-card'].value);
  }

  render() {
    return (
      <Row className="pt-5" id="portfolio">
        <Col>
          <CardColumns>
            <Card>
              <Card.Img
                variant="top"
                src="images/unsplash/daria-nepriakhina-zoCDWPuiRuA-unsplash.jpg"
              />
              <Card.Body>
                <Card.Title>Marketing Strategy</Card.Title>
                <Card.Link
                  href="#"
                  data-card="marketingStrategy"
                  onClick={this.handleClick}
                >
                  Learn More
                </Card.Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="images/unsplash/stephen-phillips-hostreviews-co-uk-shr_Xn8S8QU-unsplash.jpg"
              />
              <Card.Body>
                <Card.Title>Digital Analytics</Card.Title>
                <Card.Link
                  href="#"
                  data-card="analytics"
                  onClick={this.handleClick}
                >
                  Learn More
                </Card.Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="images/unsplash/halacious-tZc3vjPCk-Q-unsplash.jpg"
              />
              <Card.Body>
                <Card.Title>Web Design/Development</Card.Title>
                <Card.Link
                  href="#"
                  data-card="webDev"
                  onClick={this.handleClick}
                >
                  Learn More
                </Card.Link>
              </Card.Body>
            </Card>
          </CardColumns>
        </Col>
      </Row>
    );
  }
}
