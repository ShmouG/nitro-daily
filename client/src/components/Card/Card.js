import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const LocationName = children => (
  <div>
    <Jumbotron fluid>
      <Container fluid>
        <p className="display-3">{children}</p>
      </Container>
    </Jumbotron>
  </div>
);


export default LocationName;
