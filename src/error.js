import React, { Component } from "react";

import { Container, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class ErrorPage extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Invalid User.Please Enter CorrectUser Details !!</p>
          </Modal.Body>

          <Modal.Footer>
            <Link to="/">
              <Button variant="primary">Exit</Button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </Container>
    );
  }
}
