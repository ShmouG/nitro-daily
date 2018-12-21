import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import LoginForm from '../components/LoginForm';
import API from '../utils/API';


const handleInputChange = (event) => {
  this.setState = ({ save: event.target.value });
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  API.saveUser(event)
    .then((res) => {
      if (res.data.status === 'error') {
        throw new Error(res.data.message);
      }
      this.setState({ results: res.data.message, error: '' });
      console.log(res);
    })
    .catch(err => this.setState({ error: err.message }));
};

const Example = () => (
  <div>
    <Jumbotron fluid>
      <Container fluid>
        <h3 className="display-3">Login</h3>
        <LoginForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
      </Container>
    </Jumbotron>
  </div>
);

export default Example;
