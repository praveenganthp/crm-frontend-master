import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Tickettable } from "../../components/ticket-table/TicketTable.comp";

import { PageBreadcrumb } from "../../components/Breadcrumb/Breadcrumb.comp";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://crm-app123.herokuapp.com/add-ticket";

export class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
    };
  }

  componentDidMount = () => this.getPosts();

  getPosts = async () => {
    // API Call to server and get all posts
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ tickets: data });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <PageBreadcrumb page="Dashboard" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5 mb-2">
            <Link to="/add-ticket">
              <Button
                style={{
                  fontSize: "2rem",
                  backgroundColor: "rgb(110 23 146)",
                  padding: "10px 30px",
                }}
              >
                Add New Ticket
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="text-center  mb-2">
            <div>
              <h5>Total tickets: {this.state.tickets.length}</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">Recently Added tickets</Col>
        </Row>
        <hr />

        <Row>
          <Col className="recent-ticket"></Col>
          <Tickettable tickets={this.state.tickets} />
        </Row>
      </Container>
    );
  }
}
