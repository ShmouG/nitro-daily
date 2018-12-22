import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import LoginForm from '../components/LoginForm';
import API from '../utils/API';


const handleInputChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    [name]: value,
  });
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  API.saveUser({
    email: this.state.email,
    pw: this.state.pw,
  })
    .then((res) => {
      if (res.data.status === 'error') {
        throw new Error(res.data.message);
      }
      // this.setState({ results: res.data.message, error: '' });
    })
    .catch(err => this.setState({ error: err.message }));
};

const Example = () => (
  <div>
    <Jumbotron fluid>
      <Container fluid>
        <h3 className="display-3">Login</h3>
        <LoginForm
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      </Container>
    </Jumbotron>
  </div>
);

export default Example;
