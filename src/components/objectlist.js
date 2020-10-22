import React, { Component } from 'react';

import Media from 'react-bootstrap/Media';

export default class ObjectList extends Component {
  render() {
    const getObjectContent = (arr) => {
      let objectLength = arr.names.length;
      let content = [];

      for (let i = 0; i < objectLength; i++) {
        content.push(
          <Media as="li" className="mb-3">
            <img
              width={64}
              height={64}
              className="align-self-start mr-3"
              src={arr.images[i]}
              alt={arr.names[i]}
            />
            <Media.Body>
              <h5>{arr.names[i]}</h5>
              <p>{arr.detail[i]}</p>
              <a
                href={arr.location[i]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.objectType === 'project'
                  ? 'View More'
                  : 'View Certificate'}
              </a>
            </Media.Body>
          </Media>
        );
      }
      return content;
    };

    return (
      <ul className="list-unstyled">
        {getObjectContent(this.props.objectList)}
      </ul>
    );
  }
}
