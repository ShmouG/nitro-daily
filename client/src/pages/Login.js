import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import LoginForm from '../components/LoginForm';

const Example = () => (
  <div>
    <Jumbotron fluid>
      <Container fluid>
        <h3 className="display-3">Login</h3>
        <LoginForm />
      </Container>
    </Jumbotron>
  </div>
);

export default Example;
