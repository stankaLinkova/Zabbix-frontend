import React, { Component } from "react";
import "./App.css";

import Login from "./components/loginBox";
import Register from "./components/registerBox";

class App extends Component {
  constructor() {
    super();
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  state = {
    isLoginOpen: true,
    isRegisterOpen: false,
  };

  handleRegister() {
    this.setState({ isLoginOpen: false, isRegisterOpen: true });
  }

  handleLogin() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoginOpen ? (
          <Login onRegister={this.handleRegister} />
        ) : (
          ""
        )}
        {this.state.isRegisterOpen ? (
          <Register onLogin={this.handleLogin} />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default App;
