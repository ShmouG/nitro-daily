import React, { Component } from 'react';
// import { BrowserRouter as Route } from 'react-router-dom';
import {
  Form, FormGroup, Label, Input,
} from 'reactstrap';
// import Interface from '../../pages/Interface';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: '',
    };
  }

  render() {
    const { email } = this.state;
    const { pw } = this.state;

    return (
      <div className="wrapper">
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
            <Input
              onChange={this.handleInputChange}
              value={email.email}
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="something@idk.cool"
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Password</Label>
            <Input
              onChange={this.handleInputChange}
              value={pw.pw}
              type="password"
              name="pw"
              id="examplePassword"
              placeholder="don't tell!"
            />
          </FormGroup>
          {/* <Button type="submit" onClick={href="/Interface"}>Submit</Button> */}
          {/* <Button className="newUser">  New User? </Button> */}
        </Form>
      </div>
    );
  }
}

export default Login;
