import React from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

// This will be changed to a class with state later
function Login() {
  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
      <Button className="newUser">  New User? </Button>
    </Form>
  );
}


export default Login;
