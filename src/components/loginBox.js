import React, { Component } from "react";
import "../App.css";
import { login } from "../services/authService";

import { Button, FormGroup, Label, Input } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      username: "",
      password: "",
    };

    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeUrl(event) {
    this.setState({ url: event.target.value });
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }


  handleSubmit =  (event) => {
    event.preventDefault();
     login(this.state.url, this.state.username, this.state.password)
     .then(m => console.log(m))
     .catch(err => console.log(err));
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h1 className="text-center">Welcome!</h1>
        <h4 className="mb-5 text-center">ZABBIX - PROJECT</h4>

        <FormGroup>
          <Label>UrlAddress</Label>
          <Input
            type="text"
            placeholder="UrlAddress"
            value={this.state.value}
            onChange={this.handleChangeUrl}
          />
        </FormGroup>
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="username"
            placeholder="Username"
            value={this.state.value}
            onChange={this.handleChangeUsername}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            value={this.state.value}
            onChange={this.handleChangePassword}
          />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Log in</Button>

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={this.props.onRegister}>
              Register
            </a>
          </li>
        </ul>
      </form>
    );
  }
}

export default Login;
