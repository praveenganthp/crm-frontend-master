import React from "react";

import { Form, Button, Col } from "react-bootstrap";
import { ticketContext } from "../../page/ticket/context.page";
import axios from "axios";

const API_URL = "https://crm-app123.herokuapp.com/add-ticket";

export class UpdateTicket extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      _id: "",
      closeticket: false,
      message: "",
    };
  }

  componentDidMount = () => {
    this.getPosts();
  };

  getPosts = async () => {
    // API Call to server and get all posts
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ posts: data });
    } catch (err) {
      console.error(err);
    }
  };

  static contextType = ticketContext;
  updatePost = async () => {
    // API Call to server and update an existing post
    try {
      const tId = localStorage.getItem("tId");
      const { message, posts } = this.state;
      await axios.put(`${API_URL}/${tId}`, {
        message,
      });
      //const index = posts.findIndex((post) => post.id === _id);
      //posts[index] = data;

      this.setState({ posts, message: "" });
    } catch (err) {
      console.log(err);
    }
  };
  deletePost = async (postId) => {
    // API Call to server and delete post
    try {
      await axios.delete(`${API_URL}/${postId}`);

      let posts = [...this.state.posts];
      posts = posts.filter(({ id }) => id !== postId);

      this.setState({ posts });
      // this.componentDidUpdate();

      this.setState({ closeticket: true });
      if ((this.state.closeticket = true)) {
        this.context.handleClick();
      } else {
        alert("Not closed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.updatePost();
  };

  render() {
    return (
      <>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Label>Reply</Form.Label>
            &nbsp;
            <Form.Text>
              Please reply your message here or update the ticket
            </Form.Text>
            <Form.Control
              value={this.state.message}
              onChange={this.handleChange}
              as="textarea"
              row="5"
              name="message"
              required
            />
            <div className="text-right mt-3 mb-3">
              <Button
                style={{
                  backgroundColor: "rgb(110 23 146)",
                }}
                type="submit"
              >
                Reply
              </Button>
            </div>
          </Form>
          <Col className="text-right">
            <Button
              style={{
                position: "absolute",
                top: "85px",
                right: "150px",
                backgroundColor: "white",
                color: "rgb(110 23 146)",
                border: " solid rgb(110 23 146)",
              }}
              onClick={() => {
                const tId = localStorage.getItem("tId");

                this.deletePost(tId);
                localStorage.clear();
              }}
            >
              Close Ticket
            </Button>
          </Col>
        </div>
      </>
    );
  }
}
