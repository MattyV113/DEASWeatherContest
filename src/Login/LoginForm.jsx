import React, { Component } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './loginform.scss';
import Navbar from '../NavBar/NavBar';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.username,
      password: this.password,
    };

    this.handleLoginButtonClicked = this.handleLoginButtonClicked.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLoginButtonClicked(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    };
    fetch('/api/login', requestOptions)
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="signup-container" style={{ backgroundColor: 'wheat' }}>
          <div className="card-container">
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Sign In</h2>
                <Form>
                  <Form.Group id="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      className="mb-3"
                      type="email"
                      required={true}
                      onChange={this.handleUsername}
                      value={this.username}
                    />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      className="mb-3"
                      type="password"
                      onChange={this.handlePassword}
                      required={true}
                      value={this.password}
                    />
                  </Form.Group>
                  <button
                    type="submit"
                    to="/profile/:userId"
                    component={Link}
                    onClick={this.handleLoginButtonClicked}
                    className="sign-in-button"
                  >
                    Sign In
                  </button>
                </Form>
              </Card.Body>
              <div
                className="forgot-pass"
                style={{ color: 'black', textAlign: 'center' }}
              >
                <br />
                <Link to="/forgot-password" className="w-100">
                  Reset Password
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </>
    );
  }
}
