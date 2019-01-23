import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import { Jumbotron, Container } from 'reactstrap';
import LoginForm from '../components/LoginForm';
import API from '../utils/API';
import Interface from './Interface';

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
      this.setState({ results: res.data.message, error: '' });
    })
    .catch(err => this.setState({ error: err.message }));
};

const Login = () => (
  <div>
    <Jumbotron fluid>
      <Container fluid>
        <h3 className="display-3">Login</h3>
        <LoginForm
          handleInputChange={handleInputChange}
          handleFormSubmit={<Route exact path="/" component={Interface} />}
        />
      </Container>
    </Jumbotron>
  </div>
);

export default Login;
