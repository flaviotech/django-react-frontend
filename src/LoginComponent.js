import React from "react";

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleSubmit(event) {
    alert(`A username was submited: ${this.state.username}\nA password was submited: ${this.state.password}`);
    event.preventDefault();
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
