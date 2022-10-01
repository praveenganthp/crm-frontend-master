import React from "react";
import { Form, Jumbotron, Row, Col, Button } from "react-bootstrap";

import axios from "axios";

const API_URL = "https://crm-app123.herokuapp.com/add-ticket";

export class AddTicketForm extends React.Component {
  constructor() {
    super();
    this.state = {
      tickets: [],

      subject: "",
      issueDate: "",
      message: "",
    };
  }

  createPost = async () => {
    // API Call to server and add new post
    try {
      const { subject, issueDate, message } = this.state;
      const { data } = await axios.post(API_URL, {
        subject,
        issueDate,
        message,
      });
      const posts = [...this.state.tickets];
      posts.push(data);
      this.setState({ subject: "", issueDate: "", message: "" });
    } catch (err) {
      console.error(err);
    }
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleOnSubmit = async (e) => {
    e.preventDefault();

    this.createPost();
  };

  render() {
    return (
      <>
        <Jumbotron className="mt-3">
          <h1
            className="text-center"
            style={{
              color: "rgb(110 23 146)",
            }}
          >
            Add New Ticket
          </h1>
          <hr />
          <Form onSubmit={this.handleOnSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Subject
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="subject"
                  value={this.state.subject}
                  // minLength="3"
                  maxLength="100"
                  onChange={this.handleOnChange}
                  placeholder="Subject"
                  required
                />
                <Form.Text className="text-danger"></Form.Text>
              </Col>
            </Form.Group>
            &nbsp;
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Issue Found
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="date"
                  name="issueDate"
                  value={this.state.issueDate}
                  onChange={this.handleOnChange}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows="5"
                value={this.state.message}
                onChange={this.handleOnChange}
                required
              />
            </Form.Group>
            <hr />
            <Button
              type="submit"
              style={{
                backgroundColor: "rgb(110 23 146)",
              }}
              block
            >
              Open Ticket
            </Button>
          </Form>
        </Jumbotron>
      </>
    );
  }
}
