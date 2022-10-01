import React, { Component } from "react";
import axios from "axios";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { historyContext } from "../../page/entry/context";

export class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      Email: "",

      Password: "",
    };
  }

  componentDidMount = () => this.getPosts();

  static contextType = historyContext;
  getPosts = async () => {
    // API Call to server and get all posts
    try {
      const { data } = await axios.get(
        "https://crm-app123.herokuapp.com/register"
      );
      this.setState({ posts: data });
    } catch (err) {
      console.error(err);
    }
  };
  login = () => {
    const posts = [...this.state.posts];
    posts.push(posts);
    const match = this.state.posts.filter(
      (user) =>
        user.Email === this.state.Email && user.Password === this.state.Password
    );

    if (match.length !== 0) {
      this.context.handleClick();
      this.context.handleAuth();
    } else {
      alert("Invalid Credentials");
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });

    //console.log(value);
  };

  render() {
    return (
      <Container
        style={{
          height: "430px",
          width: "400px",
          background: "white",
          borderRadius: "10px",
          border: "solid 0.1px",
          boxShadow: "10px 5px 5px black",
        }}
      >
        <Row>
          <Col>
            <br />
            <h1> Login</h1>
            <hr />
            <Form onSubmit={this.login}>
              <Form.Group>
                <Form.Label>
                  <h6>Email Address</h6>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="Email"
                  value={this.state.Email}
                  onChange={this.handleChange}
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>
                  <h6>Password</h6>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="Password"
                  minLength="8"
                  value={this.state.Password}
                  onChange={this.handleChange}
                  placeholder="Enter Password"
                  required
                />
              </Form.Group>
              &nbsp;
              <br />
              <Button
                type="submit"
                style={{ backgroundColor: "rgb(15 176 50)" }}
                block
              >
                Login
              </Button>
            </Form>
            <hr />
          </Col>
        </Row>
        <Row xs="auto">
          <Col>
            <p> Don't have an account ?</p>
          </Col>
          <Col>
            <button
              type="button"
              style={{
                backgroundColor: "transparent",
                color: "blue",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
                display: "inline",
                margin: 0,
                padding: 0,
              }}
              onClick={() => this.props.frmSwitcher("reset")}
            >
              Register Here
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}
