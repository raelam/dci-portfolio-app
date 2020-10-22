import React, { Component } from 'react';
import './custom.scss';
import Container from 'react-bootstrap/Container';

import Splashrow from './components/splashrow';
import Navrow from './components/navrow';
import PageContent from './components/pagecontent';
import Footer from './components/footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeContent: 'about' };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(content) {
    this.setState({
      activeContent: content,
    });
    console.log(content);
  }

  render() {
    const content = this.state.activeContent;

    return (
      <Container fluid>
        <Splashrow />
        <Navrow activeContent={content} onContentChange={this.handleClick} />
        <PageContent
          activeContent={content}
          onContentChange={this.handleClick}
        />
        <Footer />
      </Container>
    );
  }
}
