import React from "react";
import axios from "axios";
import { Container, Col, Form, Button, Row } from "react-bootstrap";

const API_URL = "https://crm-app123.herokuapp.com/register";

export class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      EmployeeName: "",
      City: "",
      Email: "",
      Password: "",
      Department: "",
    };
  }

  componentDidMount = () => this.getPosts();

  getPosts = async () => {
    // API Call to server and get all posts
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ posts: data });
      console.log(this.state.posts);
    } catch (err) {
      console.error(err);
    }
  };

  createPost = async () => {
    // API Call to server and add new post

    try {
      const { EmployeeName, City, Email, Password, Department } = this.state;
      const { data } = await axios.post(API_URL, {
        EmployeeName,
        City,
        Email,
        Password,
        Department,
      });
      const posts = [...this.state.posts];
      posts.push(data);
      this.setState({
        posts,
        EmployeeName: "",
        City: "",
        Email: "",
        Password: "",
        Department: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  register = (e) => {
    e.preventDefault();
    const match = this.state.posts.filter(
      (user) => user.Email === this.state.Email
    );

    if (match.length !== 0) {
      // console.log("match");
      alert("User already register!!");
    } else {
      //console.log("create");
      this.createPost();
      alert("Register Successfully!!");
    }
  };

  render() {
    return (
      <>
        <Container
          className="mt-3"
          style={{
            height: "590px",
            width: "500px",
            background: "white",
            borderRadius: "10px",
            border: "solid 0.3px black",
            boxShadow: "10px 5px 5px black",
          }}
        >
          <h1
            className="text-center"
            style={{
              color: "rgb(110 23 146)",
            }}
          >
            Registration
          </h1>
          <hr />
          <Form onSubmit={this.register}>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="EmployeeName"
              value={this.state.EmployeeName}
              onChange={this.handleOnChange}
              placeholder="Enter Employee Name"
              required
            />
            &nbsp;
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              name="Email"
              onChange={this.handleOnChange}
              value={this.state.Email}
              placeholder="Enter Email"
              required
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="Password"
              minLength="8"
              onChange={this.handleOnChange}
              value={this.state.Password}
              placeholder="Enter Password"
              required
            />
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="City"
              onChange={this.handleOnChange}
              value={this.state.City}
              placeholder="Enter City"
              required
            />
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              name="Department"
              onChange={this.handleOnChange}
              value={this.state.Department}
              placeholder="Enter Department"
              required
            />
            <br />
            <Button type="submit" color="success" block>
              Create Account
            </Button>
            <hr />
            <Row xs="auto">
              <Col>
                <p>Already Register ?</p>
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
                  onClick={() => this.props.frmSwitcher("login")}
                >
                  Log in now
                </button>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    );
  }
}
