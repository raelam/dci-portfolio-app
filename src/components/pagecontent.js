import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

import PortfolioDetail from './portfoliodetail';
import Portfolio from './portfolio';
import About from './about';

export default class PageContent extends Component {
  render() {
    let content;
    if (this.props.activeContent === 'about') {
      content = <About />;
    } else if (this.props.activeContent === 'portfolio') {
      content = (
        <Portfolio
          activeContent={this.props.activeContent}
          onContentChange={this.props.onContentChange}
        />
      );
    } else {
      content = (
        <PortfolioDetail
          activeContent={this.props.activeContent}
          onContentChange={this.props.onContentChange}
        />
      );
    }

    return <Container fluid>{content}</Container>;
  }
}
