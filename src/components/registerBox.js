import React, { Component } from "react";
import "../App.css";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Form className="login-form">
        <h4 className="mb-5 text-center">REGISTRATION</h4>

        <FormGroup>
          <Label>Full Name</Label>
          <Input type="name" placeholder="Full name" />
        </FormGroup>
        <FormGroup>
          <Label>Username</Label>
          <Input type="username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Label>Repeat Password</Label>
          <Input type="password" placeholder="Repeat Password" />
        </FormGroup>
        <Button
          className="btn-lg btn-dark btn-block"
          onClick={this.props.onLogin}
        >
          Register
        </Button>
      </Form>
    );
  }
}

export default Register;
