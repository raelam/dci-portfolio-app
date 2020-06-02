import React from 'react';
import './custom.scss';
import Container from 'react-bootstrap/Container';

import Splashrow from './components/splashrow';
import Navrow from './components/navrow';
import PageContent from './components/pagecontent';

function App() {
  return (
    <Container fluid>
      <Splashrow />
      <Navrow />
      <PageContent />
    </Container>
  );
}

export default App;
