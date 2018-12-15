import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const NoRoute = () => (
  <div>
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">404 no match</h1>
      </Container>
    </Jumbotron>
  </div>
);

export default NoRoute;
